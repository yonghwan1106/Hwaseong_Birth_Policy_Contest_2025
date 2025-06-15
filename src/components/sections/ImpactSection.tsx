'use client'

import { useState, useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Calculator,
  TrendingUp,
  Users,
  DollarSign,
  Globe,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Target,
  Lightbulb,
  Heart,
  Building,
  Baby,
  Star
} from 'lucide-react'

const ImpactSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  // 시뮬레이터 상태
  const [investment, setInvestment] = useState(1100000000) // 11억원
  const [birthRateIncrease, setBirthRateIncrease] = useState(0.09) // 1.01 → 1.1
  const [adoptionRate, setAdoptionRate] = useState(75) // 75%
  const [timeframe, setTimeframe] = useState(3) // 3년

  // 시나리오 상태
  const [activeScenario, setActiveScenario] = useState('realistic')

  const scenarios = {
    conservative: {
      name: '보수적 시나리오',
      birthRateIncrease: 0.05,
      adoptionRate: 60,
      economicEffect: 5400000000,
      roi: 1473,
      description: '최소한의 효과를 가정한 안전한 예측',
      probability: '90%'
    },
    realistic: {
      name: '현실적 시나리오',
      birthRateIncrease: 0.09,
      adoptionRate: 75,
      economicEffect: 10800000000,
      roi: 2945,
      description: '합리적인 가정 하에서의 예상 효과',
      probability: '70%'
    },
    optimistic: {
      name: '낙관적 시나리오',
      birthRateIncrease: 0.14,
      adoptionRate: 90,
      economicEffect: 16200000000,
      roi: 4418,
      description: '최대 효과를 달성했을 때의 결과',
      probability: '40%'
    }
  }

  // ROI 계산 로직
  const calculatedResults = useMemo(() => {
    const childRaisingCost = 300000000 // 1명당 3억원
    const economicContribution = 7200000000 // 1명당 생애 기여 72억원
    const hwaseongPopulation = 950000 // 화성시 인구
    const currentBirthRate = 1.01
    
    const newBirthRate = currentBirthRate + birthRateIncrease
    const additionalBirths = (newBirthRate - currentBirthRate) * hwaseongPopulation * 0.3 // 가임 여성 비율
    const effectiveBirths = additionalBirths * (adoptionRate / 100)
    
    const totalEconomicEffect = effectiveBirths * economicContribution * timeframe
    const roi = ((totalEconomicEffect - investment) / investment) * 100
    const paybackPeriod = investment / (totalEconomicEffect / timeframe)
    
    return {
      newBirthRate: newBirthRate.toFixed(2),
      additionalBirths: Math.round(effectiveBirths * timeframe),
      totalEconomicEffect,
      roi: Math.round(roi),
      paybackPeriod: paybackPeriod.toFixed(1),
      costPerChild: Math.round(investment / effectiveBirths)
    }
  }, [investment, birthRateIncrease, adoptionRate, timeframe])

  const rippleEffects = [
    {
      icon: Baby,
      title: '출생률 증가',
      current: '1.01명',
      target: '1.10명',
      change: '+8.9%',
      color: 'from-pink-500 to-red-500',
      description: '화성시 합계출생률 전국 평균 초과 달성'
    },
    {
      icon: DollarSign,
      title: '경제 효과',
      current: '0억원',
      target: '108억원',
      change: '연간',
      color: 'from-green-500 to-emerald-500',
      description: '직접·간접 경제효과 및 세수 증대'
    },
    {
      icon: Users,
      title: '돌봄 일자리',
      current: '0개',
      target: '250개',
      change: '+250개',
      color: 'from-blue-500 to-cyan-500',
      description: '양질의 돌봄 서비스 일자리 창출'
    },
    {
      icon: Building,
      title: '기업 성장',
      current: '15개사',
      target: '35개사',
      change: '+133%',
      color: 'from-purple-500 to-pink-500',
      description: '화성시 육아 관련 기업 생태계 확장'
    },
    {
      icon: Globe,
      title: '확산 가능성',
      current: '1개',
      target: '10개',
      change: '+900%',
      color: 'from-orange-500 to-red-500',
      description: '타 지자체 모델 확산으로 전국 파급'
    },
    {
      icon: Heart,
      title: '시민 만족도',
      current: '65%',
      target: '92%',
      change: '+27%p',
      color: 'from-rose-500 to-pink-500',
      description: '육아 정책 만족도 획기적 개선'
    }
  ]

  const globalComparison = [
    {
      country: '핀란드',
      birthRate: 1.37,
      policy: '네우볼라',
      budget: '연간 2조원',
      result: '세계 최고 육아 만족도'
    },
    {
      country: '프랑스',
      birthRate: 1.83,
      policy: '가족수당',
      budget: 'GDP 3.7%',
      result: 'OECD 2위 출생률'
    },
    {
      country: '화성시 (예상)',
      birthRate: 1.10,
      policy: 'AI 육아 생태계',
      budget: '11억원 (3년)',
      result: 'ROI 2,945%'
    }
  ]

  return (
    <section id="impact-section" ref={sectionRef} className="section bg-white">
      <div className="container">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading font-display font-bold text-gray-900 mb-4">
            <span className="text-gradient">기대 효과 시뮬레이션</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            데이터 기반 모델링으로 검증된 정량적 효과와 사회적 파급력
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* 효과 시뮬레이터 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6 text-blue-500" />
                효과 시뮬레이터
              </h3>

              {/* 투자금액 조절 */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    투자금액: {(investment / 100000000).toFixed(1)}억원
                  </label>
                  <input
                    type="range"
                    min="500000000"
                    max="2000000000"
                    step="100000000"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5억원</span>
                    <span>20억원</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    출생률 증가: +{birthRateIncrease.toFixed(2)}명 (1.01 → {(1.01 + birthRateIncrease).toFixed(2)})
                  </label>
                  <input
                    type="range"
                    min="0.02"
                    max="0.20"
                    step="0.01"
                    value={birthRateIncrease}
                    onChange={(e) => setBirthRateIncrease(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>+0.02명</span>
                    <span>+0.20명</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    서비스 수용률: {adoptionRate}%
                  </label>
                  <input
                    type="range"
                    min="40"
                    max="95"
                    step="5"
                    value={adoptionRate}
                    onChange={(e) => setAdoptionRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>40%</span>
                    <span>95%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    분석 기간: {timeframe}년
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={timeframe}
                    onChange={(e) => setTimeframe(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1년</span>
                    <span>10년</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 계산 결과 */}
            <motion.div
              key={investment + birthRateIncrease + adoptionRate + timeframe}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="card bg-gradient-to-r from-blue-50 to-green-50"
            >
              <h4 className="font-bold text-gray-900 mb-4">📊 계산 결과</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">투자 수익률</div>
                  <div className="text-2xl font-bold text-green-600">{calculatedResults.roi}%</div>
                </div>
                <div>
                  <div className="text-gray-600">추가 출생아</div>
                  <div className="text-2xl font-bold text-blue-600">{calculatedResults.additionalBirths}명</div>
                </div>
                <div>
                  <div className="text-gray-600">총 경제효과</div>
                  <div className="text-2xl font-bold text-purple-600">
                    {Math.round(calculatedResults.totalEconomicEffect / 100000000)}억원
                  </div>
                </div>
                <div>
                  <div className="text-gray-600">회수 기간</div>
                  <div className="text-2xl font-bold text-orange-600">{calculatedResults.paybackPeriod}년</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 시나리오 비교 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-green-500" />
                시나리오 분석
              </h3>

              <div className="space-y-4">
                {Object.entries(scenarios).map(([key, scenario]) => (
                  <motion.button
                    key={key}
                    onClick={() => setActiveScenario(key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      activeScenario === key
                        ? 'border-primary-300 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-left">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{scenario.name}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">성공 확률</span>
                          <span className="font-bold text-primary-600">{scenario.probability}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{scenario.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">ROI: </span>
                          <span className="font-bold text-green-600">{scenario.roi.toLocaleString()}%</span>
                        </div>
                        <div>
                          <span className="text-gray-500">경제효과: </span>
                          <span className="font-bold text-blue-600">
                            {Math.round(scenario.economicEffect / 100000000)}억원
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* 선택된 시나리오 상세 */}
              <motion.div
                key={activeScenario}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 p-4 bg-gray-50 rounded-xl"
              >
                <h4 className="font-semibold text-gray-900 mb-3">
                  {scenarios[activeScenario].name} 상세 분석
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">출생률 증가</span>
                    <span className="font-medium">+{scenarios[activeScenario].birthRateIncrease.toFixed(2)}명</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">서비스 수용률</span>
                    <span className="font-medium">{scenarios[activeScenario].adoptionRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">연간 경제효과</span>
                    <span className="font-medium">
                      {Math.round(scenarios[activeScenario].economicEffect / 100000000)}억원
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 파급 효과 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🌊 사회적 파급 효과
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rippleEffects.map((effect, index) => {
              const IconComponent = effect.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="card card-hover"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${effect.color} rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{effect.title}</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">현재: {effect.current}</span>
                    <ArrowUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-bold text-gray-900">목표: {effect.target}</span>
                  </div>
                  <div className="text-center mb-3">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {effect.change}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{effect.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* 글로벌 비교 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🌍 글로벌 우수 사례 비교
          </h3>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">국가/지역</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">출생률</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">주요 정책</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">예산 규모</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">성과</th>
                  </tr>
                </thead>
                <tbody>
                  {globalComparison.map((country, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.2 + index * 0.2 }}
                      className={`border-b border-gray-100 ${
                        country.country.includes('화성시') ? 'bg-blue-50' : ''
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          {country.country.includes('화성시') && (
                            <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          )}
                          <span className="font-medium text-gray-900">{country.country}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-semibold text-primary-600">{country.birthRate}</td>
                      <td className="py-4 px-6 text-gray-700">{country.policy}</td>
                      <td className="py-4 px-6 text-gray-700">{country.budget}</td>
                      <td className="py-4 px-6 text-gray-700">{country.result}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* 핵심 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="bg-gradient-to-r from-primary-500 to-success-500 rounded-2xl p-8 text-white text-center"
        >
          <Lightbulb className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-2xl font-bold mb-4">혁신적 효율성의 증명</h3>
          <p className="text-xl mb-6 opacity-90">
            11억원 투자로 108억원 효과를 창출하는 <strong>2,945%의 투자 수익률</strong>
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">1/30</div>
              <div className="opacity-90">타 정책 대비 비용</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10배</div>
              <div className="opacity-90">기존 방식 대비 효과</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3년</div>
              <div className="opacity-90">투자금 회수 기간</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactSection
