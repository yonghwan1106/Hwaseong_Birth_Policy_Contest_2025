'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Brain,
  MessageCircle,
  TrendingUp,
  Users,
  BarChart3,
  Building2,
  Zap,
  Shield,
  Clock,
  Heart,
  Target,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Settings,
  Database,
  Smartphone,
  Cloud,
  Lock,
  Wifi
} from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const AIEcosystemPage = () => {
  const [activeComponent, setActiveComponent] = useState(0)
  const [selectedView, setSelectedView] = useState('overview')

  const coreComponents = [
    {
      id: 'ai-counseling',
      title: 'AI 24시간 육아 상담',
      subtitle: '언제든지 도움받는 스마트 육아',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-600',
      description: 'ChatGPT 수준의 AI가 24시간 실시간으로 육아 고민을 해결해드립니다.',
      features: [
        '자연어 처리 기반 대화형 인터페이스',
        '육아 전문 지식 데이터베이스 연동',
        '개인별 육아 히스토리 학습',
        '응급상황 자동 감지 및 전문의 연결',
        '다국어 지원 (한국어, 영어, 중국어)',
        '음성 인식 및 음성 합성 기능'
      ],
      technical: {
        aiModel: 'GPT-4 기반 Fine-tuning',
        responseTime: '평균 3초 이내',
        accuracy: '95% 이상',
        availability: '99.9% 가동률',
        languages: '5개 언어',
        concurrent: '동시 1000명 지원'
      },
      workflows: [
        { step: 1, title: '질문 입력', desc: '음성 또는 텍스트로 질문' },
        { step: 2, title: 'AI 분석', desc: '상황 파악 및 지식 검색' },
        { step: 3, title: '답변 생성', desc: '개인화된 맞춤 답변 제공' },
        { step: 4, title: '피드백 수집', desc: '만족도 평가 및 학습' }
      ]
    },
    {
      id: 'development-guide',
      title: '개인 맞춤형 발달 가이드',
      subtitle: '내 아이만의 성장 로드맵',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      description: 'AI 분석으로 아이의 발달 상태를 정확히 파악하고 맞춤형 가이드를 제공합니다.',
      features: [
        '영상 기반 발달 단계 자동 분석',
        '언어 발달 모니터링 시스템',
        '행동 패턴 AI 분석',
        '발달 지연 조기 발견 알고리즘',
        '월령별 맞춤 놀이 추천',
        '성장 기록 자동화 및 시각화'
      ],
      technical: {
        aiModel: 'Computer Vision + NLP',
        analysisTime: '실시간 분석',
        accuracy: '92% 발달 예측',
        dataPoints: '50+ 지표 추적',
        ageRange: '0-7세 대상',
        updateFreq: '주간 업데이트'
      },
      workflows: [
        { step: 1, title: '데이터 수집', desc: '영상, 음성, 행동 기록' },
        { step: 2, title: 'AI 분석', desc: '발달 지표별 정량 평가' },
        { step: 3, title: '결과 생성', desc: '개인별 발달 리포트' },
        { step: 4, title: '가이드 제공', desc: '맞춤형 활동 추천' }
      ]
    },
    {
      id: 'smart-matching',
      title: '스마트 돌봄 매칭',
      subtitle: '신뢰할 수 있는 돌봄 서비스',
      icon: Users,
      color: 'from-purple-500 to-pink-600',
      description: '위치 기반으로 검증된 시터를 30분 내에 매칭해드립니다.',
      features: [
        'GPS 기반 실시간 위치 매칭',
        '블록체인 기반 신원 인증',
        'AI 기반 최적 매칭 알고리즘',
        '실시간 돌봄 현황 모니터링',
        '24시간 응급 상황 대응',
        '투명한 평가 및 리뷰 시스템'
      ],
      technical: {
        aiModel: 'Recommendation System',
        matchingTime: '30분 이내',
        providerPool: '500+ 검증된 시터',
        coverage: '화성시 전역',
        rating: '4.9/5 평균 만족도',
        emergency: '24/7 응급 대응'
      },
      workflows: [
        { step: 1, title: '돌봄 요청', desc: '시간, 장소, 요구사항 입력' },
        { step: 2, title: 'AI 매칭', desc: '최적 시터 자동 선별' },
        { step: 3, title: '매칭 완료', desc: '시터 배정 및 연결' },
        { step: 4, title: '서비스 관리', desc: '실시간 모니터링 및 평가' }
      ]
    },
    {
      id: 'data-feedback',
      title: '데이터 기반 정책 피드백',
      subtitle: '실시간 정책 개선 시스템',
      icon: BarChart3,
      color: 'from-orange-500 to-red-600',
      description: '빅데이터 분석으로 정책 효과를 실시간 측정하고 개선합니다.',
      features: [
        '익명화된 사용자 데이터 수집',
        '실시간 정책 효과 측정',
        'AI 기반 미래 예측 모델',
        '시민 만족도 자동 조사',
        '타 지자체 비교 분석',
        '정책 개선안 자동 제안'
      ],
      technical: {
        aiModel: 'Predictive Analytics',
        dataProcess: '실시간 처리',
        prediction: '95% 예측 정확도',
        privacy: '완전 익명화',
        reporting: '실시간 대시보드',
        automation: '자동 최적화'
      },
      workflows: [
        { step: 1, title: '데이터 수집', desc: '서비스 이용 패턴 분석' },
        { step: 2, title: '효과 측정', desc: '정책 KPI 실시간 추적' },
        { step: 3, title: '예측 분석', desc: 'AI 기반 미래 시나리오' },
        { step: 4, title: '정책 제안', desc: '개선안 자동 생성' }
      ]
    },
    {
      id: 'enterprise-cooperation',
      title: '지역 기업 협력 생태계',
      subtitle: '상생과 혁신의 플랫폼',
      icon: Building2,
      color: 'from-indigo-500 to-purple-600',
      description: '화성시 IT 대기업들과의 협력으로 지속가능한 생태계를 구축합니다.',
      features: [
        '기업별 맞춤형 육아 지원 패키지',
        '임직원 전용 서비스 채널',
        '유연근무제 연계 시스템',
        'CSR 활동 통합 관리',
        '스타트업 인큐베이팅 프로그램',
        '기술 협력 플랫폼'
      ],
      technical: {
        aiModel: 'Enterprise Integration',
        partners: '20+ 기업 참여',
        employees: '7만+ 임직원',
        integration: 'ERP 시스템 연동',
        customization: '기업별 맞춤화',
        roi: '기업당 평균 300% ROI'
      },
      workflows: [
        { step: 1, title: '기업 온보딩', desc: '맞춤형 패키지 설계' },
        { step: 2, title: '시스템 연동', desc: 'ERP 및 HR 시스템 통합' },
        { step: 3, title: '서비스 제공', desc: '임직원 대상 육아 지원' },
        { step: 4, title: '효과 분석', desc: 'ROI 측정 및 개선' }
      ]
    }
  ]

  const systemArchitecture = {
    layers: [
      {
        name: '사용자 인터페이스 계층',
        components: ['모바일 앱', '웹 포털', '음성 인터페이스', '챗봇'],
        color: 'bg-blue-100 border-blue-300'
      },
      {
        name: '서비스 로직 계층',
        components: ['상담 서비스', '발달 분석', '매칭 시스템', '데이터 분석'],
        color: 'bg-green-100 border-green-300'
      },
      {
        name: 'AI 엔진 계층',
        components: ['자연어 처리', '컴퓨터 비전', '추천 시스템', '예측 분석'],
        color: 'bg-purple-100 border-purple-300'
      },
      {
        name: '데이터 계층',
        components: ['사용자 데이터', '지식 베이스', '학습 데이터', '정책 데이터'],
        color: 'bg-orange-100 border-orange-300'
      },
      {
        name: '인프라 계층',
        components: ['클라우드 서비스', '보안 시스템', '네트워크', '모니터링'],
        color: 'bg-gray-100 border-gray-300'
      }
    ]
  }

  const securityFeatures = [
    { icon: Lock, title: '개인정보 보호', desc: '최고 수준의 암호화와 익명화 처리' },
    { icon: Shield, title: '데이터 보안', desc: 'ISO 27001 인증 보안 체계' },
    { icon: Cloud, title: '클라우드 보안', desc: 'AWS/Azure 멀티 클라우드 구조' },
    { icon: Wifi, title: '네트워크 보안', desc: 'VPN 및 방화벽 다중 보안' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* 히어로 섹션 */}
        <section className="section bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-display font-display font-bold text-gray-900 mb-6">
                <span className="text-gradient">AI 육아 생태계</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                5개 핵심 구성요소가 유기적으로 연결된 통합 플랫폼으로 
                완전한 육아 지원 환경을 제공합니다.
              </p>
            </motion.div>

            {/* 시스템 개요 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-4 gap-6 mb-16"
            >
              {[
                { icon: Brain, title: 'AI 기반', value: '5개', desc: '핵심 AI 엔진', color: 'from-blue-500 to-cyan-600' },
                { icon: Users, title: '통합 서비스', value: '24/7', desc: '언제나 이용 가능', color: 'from-green-500 to-emerald-600' },
                { icon: Shield, title: '보안성', value: '100%', desc: '개인정보 보호', color: 'from-purple-500 to-pink-600' },
                { icon: Zap, title: '확장성', value: '무제한', desc: '사용자 확장', color: 'from-orange-500 to-red-600' }
              ].map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="card text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{stat.title}</h3>
                    <p className="text-sm text-gray-600">{stat.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* 5대 핵심 구성요소 상세 */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                🎯 5대 핵심 구성요소 상세 분석
              </h2>
              <p className="text-lg text-gray-600">
                각 구성요소의 기술적 구현 방법과 기대 효과를 자세히 살펴보세요
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-8">
              {/* 컴포넌트 선택 메뉴 */}
              <div className="lg:col-span-4">
                <div className="sticky top-8 space-y-3">
                  {coreComponents.map((component, index) => {
                    const IconComponent = component.icon
                    return (
                      <motion.button
                        key={component.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setActiveComponent(index)}
                        className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                          activeComponent === index
                            ? 'bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-primary-200 shadow-lg'
                            : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            activeComponent === index
                              ? `bg-gradient-to-r ${component.color}`
                              : 'bg-white group-hover:bg-gray-200'
                          }`}>
                            <IconComponent className={`w-6 h-6 ${
                              activeComponent === index ? 'text-white' : 'text-gray-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <h3 className={`font-semibold mb-1 transition-colors ${
                              activeComponent === index ? 'text-primary-600' : 'text-gray-900'
                            }`}>
                              {component.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {component.subtitle}
                            </p>
                          </div>
                          <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                            activeComponent === index 
                              ? 'text-primary-600 transform rotate-90' 
                              : 'text-gray-400 group-hover:text-gray-600'
                          }`} />
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {/* 선택된 컴포넌트 상세 */}
              <div className="lg:col-span-8">
                <motion.div
                  key={activeComponent}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {/* 상세 정보 헤더 */}
                  <div className="card">
                    <div className={`w-16 h-16 bg-gradient-to-r ${coreComponents[activeComponent].color} rounded-2xl flex items-center justify-center mb-6`}>
                      {(() => {
                        const IconComponent = coreComponents[activeComponent].icon
                        return <IconComponent className="w-8 h-8 text-white" />
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {coreComponents[activeComponent].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {coreComponents[activeComponent].description}
                    </p>

                    {/* 기술 스펙 */}
                    <div className="grid md:grid-cols-3 gap-4">
                      {Object.entries(coreComponents[activeComponent].technical).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-50 rounded-lg p-3 text-center"
                        >
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-600">
                            {key === 'aiModel' && 'AI 모델'}
                            {key === 'responseTime' && '응답 시간'}
                            {key === 'accuracy' && '정확도'}
                            {key === 'availability' && '가동률'}
                            {key === 'languages' && '지원 언어'}
                            {key === 'concurrent' && '동시 사용자'}
                            {key === 'analysisTime' && '분석 시간'}
                            {key === 'dataPoints' && '데이터 포인트'}
                            {key === 'ageRange' && '대상 연령'}
                            {key === 'updateFreq' && '업데이트'}
                            {key === 'matchingTime' && '매칭 시간'}
                            {key === 'providerPool' && '시터 풀'}
                            {key === 'coverage' && '서비스 지역'}
                            {key === 'rating' && '만족도'}
                            {key === 'emergency' && '응급 대응'}
                            {key === 'dataProcess' && '데이터 처리'}
                            {key === 'prediction' && '예측 정확도'}
                            {key === 'privacy' && '개인정보'}
                            {key === 'reporting' && '리포팅'}
                            {key === 'automation' && '자동화'}
                            {key === 'partners' && '파트너'}
                            {key === 'employees' && '임직원'}
                            {key === 'integration' && '시스템 연동'}
                            {key === 'customization' && '맞춤화'}
                            {key === 'roi' && 'ROI'}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* 주요 기능 */}
                  <div className="card">
                    <h4 className="font-semibold text-gray-900 mb-6 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-orange-500" />
                      주요 기능 및 특징
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {coreComponents[activeComponent].features.map((feature, index) => (
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

                  {/* 워크플로우 */}
                  <div className="card">
                    <h4 className="font-semibold text-gray-900 mb-6 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-purple-500" />
                      서비스 워크플로우
                    </h4>
                    <div className="grid md:grid-cols-4 gap-4">
                      {coreComponents[activeComponent].workflows.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 }}
                          className="text-center"
                        >
                          <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white font-bold">{step.step}</span>
                          </div>
                          <h5 className="font-semibold text-gray-900 mb-2">{step.title}</h5>
                          <p className="text-sm text-gray-600">{step.desc}</p>
                          {index < coreComponents[activeComponent].workflows.length - 1 && (
                            <ArrowRight className="w-4 h-4 text-gray-400 mx-auto mt-4 hidden md:block" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 시스템 아키텍처 */}
        <section className="section bg-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                🏗️ 시스템 아키텍처
              </h2>
              <p className="text-lg text-gray-600">
                확장 가능하고 안전한 마이크로서비스 기반 아키텍처
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {systemArchitecture.layers.map((layer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`border-2 rounded-2xl p-6 ${layer.color}`}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{layer.name}</h3>
                    <div className="grid md:grid-cols-4 gap-3">
                      {layer.components.map((component, compIndex) => (
                        <motion.div
                          key={compIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + compIndex * 0.05 }}
                          className="bg-white rounded-lg p-3 text-center shadow-sm"
                        >
                          <span className="text-sm font-medium text-gray-800">{component}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 데이터 플로우 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 card text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">🔄 데이터 플로우</h3>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  {[
                    { icon: Smartphone, label: '사용자 입력' },
                    { icon: Brain, label: 'AI 처리' },
                    { icon: Database, label: '데이터 저장' },
                    { icon: BarChart3, label: '분석 결과' },
                    { icon: Heart, label: '서비스 제공' }
                  ].map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        {index < 4 && <ArrowRight className="w-4 h-4 text-gray-400" />}
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 보안 및 개인정보 보호 */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                🛡️ 보안 및 개인정보 보호
              </h2>
              <p className="text-lg text-gray-600">
                최고 수준의 보안 체계로 안전한 육아 데이터 관리
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {securityFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="card text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* 개인정보 처리 원칙 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-r from-blue-50 to-purple-50"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">개인정보 처리 원칙</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-3">최소 수집</h4>
                  <p className="text-sm text-gray-600">
                    서비스 제공에 필요한 최소한의 정보만 수집하며, 
                    수집 목적이 달성되면 즉시 파기합니다.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-3">완전 익명화</h4>
                  <p className="text-sm text-gray-600">
                    모든 데이터는 개인 식별이 불가능한 형태로 
                    익명화 처리되어 분석에 활용됩니다.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-3">투명한 운영</h4>
                  <p className="text-sm text-gray-600">
                    데이터 처리 현황을 실시간으로 공개하며, 
                    시민 감시단을 통한 투명한 운영을 보장합니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 혁신성과 차별화 */}
        <section className="section bg-gradient-to-r from-primary-500 to-success-500 text-white">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Lightbulb className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-heading font-bold mb-6">🚀 혁신성과 차별화</h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                전국 최초 지자체 주도 AI 기반 통합 육아 플랫폼으로 
                기존 정책 대비 혁신적 효율성을 제공합니다.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-2">1/30</h3>
                  <p className="opacity-90">기존 정책 대비 비용</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-2">10배</h3>
                  <p className="opacity-90">서비스 효율성 향상</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-2">24/7</h3>
                  <p className="opacity-90">언제나 이용 가능</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AIEcosystemPage