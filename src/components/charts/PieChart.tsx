'use client'

import { useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem
} from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { motion } from 'framer-motion'

// Chart.js 컴포넌트 등록
ChartJS.register(ArcElement, Tooltip, Legend)

interface BudgetItem {
  category: string
  amount: number
  percentage: number
  color: string
}

interface PieChartProps {
  data: BudgetItem[]
  total: number
  title?: string
  showLegend?: boolean
  animate?: boolean
}

const PieChart = ({ data, total, title, showLegend = true, animate = true }: PieChartProps) => {
  const chartRef = useRef<ChartJS<'pie'>>(null)

  // 색상 매핑 함수
  const getChartColor = (colorClass: string) => {
    const colorMap: { [key: string]: string } = {
      'bg-blue-500': '#3B82F6',
      'bg-green-500': '#10B981', 
      'bg-purple-500': '#8B5CF6',
      'bg-orange-500': '#F97316',
      'bg-red-500': '#EF4444',
      'bg-yellow-500': '#EAB308',
      'bg-gray-500': '#6B7280'
    }
    return colorMap[colorClass] || '#6B7280'
  }

  // 차트 데이터 구성
  const chartData = {
    labels: data.map(item => item.category),
    datasets: [
      {
        data: data.map(item => item.percentage),
        backgroundColor: data.map(item => getChartColor(item.color)),
        borderColor: data.map(item => getChartColor(item.color)),
        borderWidth: 2,
        hoverBorderWidth: 3,
        hoverBackgroundColor: data.map(item => getChartColor(item.color) + 'CC'),
      }
    ]
  }

  // 차트 옵션 설정
  const options: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 12,
            family: 'Pretendard'
          },
          color: '#374151'
        }
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
          label: function(context: TooltipItem<'pie'>) {
            const label = context.label || ''
            const value = context.parsed
            const amount = data[context.dataIndex].amount
            const formattedAmount = (amount / 100000000).toFixed(1)
            return `${label}: ${value}% (${formattedAmount}억원)`
          }
        }
      }
    },
    animation: animate ? {
      animateRotate: true,
      animateScale: true,
      duration: 1500,
      easing: 'easeInOutQuart'
    } : false,
    elements: {
      arc: {
        borderJoinStyle: 'round',
      }
    }
  }

  return (
    <div className="relative">
      {title && (
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{title}</h3>
      )}
      
      <div className="relative">
        {/* 차트 컨테이너 */}
        <div className="w-80 h-80 mx-auto mb-8 relative">
          <Pie ref={chartRef} data={chartData} options={options} />
          
          {/* 중앙 라벨 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg border-2 border-gray-100">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">총 투자</div>
                <div className="text-sm font-semibold text-primary-600">
                  {(total / 100000000).toFixed(1)}억원
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 커스텀 범례 (차트 범례 대신 사용 시) */}
        {!showLegend && (
          <div className="space-y-3">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: getChartColor(item.color) }}
                  />
                  <span className="font-medium text-gray-900">{item.category}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">
                    {(item.amount / 100000000).toFixed(1)}억원
                  </div>
                  <div className="text-sm text-gray-600">{item.percentage}%</div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* 요약 정보 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-6 grid grid-cols-2 gap-4 text-center"
      >
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="text-lg font-bold text-blue-600">
            {data.length}개
          </div>
          <div className="text-sm text-blue-700">투자 분야</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <div className="text-lg font-bold text-green-600">
            100%
          </div>
          <div className="text-sm text-green-700">예산 배분</div>
        </div>
      </motion.div>
    </div>
  )
}

export default PieChart