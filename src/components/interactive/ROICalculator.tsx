'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, DollarSign, Users, Zap } from 'lucide-react'

interface ROICalculatorProps {
  initialInvestment?: number
  initialBirthRateIncrease?: number
  initialUsers?: number
}

const ROICalculator = ({ 
  initialInvestment = 1100000000, // 11억원
  initialBirthRateIncrease = 0.05, // 5%
  initialUsers = 10000 
}: ROICalculatorProps) => {
  const [investment, setInvestment] = useState(initialInvestment)
  const [birthRateIncrease, setBirthRateIncrease] = useState(initialBirthRateIncrease)
  const [userCount, setUserCount] = useState(initialUsers)
  const [isCalculating, setIsCalculating] = useState(false)

  // ROI 계산 로직
  const calculations = useMemo(() => {
    // 기본 가정값들
    const basePopulation = 850000 // 화성시 인구
    const averageChildCost = 300000000 // 출생 1명당 경제효과 (3억원)
    const appRevenuePerUser = 50000 // 연간 사용자당 수익 (5만원)
    const operatingCostRatio = 0.3 // 운영비 비율 (30%)
    
    // 출생률 증가로 인한 경제 효과
    const additionalBirths = basePopulation * birthRateIncrease / 100
    const birthEconomicEffect = additionalBirths * averageChildCost
    
    // 앱 서비스 수익
    const appRevenue = userCount * appRevenuePerUser
    
    // 총 경제 효과
    const totalEconomicEffect = birthEconomicEffect + appRevenue
    
    // 운영비 차감
    const operatingCost = investment * operatingCostRatio
    const netEffect = totalEconomicEffect - operatingCost
    
    // ROI 계산
    const roi = ((netEffect - investment) / investment) * 100
    
    // 투자 회수 기간 (개월)
    const paybackPeriod = investment / (totalEconomicEffect / 36) // 36개월 기준
    
    return {
      additionalBirths: Math.round(additionalBirths),
      birthEconomicEffect,
      appRevenue,
      totalEconomicEffect,
      operatingCost,
      netEffect,
      roi,
      paybackPeriod
    }
  }, [investment, birthRateIncrease, userCount])

  const handleSliderChange = (setter: (value: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCalculating(true)
    setter(Number(e.target.value))
    setTimeout(() => setIsCalculating(false), 300)
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 100000000) {
      return `${(amount / 100000000).toFixed(1)}억원`
    } else if (amount >= 10000) {
      return `${(amount / 10000).toFixed(0)}만원`
    } else {
      return `${amount.toLocaleString()}원`
    }
  }

  return (
    <div className="card bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">ROI 시뮬레이터</h3>
          <p className="text-gray-600">투자 변수를 조정하여 예상 수익률을 계산해보세요</p>
        </div>
      </div>

      {/* 입력 슬라이더들 */}
      <div className="space-y-8 mb-8">
        {/* 투자금액 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="font-semibold text-gray-900 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-500" />
              총 투자금액
            </label>
            <span className="text-lg font-bold text-primary-600">
              {formatCurrency(investment)}
            </span>
          </div>
          <input
            type="range"
            min="500000000"
            max="2000000000"
            step="100000000"
            value={investment}
            onChange={handleSliderChange(setInvestment)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5억원</span>
            <span>20억원</span>
          </div>
        </div>

        {/* 출생률 증가 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="font-semibold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              출생률 증가율
            </label>
            <span className="text-lg font-bold text-blue-600">
              {birthRateIncrease.toFixed(1)}%
            </span>
          </div>
          <input
            type="range"
            min="0.1"
            max="15"
            step="0.1"
            value={birthRateIncrease}
            onChange={handleSliderChange(setBirthRateIncrease)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0.1%</span>
            <span>15%</span>
          </div>
        </div>

        {/* 사용자 수 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="font-semibold text-gray-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-500" />
              활성 사용자 수
            </label>
            <span className="text-lg font-bold text-purple-600">
              {userCount.toLocaleString()}명
            </span>
          </div>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={userCount}
            onChange={handleSliderChange(setUserCount)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1,000명</span>
            <span>100,000명</span>
          </div>
        </div>
      </div>

      {/* 계산 결과 */}
      <motion.div
        key={`${investment}-${birthRateIncrease}-${userCount}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* 주요 결과 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-8 h-8 text-green-500" />
              <div>
                <div className="text-sm text-green-600 font-medium">예상 ROI</div>
                <div className={`text-3xl font-bold transition-colors ${
                  isCalculating ? 'text-gray-400' : 'text-green-600'
                }`}>
                  {isCalculating ? '계산중...' : `${calculations.roi.toFixed(0)}%`}
                </div>
              </div>
            </div>
            <div className="text-sm text-green-700">
              투자 대비 {calculations.roi > 0 ? '수익' : '손실'} 비율
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-blue-500" />
              <div>
                <div className="text-sm text-blue-600 font-medium">투자 회수 기간</div>
                <div className={`text-3xl font-bold transition-colors ${
                  isCalculating ? 'text-gray-400' : 'text-blue-600'
                }`}>
                  {isCalculating ? '계산중...' : `${calculations.paybackPeriod.toFixed(1)}개월`}
                </div>
              </div>
            </div>
            <div className="text-sm text-blue-700">
              초기 투자금 회수 소요 시간
            </div>
          </div>
        </div>

        {/* 상세 분석 */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-4">상세 경제 효과 분석</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">추가 출생 예상</span>
              <span className="font-semibold text-gray-900">
                +{calculations.additionalBirths}명
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">출생률 증가 경제효과</span>
              <span className="font-semibold text-green-600">
                {formatCurrency(calculations.birthEconomicEffect)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">앱 서비스 수익</span>
              <span className="font-semibold text-blue-600">
                {formatCurrency(calculations.appRevenue)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">운영비 (30%)</span>
              <span className="font-semibold text-red-600">
                -{formatCurrency(calculations.operatingCost)}
              </span>
            </div>
            <hr className="border-gray-300" />
            <div className="flex items-center justify-between">
              <span className="font-bold text-gray-900">순 경제 효과</span>
              <span className={`font-bold text-xl ${
                calculations.netEffect > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {formatCurrency(calculations.netEffect)}
              </span>
            </div>
          </div>
        </div>

        {/* 시나리오 평가 */}
        <div className={`rounded-xl p-6 border-2 ${
          calculations.roi > 1000 ? 'bg-green-50 border-green-200' :
          calculations.roi > 500 ? 'bg-yellow-50 border-yellow-200' :
          'bg-red-50 border-red-200'
        }`}>
          <h4 className="font-bold mb-2">
            {calculations.roi > 1000 ? '🎯 매우 우수한 투자' :
             calculations.roi > 500 ? '👍 양호한 투자' :
             '⚠️ 투자 재검토 필요'}
          </h4>
          <p className="text-sm">
            {calculations.roi > 1000 ? 
              '현재 설정으로 매우 높은 투자 수익률이 예상됩니다. 적극적인 투자를 권장합니다.' :
             calculations.roi > 500 ?
              '양호한 수준의 투자 수익률입니다. 리스크 관리를 통해 안정적 수익 확보가 가능합니다.' :
              '현재 설정으로는 투자 효율성이 낮습니다. 변수 조정이나 전략 재검토가 필요합니다.'}
          </p>
        </div>
      </motion.div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3B82F6, #10B981);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3B82F6, #10B981);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  )
}

export default ROICalculator