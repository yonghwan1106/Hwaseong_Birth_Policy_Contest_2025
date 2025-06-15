'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Play, Users, Brain, Heart } from 'lucide-react'

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0)
  const heroTexts = [
    "미래 육아의 허브",
    "AI 기반 돌봄 혁신", 
    "전국 최초 모델",
    "화성시의 도전"
  ]

  const stats = [
    { value: "2,945%", label: "투자 수익률", icon: "📈" },
    { value: "1.1명", label: "목표 출생률", icon: "👶" },
    { value: "324억원", label: "3년간 경제효과", icon: "💰" },
    { value: "8개", label: "확산 지자체", icon: "🌍" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const scrollToContent = () => {
    const nextSection = document.getElementById('stats-section')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* 플로팅 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* 메인 헤드라인 */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-hero font-display font-bold text-gray-900"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="block text-gradient">화성 AI 육아 생태계</span>
              <motion.span 
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="block text-primary-600 mt-2"
              >
                {heroTexts[currentText]}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              전국 최초 지자체 주도 <strong className="text-primary-600">AI 기반 통합 육아 지원 플랫폼</strong>으로<br />
              저출생 문제를 해결하는 혁신적 정책 제안
            </motion.p>
          </motion.div>

          {/* 핵심 수치 */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200 
                }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-2xl md:text-3xl font-bold text-gradient mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA 버튼들 */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-3 group"
              onClick={() => window.location.href = '/ai-ecosystem'}
            >
              <Brain className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              정책 제안 전체 보기
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4 flex items-center gap-3 group"
              onClick={() => window.location.href = '/experience'}
            >
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              AI 체험하기
            </motion.button>
          </motion.div>

          {/* 신뢰성 지표 */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 pt-8"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>화성시 공식 제안</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>데이터 기반 분석</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>시민 중심 설계</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToContent}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors"
          >
            <span className="text-sm font-medium">자세히 보기</span>
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>

      {/* 그래디언트 오버레이 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default HeroSection
