'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar,
  DollarSign,
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Users,
  Building,
  Smartphone,
  Brain,
  Shield,
  Zap,
  BarChart3,
  LineChart,
  ArrowRight,
  PlayCircle,
  PauseCircle,
  Settings,
  Monitor,
  Award,
  Globe
} from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { PieChart, BarChart } from '@/components/charts'
import { ROICalculator } from '@/components/interactive'

const ExecutionPlanPage = () => {
  const [activePhase, setActivePhase] = useState(1)
  const [budgetView, setBudgetView] = useState('total')
  const [simulationRunning, setSimulationRunning] = useState(false)

  // 3단계 로드맵 데이터
  const roadmapPhases = [
    {
      phase: 1,
      title: '기반 구축 단계',
      duration: '1-12개월',
      period: '2025.07 - 2026.06',
      budget: '4억원 (36%)',
      status: 'planning',
      color: 'from-blue-500 to-blue-600',
      milestones: [
        { month: 1, title: 'AI 플랫폼 개발 착수', status: 'planned' },
        { month: 3, title: 'MVP 버전 완성', status: 'planned' },
        { month: 6, title: '베타 테스트 시작', status: 'planned' },
        { month: 9, title: '파트너십 체결 완료', status: 'planned' },
        { month: 12, title: '1차 서비스 런칭', status: 'planned' }
      ],
      activities: [
        'AI 상담 시스템 개발',
        '앱 프로토타입 제작',
        '기업 파트너십 구축',
        '인력 채용 및 교육',
        '인프라 구축'
      ]
    },
    {
      phase: 2,
      title: '본격 운영 단계',
      duration: '13-24개월',
      period: '2026.07 - 2027.06',
      budget: '4.5억원 (41%)',
      status: 'future',
      color: 'from-green-500 to-green-600',
      milestones: [
        { month: 15, title: '정식 서비스 오픈', status: 'future' },
        { month: 18, title: '이용자 1만명 달성', status: 'future' },
        { month: 21, title: '서비스 고도화', status: 'future' },
        { month: 24, title: '타 지자체 확산', status: 'future' }
      ],
      activities: [
        '전면 서비스 확대',
        '고급 AI 기능 추가',
        '커뮤니티 구축',
        '데이터 분석 강화',
        '품질 관리 체계 구축'
      ]
    },
    {
      phase: 3,
      title: '확산 및 발전 단계',
      duration: '25-36개월',
      period: '2027.07 - 2028.06',
      budget: '2.5억원 (23%)',
      status: 'future',
      color: 'from-purple-500 to-purple-600',
      milestones: [
        { month: 27, title: '수익성 확보', status: 'future' },
        { month: 30, title: '전국 모델 완성', status: 'future' },
        { month: 33, title: '해외 진출 검토', status: 'future' },
        { month: 36, title: '자립 운영 체계 구축', status: 'future' }
      ],
      activities: [
        '수익 모델 최적화',
        '전국 확산 지원',
        '글로벌 진출 준비',
        '지속가능 체계 구축',
        '차세대 기술 연구'
      ]
    }
  ]

  // 예산 구조 데이터
  const budgetStructure = {
    total: 1100000000, // 11억원
    breakdown: [
      { category: 'AI 플랫폼 개발', amount: 350000000, percentage: 32, color: 'bg-blue-500' },
      { category: '앱 개발 및 운영', amount: 220000000, percentage: 20, color: 'bg-green-500' },
      { category: '인력 및 교육', amount: 165000000, percentage: 15, color: 'bg-purple-500' },
      { category: '마케팅 및 홍보', amount: 132000000, percentage: 12, color: 'bg-orange-500' },
      { category: '인프라 구축', amount: 110000000, percentage: 10, color: 'bg-red-500' },
      { category: '파트너십 및 협력', amount: 77000000, percentage: 7, color: 'bg-yellow-500' },
      { category: '예비비', amount: 44000000, percentage: 4, color: 'bg-gray-500' }
    ]
  }

  // KPI 데이터
  const kpiData = [
    { 
      category: '사용자 지표',
      kpis: [
        { name: '월 활성 사용자', target: '10,000명', current: '0명', progress: 0, unit: '명' },
        { name: '사용자 만족도', target: '4.5점', current: '0점', progress: 0, unit: '점' },
        { name: '앱 다운로드', target: '50,000건', current: '0건', progress: 0, unit: '건' }
      ]
    },
    {
      category: '정책 효과',
      kpis: [
        { name: '출생률 증가', target: '1.1명', current: '1.01명', progress: 10, unit: '명' },
        { name: '육아 상담 건수', target: '100,000건', current: '0건', progress: 0, unit: '건' },
        { name: '정책 체감도', target: '80%', current: '45%', progress: 56, unit: '%' }
      ]
    },
    {
      category: '경제 효과',
      kpis: [
        { name: '경제적 파급효과', target: '108억원', current: '0억원', progress: 0, unit: '억원' },
        { name: 'ROI', target: '2,945%', current: '0%', progress: 0, unit: '%' },
        { name: '일자리 창출', target: '500개', current: '0개', progress: 0, unit: '개' }
      ]
    }
  ]

  // 리스크 관리 데이터
  const riskMatrix = [
    {
      risk: '기술 개발 지연',
      probability: 'medium',
      impact: 'high',
      level: 'high',
      mitigation: ['애자일 개발 방법론 적용', '단계별 검증 프로세스', '외부 전문기업 협력'],
      owner: 'CTO'
    },
    {
      risk: '예산 초과',
      probability: 'low',
      impact: 'high',  
      level: 'medium',
      mitigation: ['단계별 예산 통제', '정기적 재무 검토', '예비비 확보'],
      owner: 'CFO'
    },
    {
      risk: '사용자 수용성 부족',
      probability: 'medium',
      impact: 'medium',
      level: 'medium',
      mitigation: ['사용자 참여형 설계', '지속적 피드백 수집', '단계적 기능 확대'],
      owner: 'CPO'
    },
    {
      risk: '경쟁 서비스 출현',
      probability: 'high',
      impact: 'medium',
      level: 'medium',
      mitigation: ['차별화 기능 강화', '지속적 혁신', '파트너십 확대'],
      owner: 'CEO'
    },
    {
      risk: '법규 및 정책 변화',
      probability: 'low',
      impact: 'low',
      level: 'low',
      mitigation: ['법무 검토 강화', '정책 모니터링', '유연한 대응 체계'],
      owner: 'CCO'
    }
  ]

  const getRiskColor = (level: string) => {
    switch(level) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* 히어로 섹션 */}
        <section className="section bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-display font-display font-bold text-gray-900 mb-6">
                <span className="text-gradient">실행 계획</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                11억원 투자로 108억원 경제효과 창출하는 구체적이고 실현 가능한 3단계 로드맵과 
                리스크 관리 체계를 제시합니다.
              </p>
            </motion.div>

            {/* 핵심 지표 요약 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-4 gap-6 mb-16"
            >
              {[
                { icon: DollarSign, title: '총 투자금', value: '11억원', desc: '3년간 단계별 투입', color: 'from-green-500 to-emerald-600' },
                { icon: TrendingUp, title: '예상 ROI', value: '2,945%', desc: '투자 대비 수익률', color: 'from-blue-500 to-cyan-600' },
                { icon: Clock, title: '실행 기간', value: '36개월', desc: '3단계 점진적 확산', color: 'from-purple-500 to-pink-600' },
                { icon: Target, title: '성공 확률', value: '94%', desc: '리스크 관리 포함', color: 'from-orange-500 to-red-600' }
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

        {/* 3단계 로드맵 */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                📅 3단계 실행 로드맵
              </h2>
              <p className="text-lg text-gray-600">
                단계별 목표와 마일스톤이 명확한 체계적 실행 계획
              </p>
            </motion.div>

            {/* 단계 선택 탭 */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-2xl p-2 flex gap-2">
                {roadmapPhases.map((phase) => (
                  <button
                    key={phase.phase}
                    onClick={() => setActivePhase(phase.phase)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                      activePhase === phase.phase
                        ? 'bg-white text-primary-600 shadow-md'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Phase {phase.phase}
                  </button>
                ))}
              </div>
            </div>

            {/* 선택된 단계 상세 */}
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* 단계 개요 */}
              <div className="card">
                <div className={`w-full h-2 bg-gradient-to-r ${roadmapPhases[activePhase - 1].color} rounded-t-lg`} />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${roadmapPhases[activePhase - 1].color} rounded-xl flex items-center justify-center text-white font-bold`}>
                      {activePhase}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{roadmapPhases[activePhase - 1].title}</h3>
                      <p className="text-gray-600">{roadmapPhases[activePhase - 1].period}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">소요 기간</div>
                      <div className="font-semibold text-gray-900">{roadmapPhases[activePhase - 1].duration}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">투입 예산</div>
                      <div className="font-semibold text-gray-900">{roadmapPhases[activePhase - 1].budget}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">주요 활동</h4>
                    <div className="space-y-3">
                      {roadmapPhases[activePhase - 1].activities.map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">{activity}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 마일스톤 타임라인 */}
              <div className="card">
                <h4 className="text-xl font-bold text-gray-900 mb-6">마일스톤 타임라인</h4>
                <div className="space-y-6">
                  {roadmapPhases[activePhase - 1].milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                          milestone.status === 'completed' 
                            ? 'bg-green-100 border-green-500 text-green-700'
                            : milestone.status === 'progress'
                            ? 'bg-blue-100 border-blue-500 text-blue-700'
                            : 'bg-gray-100 border-gray-300 text-gray-600'
                        }`}>
                          {milestone.month}
                        </div>
                        {index < roadmapPhases[activePhase - 1].milestones.length - 1 && (
                          <div className="w-0.5 h-12 bg-gray-200 mx-auto mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <h5 className="font-semibold text-gray-900 mb-1">{milestone.title}</h5>
                        <p className="text-sm text-gray-600">{milestone.month}개월차 목표</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 예산 계획 */}
        <section className="section bg-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                💰 예산 계획
              </h2>
              <p className="text-lg text-gray-600">
                11억원 투자의 효율적 배분과 단계별 집행 계획
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* 예산 구조 차트 */}
              <div className="card">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">투자 구조</h3>
                  <div className="text-2xl font-bold text-primary-600">
                    {(budgetStructure.total / 100000000).toFixed(1)}억원
                  </div>
                </div>

                {/* 실제 파이차트 */}
                <PieChart 
                  data={budgetStructure.breakdown}
                  total={budgetStructure.total}
                  showLegend={false}
                  animate={true}
                />
              </div>

              {/* 단계별 예산 배분 차트 */}
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">단계별 예산 배분</h3>
                  
                  {/* 바 차트 */}
                  <div className="mb-6">
                    <BarChart 
                      data={roadmapPhases.map((phase, index) => ({
                        label: `Phase ${phase.phase}`,
                        value: parseInt(phase.budget.match(/\d+/)?.[0] || '0'),
                        color: phase.color,
                        period: phase.period
                      }))}
                      title=""
                      horizontal={false}
                      animate={true}
                      showValues={false}
                      height={200}
                    />
                  </div>

                  {/* 상세 정보 */}
                  <div className="space-y-4">
                    {roadmapPhases.map((phase, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{phase.title}</h4>
                          <span className="font-bold text-primary-600">{phase.budget}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: phase.budget.match(/\d+/)?.[0] + '%' }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className={`bg-gradient-to-r ${phase.color} h-2 rounded-full`}
                          />
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{phase.period}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ROI 시뮬레이터 */}
                <ROICalculator 
                  initialInvestment={1100000000}
                  initialBirthRateIncrease={5.0}
                  initialUsers={10000}
                />
              </div>
            </div>
          </div>
        </section>

        {/* KPI 대시보드 */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                🎯 KPI 대시보드
              </h2>
              <p className="text-lg text-gray-600">
                실시간 성과 추적이 가능한 핵심 지표 체계
              </p>
            </motion.div>

            <div className="space-y-8">
              {kpiData.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className="card"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {category.kpis.map((kpi, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                        className="bg-gray-50 rounded-lg p-6"
                      >
                        <div className="text-center mb-4">
                          <div className="text-2xl font-bold text-gray-900 mb-1">{kpi.current}</div>
                          <div className="text-sm text-gray-600 mb-2">{kpi.name}</div>
                          <div className="text-lg font-semibold text-primary-600">목표: {kpi.target}</div>
                        </div>
                        
                        <div className="relative">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${kpi.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: categoryIndex * 0.2 + index * 0.1 + 0.5 }}
                              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                            />
                          </div>
                          <div className="text-xs text-gray-600 mt-1 text-center">
                            달성률: {kpi.progress}%
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 리스크 관리 */}
        <section className="section bg-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                ⚠️ 리스크 관리
              </h2>
              <p className="text-lg text-gray-600">
                사전 식별된 위험 요소와 체계적 대응 방안
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* 리스크 매트릭스 */}
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-6">리스크 매트릭스</h3>
                <div className="space-y-4">
                  {riskMatrix.map((risk, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{risk.risk}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getRiskColor(risk.level)}`}>
                          {risk.level.toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                        <div>
                          <span className="text-gray-600">발생 가능성: </span>
                          <span className="font-medium">{risk.probability}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">영향도: </span>
                          <span className="font-medium">{risk.impact}</span>
                        </div>
                      </div>

                      <div className="text-sm">
                        <div className="text-gray-600 mb-2">담당자: <span className="font-medium">{risk.owner}</span></div>
                        <div className="text-gray-600">대응 방안:</div>
                        <ul className="mt-1 space-y-1">
                          {risk.mitigation.map((action, actionIndex) => (
                            <li key={actionIndex} className="text-gray-700 text-xs flex items-center gap-2">
                              <div className="w-1 h-1 bg-gray-400 rounded-full" />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 모니터링 체계 */}
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">모니터링 체계</h3>
                  <div className="space-y-4">
                    {[
                      { 
                        icon: Monitor, 
                        title: '실시간 대시보드',
                        desc: 'KPI 및 리스크 지표 24시간 모니터링',
                        frequency: '실시간'
                      },
                      {
                        icon: Calendar,
                        title: '주간 리뷰',
                        desc: '핵심 지표 검토 및 이슈 대응',
                        frequency: '매주'
                      },
                      {
                        icon: BarChart3,
                        title: '월간 보고',
                        desc: '종합 성과 분석 및 계획 조정',
                        frequency: '매월'
                      },
                      {
                        icon: Target,
                        title: '분기별 평가',
                        desc: '목표 달성도 평가 및 전략 수정',
                        frequency: '분기별'
                      }
                    ].map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                        >
                          <IconComponent className="w-6 h-6 text-primary-500 mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-gray-900">{item.title}</h4>
                              <span className="text-xs text-primary-600 font-medium">{item.frequency}</span>
                            </div>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                <div className="card bg-gradient-to-r from-blue-50 to-green-50">
                  <h4 className="font-bold text-gray-900 mb-4">🛡️ 성공 요인</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">체계적인 단계별 접근</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">사전 리스크 식별 및 대응</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">실시간 모니터링 체계</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">유연한 계획 조정 메커니즘</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ExecutionPlanPage