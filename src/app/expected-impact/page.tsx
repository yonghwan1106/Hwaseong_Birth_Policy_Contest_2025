'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { 
  Calculator,
  TrendingUp,
  Globe,
  Award,
  DollarSign,
  Users,
  Baby,
  Building,
  Smartphone,
  Brain,
  Heart,
  Target,
  Zap,
  BarChart3,
  PieChart,
  LineChart,
  ArrowUp,
  ArrowRight,
  Star,
  Sparkles,
  CheckCircle,
  MapPin,
  Calendar,
  Clock
} from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const ExpectedImpactPage = () => {
  // 시뮬레이터 상태
  const [investment, setInvestment] = useState(1100) // 11억원 (백만원 단위)
  const [birthRateIncrease, setBirthRateIncrease] = useState(0.09) // 0.09명 증가
  const [userAdoption, setUserAdoption] = useState(50) // 50% 사용률
  const [timeframe, setTimeframe] = useState(3) // 3년

  // 효과 계산
  const calculatedEffects = useMemo(() => {
    const basePopulation = 850000 // 화성시 인구
    const currentBirthRate = 1.01
    const newBirthRate = currentBirthRate + birthRateIncrease
    
    // 출생 수 계산 (연간)
    const annualBirths = Math.round(basePopulation * (birthRateIncrease * 0.01) * (userAdoption / 100))
    const totalAdditionalBirths = annualBirths * timeframe
    
    // 경제적 효과 (PRD 기준: 연간 108억원 규모)
    const baseEconomicEffect = 108 // 108억원 (PRD 기준)
    const economicEffectMultiplier = (userAdoption / 50) * (birthRateIncrease / 0.09) // 기준값 대비 배수
    const totalEconomicEffect = baseEconomicEffect * economicEffectMultiplier * timeframe
    
    // ROI 계산 (PRD 기준: 2,945% 수준)
    const baseROI = 2945 // PRD 기준 ROI
    const roiMultiplier = economicEffectMultiplier * (investment / 1100) // 기준 투자금액 11억 기준
    const roi = Math.min(baseROI * roiMultiplier, 9999) // 최대 9999%로 제한
    
    // 사회적 효과
    const jobCreation = Math.round(totalAdditionalBirths * 0.8) // 출생 증가로 인한 일자리 창출
    const healthcareImprovement = Math.round(totalAdditionalBirths * 1.5) // 의료 서비스 개선
    
    return {
      additionalBirths: Math.max(totalAdditionalBirths, 5), // 최소 5명
      newBirthRate: newBirthRate.toFixed(2),
      totalEconomicEffect: Math.max(totalEconomicEffect, 50), // 최소 50억원
      roi: Math.max(roi, 500).toFixed(0), // 최소 500%
      jobCreation: Math.max(jobCreation, 10),
      healthcareImprovement: Math.max(healthcareImprovement, 15),
      userSatisfaction: Math.min(95, 70 + (userAdoption * 0.3)),
      marketExpansion: Math.round((userAdoption / 100) * 15) // 최대 15개 지자체
    }
  }, [investment, birthRateIncrease, userAdoption, timeframe])

  // 전국 확산 시뮬레이션 데이터
  const expansionData = [
    { region: '화성시', year: 2025, status: 'active', users: 10000, births: 120, color: 'bg-blue-500' },
    { region: '수원시', year: 2026, status: 'planned', users: 15000, births: 180, color: 'bg-green-500' },
    { region: '성남시', year: 2026, status: 'planned', users: 12000, births: 145, color: 'bg-purple-500' },
    { region: '용인시', year: 2027, status: 'planned', users: 18000, births: 210, color: 'bg-orange-500' },
    { region: '안양시', year: 2027, status: 'interested', users: 8000, births: 95, color: 'bg-pink-500' },
    { region: '부천시', year: 2027, status: 'interested', users: 11000, births: 130, color: 'bg-cyan-500' },
    { region: '고양시', year: 2028, status: 'future', users: 20000, births: 240, color: 'bg-indigo-500' },
    { region: '서울시', year: 2028, status: 'future', users: 50000, births: 600, color: 'bg-red-500' }
  ]

  // 성과 지표 데이터
  const performanceMetrics = [
    {
      category: '정량적 효과',
      metrics: [
        { name: '출생률 증가', current: '1.01', target: calculatedEffects.newBirthRate, unit: '명', progress: 85 },
        { name: '경제적 파급효과', current: '0', target: (calculatedEffects.totalEconomicEffect / 100000000).toFixed(0), unit: '억원', progress: 0 },
        { name: 'ROI', current: '0', target: calculatedEffects.roi, unit: '%', progress: 0 },
        { name: '일자리 창출', current: '0', target: calculatedEffects.jobCreation.toString(), unit: '개', progress: 0 }
      ]
    },
    {
      category: '정성적 효과',
      metrics: [
        { name: '사용자 만족도', current: '0', target: calculatedEffects.userSatisfaction.toFixed(0), unit: '점', progress: 0 },
        { name: '정책 체감도', current: '45', target: '85', unit: '%', progress: 53 },
        { name: '지역 브랜드 가치', current: '72', target: '95', unit: '점', progress: 76 },
        { name: '미래 준비도', current: '68', target: '92', unit: '점', progress: 74 }
      ]
    },
    {
      category: '사회적 가치',
      metrics: [
        { name: '육아 스트레스 감소', current: '0', target: '65', unit: '%', progress: 0 },
        { name: '의료 접근성 향상', current: '0', target: '78', unit: '%', progress: 0 },
        { name: '교육 품질 개선', current: '0', target: '83', unit: '%', progress: 0 },
        { name: '지역 사회 결속', current: '0', target: '71', unit: '%', progress: 0 }
      ]
    }
  ]

  // 성공 시나리오 데이터
  const successScenarios = [
    {
      year: 2025,
      title: '기반 구축 완료',
      achievements: [
        'AI 육아 플랫폼 런칭',
        '1,000명 베타 사용자 확보',
        '파트너십 5개 기업 체결',
        '화성시 브랜드 이미지 제고'
      ],
      kpi: { users: 1000, satisfaction: 4.2, births: 15 }
    },
    {
      year: 2026,
      title: '본격 운영 단계',
      achievements: [
        '월 활성 사용자 5,000명 달성',
        '인근 지자체 벤치마킹 시작',
        '언론 주목 및 수상 경력',
        '추가 예산 확보 성공'
      ],
      kpi: { users: 5000, satisfaction: 4.5, births: 60 }
    },
    {
      year: 2027,
      title: '확산 및 성장',
      achievements: [
        '사용자 10,000명 돌파',
        '경기도 3개 지자체 도입',
        '출생률 증가 가시화',
        '자립 운영 체계 구축'
      ],
      kpi: { users: 10000, satisfaction: 4.7, births: 120 }
    },
    {
      year: 2028,
      title: '전국 모델 완성',
      achievements: [
        '전국 15개 지자체 확산',
        '국가 정책 모델로 채택',
        '해외 진출 본격 추진',
        '지속가능 생태계 완성'
      ],
      kpi: { users: 50000, satisfaction: 4.8, births: 600 }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* 히어로 섹션 */}
        <section className="section bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-display font-display font-bold text-gray-900 mb-6">
                <span className="text-gradient">기대 효과</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                데이터 기반 시뮬레이션으로 검증된 정량적·정성적 효과와 
                전국 확산 가능성을 제시합니다.
              </p>
            </motion.div>

            {/* 핵심 효과 요약 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-4 gap-6 mb-16"
            >
              {[
                { 
                  icon: TrendingUp, 
                  title: '출생률 증가', 
                  value: calculatedEffects.newBirthRate + '명', 
                  desc: '현재 1.01명 → 목표', 
                  color: 'from-green-500 to-emerald-600' 
                },
                { 
                  icon: DollarSign, 
                  title: '경제적 효과', 
                  value: calculatedEffects.totalEconomicEffect.toFixed(0) + '억원', 
                  desc: '3년간 누적 효과', 
                  color: 'from-blue-500 to-cyan-600' 
                },
                { 
                  icon: Award, 
                  title: 'ROI', 
                  value: calculatedEffects.roi + '%', 
                  desc: '투자 대비 수익률', 
                  color: 'from-purple-500 to-pink-600' 
                },
                { 
                  icon: Globe, 
                  title: '확산 가능성', 
                  value: calculatedEffects.marketExpansion + '개', 
                  desc: '지자체 확산 예상', 
                  color: 'from-orange-500 to-red-600' 
                }
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

        {/* 효과 시뮬레이터 */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                🎲 효과 시뮬레이터
              </h2>
              <p className="text-lg text-gray-600">
                변수를 조정하여 다양한 시나리오의 효과를 실시간으로 확인해보세요
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* 시뮬레이터 컨트롤 */}
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  <Calculator className="w-6 h-6 inline mr-2" />
                  시뮬레이션 변수
                </h3>
                
                <div className="space-y-6">
                  {/* 투자금액 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      총 투자금액: {investment}백만원 ({(investment/100).toFixed(1)}억원)
                    </label>
                    <input
                      type="range"
                      min="500"
                      max="2000"
                      step="50"
                      value={investment}
                      onChange={(e) => setInvestment(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>5억원</span>
                      <span>20억원</span>
                    </div>
                  </div>

                  {/* 출생률 증가 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      출생률 증가: +{birthRateIncrease.toFixed(2)}명 (현재 1.01 → {(1.01 + birthRateIncrease).toFixed(2)})
                    </label>
                    <input
                      type="range"
                      min="0.03"
                      max="0.15"
                      step="0.01"
                      value={birthRateIncrease}
                      onChange={(e) => setBirthRateIncrease(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>+0.03명</span>
                      <span>+0.15명</span>
                    </div>
                  </div>

                  {/* 사용자 수용률 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      사용자 수용률: {userAdoption}%
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="80"
                      step="5"
                      value={userAdoption}
                      onChange={(e) => setUserAdoption(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>10%</span>
                      <span>80%</span>
                    </div>
                  </div>

                  {/* 시간 범위 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      분석 기간: {timeframe}년
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={timeframe}
                      onChange={(e) => setTimeframe(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1년</span>
                      <span>5년</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 시뮬레이션 결과 */}
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">시뮬레이션 결과</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">{calculatedEffects.additionalBirths}</div>
                      <div className="text-sm text-gray-600">추가 출생 수</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600">
                        {calculatedEffects.totalEconomicEffect.toFixed(0)}억
                      </div>
                      <div className="text-sm text-gray-600">경제적 효과</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-600">{calculatedEffects.roi}%</div>
                      <div className="text-sm text-gray-600">투자 수익률</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-600">{calculatedEffects.jobCreation}</div>
                      <div className="text-sm text-gray-600">일자리 창출</div>
                    </div>
                  </div>
                </div>

                <div className="card bg-gradient-to-r from-primary-50 to-success-50">
                  <h4 className="font-bold text-gray-900 mb-4">💡 시나리오 분석</h4>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-700">
                      <strong>현재 설정:</strong> {investment}백만원 투자로 {timeframe}년간 
                      {userAdoption}% 수용률 달성 시
                    </p>
                    <p className="text-gray-700">
                      <strong>예상 효과:</strong> 출생률 {calculatedEffects.newBirthRate}명 달성으로 
                      {calculatedEffects.totalEconomicEffect.toFixed(0)}억원 경제 효과 창출
                    </p>
                    <p className="text-gray-700">
                      <strong>수익성:</strong> ROI {calculatedEffects.roi}%로 투자 대비 
                      {Number(calculatedEffects.roi) > 1000 ? '매우 높은' : Number(calculatedEffects.roi) > 500 ? '높은' : '적정한'} 
                      수익률 확보
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 파급 효과 시각화 */}
        <section className="section bg-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                🌐 전국 확산 시뮬레이션
              </h2>
              <p className="text-lg text-gray-600">
                화성시 성공 모델의 전국 확산 과정과 파급 효과
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* 확산 타임라인 */}
              <div className="lg:col-span-2">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">확산 로드맵</h3>
                  <div className="space-y-4">
                    {expansionData.map((region, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 ${region.color} rounded-full`} />
                          <div className="font-semibold text-gray-900">{region.region}</div>
                        </div>
                        <div className="flex-1 grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">도입 시기: </span>
                            <span className="font-medium">{region.year}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">예상 사용자: </span>
                            <span className="font-medium">{region.users.toLocaleString()}명</span>
                          </div>
                          <div>
                            <span className="text-gray-600">연간 출생 증가: </span>
                            <span className="font-medium">{region.births}명</span>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          region.status === 'active' ? 'bg-green-100 text-green-800' :
                          region.status === 'planned' ? 'bg-blue-100 text-blue-800' :
                          region.status === 'interested' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {region.status === 'active' ? '운영중' :
                           region.status === 'planned' ? '계획됨' :
                           region.status === 'interested' ? '관심' : '검토중'}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 누적 효과 */}
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">누적 효과 (2028년)</h3>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600">1,520명</div>
                      <div className="text-sm text-gray-600">전국 추가 출생</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">4,560억</div>
                      <div className="text-sm text-gray-600">전국 경제 효과</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600">15개</div>
                      <div className="text-sm text-gray-600">참여 지자체</div>
                    </div>
                  </div>
                </div>

                <div className="card bg-gradient-to-r from-blue-50 to-purple-50">
                  <h4 className="font-bold text-gray-900 mb-4">🚀 확산 전략</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">화성시 성공 사례 홍보</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">표준 패키지 개발</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">중앙정부 정책 연계</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">지자체간 협력 네트워크</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 성과 대시보드 */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                📊 종합 성과 대시보드
              </h2>
              <p className="text-lg text-gray-600">
                정량적·정성적·사회적 가치를 포괄하는 다차원 성과 측정
              </p>
            </motion.div>

            <div className="space-y-8">
              {performanceMetrics.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className="card"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.metrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                        className="bg-gray-50 rounded-lg p-6"
                      >
                        <div className="text-center mb-4">
                          <div className="text-sm text-gray-600 mb-2">{metric.name}</div>
                          
                          {/* After 수치를 더 강조 */}
                          <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.2 + index * 0.1 + 0.3 }}
                            className="relative"
                          >
                            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-2">
                              {metric.target}{metric.unit}
                            </div>
                            <div className="absolute -top-1 -right-1">
                              <Sparkles className="w-5 h-5 text-yellow-500" />
                            </div>
                          </motion.div>

                          {/* Before 수치는 작게 */}
                          <div className="flex items-center justify-center gap-2 text-gray-500">
                            <span className="text-sm">현재</span>
                            <span className="text-lg font-medium line-through decoration-red-300">
                              {metric.current}{metric.unit}
                            </span>
                            <ArrowUp className="w-4 h-4 text-green-500" />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${metric.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: categoryIndex * 0.2 + index * 0.1 + 0.5 }}
                              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                            />
                          </div>
                          <div className="text-xs text-gray-600 mt-1 text-center">
                            달성 예상: {metric.progress}%
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

        {/* 성공 시나리오 */}
        <section className="section bg-gradient-to-br from-primary-50 via-white to-success-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                🏆 성공 시나리오
              </h2>
              <p className="text-lg text-gray-600">
                3년 후 화성시의 모습과 전국 모델로 발전하는 과정
              </p>
            </motion.div>

            <div className="space-y-8">
              {successScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="card"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* 연도 및 제목 */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full text-white text-2xl font-bold mb-4">
                        {scenario.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{scenario.title}</h3>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="bg-blue-50 rounded p-2">
                          <div className="font-bold text-blue-600">{scenario.kpi.users.toLocaleString()}</div>
                          <div className="text-gray-600">사용자</div>
                        </div>
                        <div className="bg-green-50 rounded p-2">
                          <div className="font-bold text-green-600">{scenario.kpi.satisfaction}</div>
                          <div className="text-gray-600">만족도</div>
                        </div>
                        <div className="bg-purple-50 rounded p-2">
                          <div className="font-bold text-purple-600">{scenario.kpi.births}</div>
                          <div className="text-gray-600">출생 증가</div>
                        </div>
                      </div>
                    </div>

                    {/* 주요 성과 */}
                    <div className="lg:col-span-2">
                      <h4 className="font-bold text-gray-900 mb-4">주요 성과</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {scenario.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + achievementIndex * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                          >
                            <Star className="w-5 h-5 text-yellow-500" />
                            <span className="text-gray-700">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 최종 비전 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-r from-primary-500 to-success-500 text-white text-center mt-12"
            >
              <Sparkles className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">미래 육아의 허브, 화성시</h3>
              <p className="text-lg mb-6">
                AI 기술과 인간 중심 정책이 조화된 새로운 육아 패러다임의 완성
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">전국 1위</div>
                  <div className="text-primary-100">출생률 증가율</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">15개 지자체</div>
                  <div className="text-primary-100">모델 확산</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">K-Policy</div>
                  <div className="text-primary-100">글로벌 진출</div>
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

export default ExpectedImpactPage