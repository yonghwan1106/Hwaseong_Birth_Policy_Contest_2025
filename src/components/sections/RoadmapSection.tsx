'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Target,
  AlertTriangle,
  TrendingUp,
  Building2,
  Zap
} from 'lucide-react'

const RoadmapSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activePhase, setActivePhase] = useState(0)

  const phases = [
    {
      phase: 1,
      title: '기반 구축 단계',
      duration: '1-12개월',
      budget: '3억원',
      color: 'from-blue-500 to-cyan-600',
      objectives: [
        'AI 개발 환경 구축',
        '파트너십 체결 완료',
        '기본 플랫폼 개발',
        '파일럿 테스트 실시'
      ],
      deliverables: [
        'AI 상담 시스템 프로토타입',
        '기업 파트너십 MOU 체결',
        '사용자 연구 보고서',
        '기술 아키텍처 설계서'
      ],
      milestones: [
        { month: 3, title: '파트너십 체결', status: 'planned' },
        { month: 6, title: 'AI 프로토타입 완성', status: 'planned' },
        { month: 9, title: '파일럿 테스트', status: 'planned' },
        { month: 12, title: '1단계 완료', status: 'planned' }
      ],
      risks: [
        { risk: '기술 개발 지연', level: 'medium', mitigation: '예비 개발팀 구성' },
        { risk: '파트너 협상 난항', level: 'low', mitigation: '다양한 파트너 옵션 확보' }
      ]
    },
    {
      phase: 2,
      title: '플랫폼 개발 단계',
      duration: '13-30개월',
      budget: '5억원',
      color: 'from-green-500 to-emerald-600',
      objectives: [
        '통합 플랫폼 완전 개발',
        '서비스 정식 출시',
        '사용자 기반 확산',
        '서비스 지속 개선'
      ],
      deliverables: [
        '화성 AI 맘케어 앱 출시',
        '24시간 AI 상담 서비스',
        '돌봄 매칭 플랫폼',
        '데이터 분석 대시보드'
      ],
      milestones: [
        { month: 15, title: '베타 앱 출시', status: 'planned' },
        { month: 18, title: '정식 서비스 론칭', status: 'planned' },
        { month: 24, title: '사용자 1만명 돌파', status: 'planned' },
        { month: 30, title: '2단계 완료', status: 'planned' }
      ],
      risks: [
        { risk: '사용자 수용성 문제', level: 'medium', mitigation: '지속적 사용자 피드백 수집' },
        { risk: '개인정보 보안 이슈', level: 'low', mitigation: '최고 수준 보안 시스템' }
      ]
    },
    {
      phase: 3,
      title: '확산 및 고도화 단계',
      duration: '31-36개월',
      budget: '3억원',
      color: 'from-purple-500 to-pink-600',
      objectives: [
        '타 지자체 확산 모델',
        'AI 시스템 고도화',
        '자립 운영 체계 구축',
        '글로벌 진출 준비'
      ],
      deliverables: [
        '확산 가이드라인',
        '고도화된 AI 엔진',
        '자립형 운영 모델',
        '국제 표준 인증'
      ],
      milestones: [
        { month: 33, title: '타 지자체 첫 확산', status: 'planned' },
        { month: 34, title: 'AI 2.0 버전 출시', status: 'planned' },
        { month: 35, title: '자립 운영 달성', status: 'planned' },
        { month: 36, title: '프로젝트 완료', status: 'planned' }
      ],
      risks: [
        { risk: '확산 속도 지연', level: 'medium', mitigation: '인센티브 제공 및 성공 사례 홍보' },
        { risk: '경쟁 서비스 등장', level: 'high', mitigation: '지속적 혁신 및 차별화' }
      ]
    }
  ]

  const totalBudget = phases.reduce((sum, phase) => sum + parseInt(phase.budget), 0)

  return (
    <section id="roadmap-section" ref={sectionRef} className="section bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading font-display font-bold text-gray-900 mb-4">
            <span className="text-gradient">3단계 실행 로드맵</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            체계적이고 단계적인 접근으로 확실한 성공을 보장하는 실행 계획
          </p>
        </motion.div>

        {/* 예산 개요 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-12 shadow-lg"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">{totalBudget}억원</div>
              <div className="text-gray-600">총 투자금액</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success-600 mb-2">36개월</div>
              <div className="text-gray-600">프로젝트 기간</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warm-600 mb-2">2,945%</div>
              <div className="text-gray-600">예상 ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">10개</div>
              <div className="text-gray-600">확산 지자체</div>
            </div>
          </div>
        </motion.div>

        {/* 단계별 로드맵 */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className={`cursor-pointer transition-all duration-300 ${
                activePhase === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActivePhase(index)}
            >
              <div className={`card ${activePhase === index ? 'ring-2 ring-primary-300' : ''}`}>
                <div className="grid lg:grid-cols-12 gap-8">
                  {/* 단계 정보 */}
                  <div className="lg:col-span-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <span className="text-2xl font-bold text-white">{phase.phase}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{phase.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        <span>예산: {phase.budget}</span>
                      </div>
                    </div>
                  </div>

                  {/* 목표 및 결과물 */}
                  <div className="lg:col-span-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* 주요 목표 */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-primary-500" />
                          주요 목표
                        </h4>
                        <div className="space-y-2">
                          {phase.objectives.map((objective, objIndex) => (
                            <motion.div
                              key={objIndex}
                              initial={{ opacity: 0, y: 10 }}
                              animate={activePhase === index ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }}
                              transition={{ delay: objIndex * 0.1 }}
                              className="flex items-center gap-3 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{objective}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* 주요 결과물 */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-success-500" />
                          주요 결과물
                        </h4>
                        <div className="space-y-2">
                          {phase.deliverables.map((deliverable, delIndex) => (
                            <motion.div
                              key={delIndex}
                              initial={{ opacity: 0, y: 10 }}
                              animate={activePhase === index ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }}
                              transition={{ delay: delIndex * 0.1 + 0.2 }}
                              className="flex items-center gap-3 text-sm"
                            >
                              <Zap className="w-4 h-4 text-blue-500 flex-shrink-0" />
                              <span className="text-gray-700">{deliverable}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 상세 정보 (활성화된 단계에만 표시) */}
                    {activePhase === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="mt-6 pt-6 border-t border-gray-200"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* 마일스톤 */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <Calendar className="w-5 h-5 text-purple-500" />
                              주요 마일스톤
                            </h4>
                            <div className="space-y-3">
                              {phase.milestones.map((milestone, milIndex) => (
                                <div key={milIndex} className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-xs font-bold text-purple-600">
                                    {milestone.month}M
                                  </div>
                                  <span className="text-sm text-gray-700">{milestone.title}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* 리스크 관리 */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <AlertTriangle className="w-5 h-5 text-orange-500" />
                              리스크 관리
                            </h4>
                            <div className="space-y-3">
                              {phase.risks.map((risk, riskIndex) => (
                                <div key={riskIndex} className="bg-gray-50 rounded-lg p-3">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-900">{risk.risk}</span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                      risk.level === 'high' ? 'bg-red-100 text-red-600' :
                                      risk.level === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                                      'bg-green-100 text-green-600'
                                    }`}>
                                      {risk.level === 'high' ? '높음' : risk.level === 'medium' ? '중간' : '낮음'}
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-600">{risk.mitigation}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 성공 보장 요소 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 bg-gradient-to-r from-success-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            🎯 성공 보장 요소
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">검증된 파트너십</h4>
              <p className="text-sm text-gray-600">
                삼성, LG, 네이버 등<br />
                대기업과의 확정 협력
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">데이터 기반 설계</h4>
              <p className="text-sm text-gray-600">
                네이버 트렌드 등<br />
                객관적 데이터 근거
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">단계별 검증</h4>
              <p className="text-sm text-gray-600">
                각 단계마다<br />
                엄격한 평가 및 피드백
              </p>
            </div>
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/execution-plan'}
              className="btn-primary flex items-center gap-2 mx-auto"
            >
              상세 실행 계획 보기
              <Target className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RoadmapSection
