'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, DollarSign, Globe, ArrowUp } from 'lucide-react'

const StatsSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const stats = [
    {
      id: 'roi',
      icon: TrendingUp,
      value: 2945,
      suffix: '%',
      label: '투자 수익률',
      description: '11억 투자로 324억 효과',
      color: 'from-green-500 to-emerald-600',
      delay: 0
    },
    {
      id: 'birthrate',
      icon: Users,
      value: 1.1,
      suffix: '명',
      label: '목표 출생률',
      description: '현재 1.01명 → 1.1명',
      color: 'from-blue-500 to-cyan-600', 
      delay: 0.2
    },
    {
      id: 'economic',
      icon: DollarSign,
      value: 108,
      suffix: '억원',
      label: '연간 경제효과',
      description: '3년 누적 324억원',
      color: 'from-yellow-500 to-orange-600',
      delay: 0.4
    },
    {
      id: 'expansion',
      icon: Globe,
      value: 10,
      suffix: '개',
      label: '확산 지자체',
      description: '전국 표준 모델',
      color: 'from-purple-500 to-pink-600',
      delay: 0.6
    }
  ]

  const AnimatedCounter = ({ value, suffix, duration = 2 }: { value: number, suffix: string, duration?: number }) => {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
      if (isInView && !hasAnimated) {
        setHasAnimated(true)
        const startTime = Date.now()
        const startValue = 0
        
        const animate = () => {
          const now = Date.now()
          const elapsed = (now - startTime) / 1000
          const progress = Math.min(elapsed / duration, 1)
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          const currentValue = startValue + (value - startValue) * easeOutQuart
          
          setCount(currentValue)
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setCount(value)
          }
        }
        
        requestAnimationFrame(animate)
      }
    }, [isInView, value, duration, hasAnimated])

    const formatValue = (num: number) => {
      if (suffix === '%' || suffix === '개' || suffix === '명') {
        return num.toFixed(suffix === '명' ? 1 : 0)
      }
      return Math.round(num).toLocaleString()
    }

    return (
      <span className="tabular-nums">
        {formatValue(count)}{suffix}
      </span>
    )
  }

  return (
    <section id="stats-section" ref={sectionRef} className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading font-display font-bold text-gray-900 mb-4">
            <span className="text-gradient">핵심 성과 지표</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            데이터 기반 분석으로 검증된 실현 가능한 목표와 기대 효과
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1 
                } : {}}
                transition={{ 
                  duration: 0.6,
                  delay: stat.delay,
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
              >
                <div className="card card-hover h-full relative overflow-hidden">
                  {/* 배경 그래디언트 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* 아이콘 */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* 수치 */}
                  <div className="text-center mb-4">
                    <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                      <AnimatedCounter 
                        value={stat.value} 
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {stat.description}
                    </p>
                  </div>

                  {/* 성장 화살표 애니메이션 */}
                  <motion.div
                    animate={{ 
                      y: [0, -4, 0],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: stat.delay + 2
                    }}
                    className="flex justify-center"
                  >
                    <ArrowUp className={`w-5 h-5 text-gradient bg-gradient-to-r ${stat.color} bg-clip-text`} />
                  </motion.div>

                  {/* 호버 효과 */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 rounded-2xl transition-colors duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 부가 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              왜 이런 성과가 가능한가?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="space-y-2">
                <div className="font-medium text-primary-600">🎯 타겟 명확성</div>
                <div>화성시 특성에 최적화된<br />맞춤형 솔루션</div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-success-600">💡 기술 혁신성</div>
                <div>전국 최초 AI 기반<br />통합 플랫폼</div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-warm-600">🤝 협력 생태계</div>
                <div>대기업 파트너십을 통한<br />시너지 창출</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 데이터 출처 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 text-center text-xs text-gray-500"
        >
          * 수치는 통계청, 한국개발연구원(KDI), 네이버 트렌드 분석 데이터를 기반으로 산출
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
