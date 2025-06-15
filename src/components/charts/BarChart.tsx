'use client'

import { useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { motion } from 'framer-motion'

// Chart.js 컴포넌트 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface BarData {
  label: string
  value: number
  color: string
  period?: string
}

interface BarChartProps {
  data: BarData[]
  title?: string
  horizontal?: boolean
  animate?: boolean
  showValues?: boolean
  height?: number
}

const BarChart = ({ 
  data, 
  title, 
  horizontal = false, 
  animate = true, 
  showValues = true,
  height = 300 
}: BarChartProps) => {
  const chartRef = useRef<ChartJS<'bar'>>(null)

  // 색상 매핑 함수
  const getChartColor = (colorClass: string) => {
    const colorMap: { [key: string]: string } = {
      'from-blue-500 to-blue-600': '#3B82F6',
      'from-green-500 to-green-600': '#10B981', 
      'from-purple-500 to-purple-600': '#8B5CF6',
      'from-orange-500 to-orange-600': '#F97316',
      'from-red-500 to-red-600': '#EF4444',
      'from-yellow-500 to-yellow-600': '#EAB308',
      'from-gray-500 to-gray-600': '#6B7280'
    }
    return colorMap[colorClass] || '#3B82F6'
  }

  // 차트 데이터 구성
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: data.map(item => getChartColor(item.color) + '80'),
        borderColor: data.map(item => getChartColor(item.color)),
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
        hoverBackgroundColor: data.map(item => getChartColor(item.color) + 'CC'),
        hoverBorderColor: data.map(item => getChartColor(item.color)),
        hoverBorderWidth: 3
      }
    ]
  }

  // 차트 옵션 설정
  const options: ChartOptions<'bar'> = {
    indexAxis: horizontal ? 'y' as const : 'x' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        callbacks: {
          label: function(context: TooltipItem<'bar'>) {
            const dataIndex = context.dataIndex
            const item = data[dataIndex]
            return `${item.label}: ${context.parsed.y || context.parsed.x}%${item.period ? ` (${item.period})` : ''}`
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: !horizontal,
          color: 'rgba(156, 163, 175, 0.1)'
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 12,
            family: 'Pretendard'
          }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          display: horizontal,
          color: 'rgba(156, 163, 175, 0.1)'
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 12,
            family: 'Pretendard'
          }
        }
      }
    },
    animation: animate ? {
      duration: 1500,
      easing: 'easeInOutQuart'
    } : false,
    elements: {
      bar: {
        borderRadius: 8
      }
    }
  }

  return (
    <div className="relative">
      {title && (
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{title}</h3>
      )}
      
      <div className="relative" style={{ height: `${height}px` }}>
        <Bar ref={chartRef} data={chartData} options={options} />
      </div>

      {/* 값 표시 (옵션) */}
      {showValues && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-4 grid grid-cols-1 gap-2 text-sm"
        >
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded" 
                  style={{ backgroundColor: getChartColor(item.color) }}
                />
                <span className="font-medium text-gray-900">{item.label}</span>
              </div>
              <div className="text-right">
                <span className="font-semibold text-gray-900">{item.value}%</span>
                {item.period && (
                  <div className="text-xs text-gray-600">{item.period}</div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default BarChart