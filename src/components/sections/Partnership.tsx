'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Building2,
  Users,
  TrendingUp,
  Star,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  Target,
  Award,
  DollarSign,
  Heart
} from 'lucide-react'

const Partnership = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activePartner, setActivePartner] = useState(0)

  const partners = [
    {
      id: 'samsung',
      name: '삼성전자',
      logo: '🇰🇷',
      category: 'AI/IoT 기술',
      description: '세계 최고 수준의 AI 반도체와 IoT 기술로 스마트 육아 환경을 구축합니다.',
      contributions: [
        'Exynos AI 칩셋 제공',
        '갤럭시 IoT 생태계 연동',
        '음성인식 AI 기술 지원',
        '스마트홈 연계 서비스'
      ],
      investment: '15억원',
      employees: '화성 캠퍼스 3만명',
      benefits: [
        '임직원 전용 육아 지원',
        '사내 어린이집 AI 도입',
        '유연근무제 확대'
      ],
      commitment: '3년간 기술 지원 및 15억원 현물 투자'
    },
    {
      id: 'sk',
      name: 'SK하이닉스',
      logo: '💾',
      category: '데이터 인프라',
      description: '고성능 메모리 기술로 빅데이터 처리와 AI 연산 성능을 최적화합니다.',
      contributions: [
        'HBM 메모리 솔루션',
        '클라우드 스토리지 제공',
        '데이터센터 인프라',
        '실시간 처리 최적화'
      ],
      investment: '8억원',
      employees: '이천 캠퍼스 2만명',
      benefits: [
        '직원 자녀 돌봄 서비스',
        '출산 장려금 확대',
        'AI 육아 앱 무료 제공'
      ],
      commitment: '데이터 인프라 구축 및 운영 지원'
    },
    {
      id: 'hyundai',
      name: '현대자동차',
      logo: '🚗',
      category: '모빌리티',
      description: '스마트 모빌리티 솔루션으로 안전하고 편리한 돌봄 서비스를 제공합니다.',
      contributions: [
        '자율주행 돌봄 셔틀',
        'IoT 차량 안전 시스템',
        '응급상황 자동 연결',
        '친환경 전기차 운영'
      ],
      investment: '5억원',
      employees: '남양연구소 1.5만명',
      benefits: [
        '임직원 자녀 픽업 서비스',
        '차량 내 AI 보육 시스템',
        '가족 친화 워크샵'
      ],
      commitment: '모빌리티 서비스 3년간 무상 제공'
    },
    {
      id: 'kakao',
      name: '카카오',
      logo: '💬',
      category: '플랫폼/UX',
      description: '사용자 친화적인 플랫폼과 소통 기술로 접근성을 극대화합니다.',
      contributions: [
        '카카오톡 채널 연동',
        'UX/UI 디자인 지원',
        '알림톡 서비스 제공',
        '소셜 네트워킹 기능'
      ],
      investment: '3억원',
      employees: '판교 캠퍼스 1만명',
      benefits: [
        '카카오워크 육아 채널',
        '직원 맘카페 운영',
        '육아 정보 큐레이션'
      ],
      commitment: '플랫폼 개발 및 마케팅 지원'
    },
    {
      id: 'naver',
      name: '네이버',
      logo: '🔍',
      category: 'AI/검색',
      description: '하이퍼클로바 AI와 검색 기술로 정확하고 신뢰할 수 있는 정보를 제공합니다.',
      contributions: [
        '하이퍼클로바X 활용',
        '네이버 검색 API',
        '지식백과 연동',
        '실시간 번역 서비스'
      ],
      investment: '4억원',
      employees: '분당 사옥 8천명',
      benefits: [
        'AI 육아 상담 서비스',
        '네이버페이 할인 혜택',
        '육아 정보 맞춤 추천'
      ],
      commitment: 'AI 기술 및 데이터 플랫폼 지원'
    }
  ]

  const ecosystemBenefits = [
    {
      icon: TrendingUp,
      title: '지역 경제 활성화',
      value: '108억원',
      description: '연간 직간접 경제효과',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      title: '일자리 창출',
      value: '250개',
      description: '양질의 돌봄 서비스 일자리',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Building2,
      title: '기업 생태계',
      value: '35개사',
      description: '육아 관련 스타트업 육성',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Globe,
      title: '글로벌 진출',
      value: '5개국',
      description: '해외 진출 기반 마련',
      color: 'from-orange-500 to-red-600'
    }
  ]

  const cooperationModels = [
    {
      title: '기술 협력 모델',
      description: '각 기업의 핵심 기술을 융합하여 혁신적 솔루션 개발',
      features: [
        '공동 R&D 프로젝트',
        '특허 공유 및 라이선싱',
        '기술 표준화 협의체',
        '오픈 이노베이션 플랫폼'
      ]
    },
    {
      title: '투자 협력 모델',
      description: '지속가능한 사업 모델을 위한 단계별 투자 및 수익 배분',
      features: [
        '단계별 투자 참여',
        '수익 배분 모델',
        '리스크 분산 체계',
        '성과 기반 인센티브'
      ]
    },
    {
      title: '서비스 협력 모델',
      description: '임직원 대상 우선 서비스 제공으로 초기 사용자 확보',
      features: [
        '임직원 베타 테스트',
        '사내 육아 지원 연계',
        '복리후생 프로그램',
        '가족 친화 기업 인증'
      ]
    }
  ]

  return (
    <section id="partnership-section" ref={sectionRef} className="section bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading font-display font-bold text-gray-900 mb-4">
            <span className="text-gradient">지역 기업 협력 생태계</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            화성시 IT 대기업들과의 전략적 파트너십으로 구축하는 지속가능한 혁신 플랫폼
          </p>
        </motion.div>

        {/* 파트너 기업 현황 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">5개</div>
                <div className="text-gray-600">핵심 파트너 기업</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success-600 mb-2">35억원</div>
                <div className="text-gray-600">총 투자 약정</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warm-600 mb-2">7.3만명</div>
                <div className="text-gray-600">임직원 수</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600">참여 의향</div>
              </div>
            </div>

            {/* 파트너 기업 목록 */}
            <div className="grid md:grid-cols-5 gap-4">
              {partners.map((partner, index) => (
                <motion.button
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onClick={() => setActivePartner(index)}
                  className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                    activePartner === index
                      ? 'border-primary-300 bg-primary-50 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-4xl mb-2">{partner.logo}</div>
                  <div className="font-semibold text-gray-900 text-sm">{partner.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{partner.category}</div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 선택된 파트너 상세 정보 */}
        <motion.div
          key={activePartner}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="card">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* 기업 정보 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl">{partners[activePartner].logo}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{partners[activePartner].name}</h3>
                    <p className="text-primary-600 font-medium">{partners[activePartner].category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{partners[activePartner].description}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">투자 규모: <strong>{partners[activePartner].investment}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">임직원: <strong>{partners[activePartner].employees}</strong></span>
                  </div>
                </div>
              </div>

              {/* 기술 기여 */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  핵심 기술 기여
                </h4>
                <div className="space-y-3">
                  {partners[activePartner].contributions.map((contribution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{contribution}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 임직원 혜택 */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  임직원 특별 혜택
                </h4>
                <div className="space-y-3 mb-6">
                  {partners[activePartner].benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                    >
                      <Award className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-medium text-green-800 mb-2">약정 사항</h5>
                  <p className="text-sm text-green-700">{partners[activePartner].commitment}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 생태계 효과 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🚀 생태계 시너지 효과
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="card card-hover text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{benefit.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* 협력 모델 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🤝 다면적 협력 모델
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {cooperationModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 + index * 0.2 }}
                className="card h-full"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${
                  index === 0 ? 'from-blue-500 to-cyan-600' :
                  index === 1 ? 'from-green-500 to-emerald-600' :
                  'from-purple-500 to-pink-600'
                } rounded-xl flex items-center justify-center mb-6`}>
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{model.title}</h4>
                <p className="text-gray-600 mb-6">{model.description}</p>
                <div className="space-y-3">
                  {model.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 성공 보장 요소 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="bg-gradient-to-r from-primary-500 to-success-500 rounded-2xl p-8 text-white text-center"
        >
          <Target className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-2xl font-bold mb-4">Win-Win 생태계 구축</h3>
          <p className="text-xl mb-8 opacity-90">
            대기업 기술력 + 지자체 정책 + 시민 니즈의 완벽한 결합
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-bold mb-2">기업 측면</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• 신사업 영역 개척</li>
                <li>• CSR 활동 강화</li>
                <li>• 임직원 복리후생</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-bold mb-2">화성시 측면</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• 저비용 고효율 정책</li>
                <li>• 지역 경제 활성화</li>
                <li>• 혁신 도시 브랜딩</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-bold mb-2">시민 측면</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• 최첨단 육아 서비스</li>
                <li>• 양질의 일자리 창출</li>
                <li>• 삶의 질 향상</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Partnership
