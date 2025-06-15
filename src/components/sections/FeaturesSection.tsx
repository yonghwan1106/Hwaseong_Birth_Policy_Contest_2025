'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  MessageCircle, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Building2,
  Clock,
  Shield,
  Zap,
  ChevronRight,
  CheckCircle
} from 'lucide-react'

const FeaturesSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 'ai-counseling',
      icon: MessageCircle,
      title: 'AI 기반 24시간 육아 상담',
      subtitle: '언제든지 도움받는 스마트 육아',
      description: 'ChatGPT 수준의 AI가 24시간 실시간으로 육아 고민을 해결해드립니다.',
      color: 'from-blue-500 to-cyan-600',
      features: [
        '3분 내 즉시 응답',
        '5개국어 지원',
        '음성 인터페이스',
        '전문의 자동 연결'
      ],
      benefits: [
        '야간 응급상황 대응',
        '산후우울증 케어',
        '개월수별 맞춤 상담',
        '과학적 근거 기반 조언'
      ],
      stats: {
        accuracy: '95%',
        response: '3분',
        satisfaction: '4.8/5'
      }
    },
    {
      id: 'development-guide',
      icon: TrendingUp,
      title: '개인 맞춤형 발달 가이드',
      subtitle: '내 아이만의 성장 로드맵',
      description: 'AI 분석으로 아이의 발달 상태를 정확히 파악하고 맞춤형 가이드를 제공합니다.',
      color: 'from-green-500 to-emerald-600',
      features: [
        '영상 기반 발달 분석',
        '언어 발달 모니터링',
        '행동 패턴 분석',
        '발달 지연 조기 발견'
      ],
      benefits: [
        '개인별 놀이 추천',
        '월령별 학습 자료',
        '성장 기록 자동화',
        '부모 교육 맞춤화'
      ],
      stats: {
        accuracy: '92%',
        detection: '조기발견',
        coverage: '0-7세'
      }
    },
    {
      id: 'smart-matching',
      icon: Users,
      title: '스마트 돌봄 매칭',
      subtitle: '신뢰할 수 있는 돌봄 서비스',
      description: '위치 기반으로 검증된 시터를 30분 내에 매칭해드립니다.',
      color: 'from-purple-500 to-pink-600',
      features: [
        '30분 내 매칭',
        '블록체인 인증',
        '실시간 위치 추적',
        '24시간 응급 서비스'
      ],
      benefits: [
        '대기업 임직원 할인',
        '신혼부부 특별 지원',
        '다자녀 가정 우대',
        '그룹 돌봄 서비스'
      ],
      stats: {
        matching: '30분',
        rating: '4.9/5',
        coverage: '화성시 전역'
      }
    },
    {
      id: 'data-feedback',
      icon: BarChart3,
      title: '데이터 기반 정책 피드백',
      subtitle: '실시간 정책 개선 시스템',
      description: '빅데이터 분석으로 정책 효과를 실시간 측정하고 개선합니다.',
      color: 'from-orange-500 to-red-600',
      features: [
        '익명화된 데이터 수집',
        '실시간 효과 측정',
        'AI 기반 예측 모델',
        '시민 만족도 조사'
      ],
      benefits: [
        '정책 자동 제안',
        '효과성 시뮬레이션',
        '타 지자체 비교',
        '맞춤형 정책 개발'
      ],
      stats: {
        realtime: '실시간',
        prediction: '95%',
        optimization: '지속적'
      }
    },
    {
      id: 'partnership',
      icon: Building2,
      title: '지역 기업 협력 생태계',
      subtitle: '상생과 혁신의 플랫폼',
      description: '화성시 IT 대기업들과의 협력으로 지속가능한 생태계를 구축합니다.',
      color: 'from-indigo-500 to-purple-600',
      features: [
        '삼성전자 기술 협력',
        'LG 인프라 지원',
        '네이버/카카오 플랫폼',
        '스타트업 인큐베이팅'
      ],
      benefits: [
        '기업 내 육아 지원',
        '유연 근무 연계',
        '임직원 특별 혜택',
        'CSR 연계 운영'
      ],
      stats: {
        partners: '20+개',
        investment: '3.3억원',
        jobs: '250개'
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section id="features-section" ref={sectionRef} className="section bg-white">
      <div className="container">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading font-display font-bold text-gray-900 mb-4">
            <span className="text-gradient">5대 핵심 구성요소</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI 기술과 인간의 따뜻함이 조화된 통합 육아 지원 플랫폼
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* 기능 탭 메뉴 (모바일에서는 상단, 데스크톱에서는 좌측) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 mb-8 lg:mb-0"
          >
            <div className="space-y-3">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.button
                    key={feature.id}
                    variants={itemVariants}
                    onClick={() => setActiveFeature(index)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                      activeFeature === index
                        ? 'bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-primary-200'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeFeature === index
                          ? `bg-gradient-to-r ${feature.color}`
                          : 'bg-white group-hover:bg-gray-200'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          activeFeature === index ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-1 transition-colors ${
                          activeFeature === index ? 'text-primary-600' : 'text-gray-900'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {feature.subtitle}
                        </p>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                        activeFeature === index 
                          ? 'text-primary-600 transform rotate-90' 
                          : 'text-gray-400 group-hover:text-gray-600'
                      }`} />
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* 선택된 기능 상세 정보 */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="card h-full">
              {/* 헤더 */}
              <div className="mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${features[activeFeature].color} rounded-2xl flex items-center justify-center mb-6`}>
                  {(() => {
                    const IconComponent = features[activeFeature].icon
                    return <IconComponent className="w-8 h-8 text-white" />
                  })()}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {features[activeFeature].description}
                </p>
              </div>

              {/* 핵심 기능 */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  핵심 기능
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features[activeFeature].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 특별 혜택 */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-500" />
                  특별 혜택
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features[activeFeature].benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 성과 지표 */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-500" />
                  성과 지표
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(features[activeFeature].stats).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl"
                    >
                      <div className="text-xl font-bold text-gray-900 mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key === 'accuracy' && '정확도'}
                        {key === 'response' && '응답시간'}
                        {key === 'satisfaction' && '만족도'}
                        {key === 'detection' && '감지능력'}
                        {key === 'coverage' && '적용범위'}
                        {key === 'matching' && '매칭시간'}
                        {key === 'rating' && '평점'}
                        {key === 'realtime' && '실시간성'}
                        {key === 'prediction' && '예측정확도'}
                        {key === 'optimization' && '최적화'}
                        {key === 'partners' && '파트너사'}
                        {key === 'investment' && '투자금액'}
                        {key === 'jobs' && '일자리'}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 통합 시스템 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🎯 하나로 연결된 통합 시스템
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              5개 구성요소가 유기적으로 연결되어 <strong>완전한 육아 생태계</strong>를 제공합니다. 
              AI 상담에서 시작해 발달 분석, 돌봄 매칭, 정책 피드백, 기업 협력까지 
              <strong>원스톱 서비스</strong>로 육아의 모든 단계를 지원합니다.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/ai-ecosystem'}
              className="btn-primary flex items-center gap-2 mx-auto"
            >
              상세 설계 보기
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
