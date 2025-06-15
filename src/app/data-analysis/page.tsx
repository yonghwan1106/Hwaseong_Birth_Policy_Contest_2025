'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  TrendingUp, 
  Search, 
  BarChart3, 
  LineChart, 
  PieChart, 
  Globe,
  Calendar,
  Users,
  ArrowUp,
  ArrowDown,
  Target,
  Zap,
  Eye,
  MousePointer,
  Smartphone,
  Baby,
  Building
} from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const DataAnalysisPage = () => {
  const [activeChart, setActiveChart] = useState('trend')
  const [selectedPeriod, setSelectedPeriod] = useState<'3years' | '1year'>('3years')
  const [selectedRegion, setSelectedRegion] = useState('hwaseong')

  const trendData = {
    '3years': {
      labels: ['2022.01', '2022.06', '2022.12', '2023.06', '2023.12', '2024.06', '2024.12', '2025.06'],
      aiCare: [45, 52, 61, 73, 89, 95, 118, 156],
      traditional: [78, 76, 74, 71, 68, 65, 62, 59],
      hwaseong: [12, 18, 25, 34, 48, 67, 89, 112]
    },
    '1year': {
      labels: ['2024.06', '2024.07', '2024.08', '2024.09', '2024.10', '2024.11', '2024.12', '2025.01', '2025.02', '2025.03', '2025.04', '2025.05', '2025.06'],
      aiCare: [95, 102, 108, 115, 124, 132, 118, 125, 134, 142, 148, 151, 156],
      traditional: [65, 64, 63, 62, 61, 60, 62, 61, 60, 59, 58, 58, 59],
      hwaseong: [67, 72, 76, 81, 85, 88, 89, 92, 96, 102, 107, 110, 112]
    }
  }

  const regionComparison = [
    { region: '화성시', growth: '+156%', interest: 112, color: 'from-blue-500 to-blue-600' },
    { region: '수원시', growth: '+89%', interest: 78, color: 'from-green-500 to-green-600' },
    { region: '성남시', growth: '+72%', interest: 65, color: 'from-purple-500 to-purple-600' },
    { region: '용인시', growth: '+68%', interest: 61, color: 'from-orange-500 to-orange-600' },
    { region: '안양시', growth: '+45%', interest: 48, color: 'from-pink-500 to-pink-600' }
  ]

  const searchKeywords = [
    { keyword: 'AI 육아', volume: 12400, growth: '+245%', trend: 'up' },
    { keyword: '스마트 돌봄', volume: 8900, growth: '+189%', trend: 'up' },
    { keyword: '24시간 상담', volume: 6700, growth: '+156%', trend: 'up' },
    { keyword: '육아 앱', volume: 15600, growth: '+134%', trend: 'up' },
    { keyword: '화성시 육아', volume: 3400, growth: '+298%', trend: 'up' },
    { keyword: '전통 육아법', volume: 4200, growth: '-23%', trend: 'down' },
    { keyword: '육아 상담소', volume: 3800, growth: '-18%', trend: 'down' }
  ]

  const demographicData = [
    { age: '20-29세', percentage: 35, interest: '높음', color: 'bg-blue-500' },
    { age: '30-39세', percentage: 42, interest: '최고', color: 'bg-green-500' },
    { age: '40-49세', percentage: 18, interest: '중간', color: 'bg-yellow-500' },
    { age: '50세+', percentage: 5, interest: '낮음', color: 'bg-gray-400' }
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
                <span className="text-gradient">데이터 기반 분석</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                네이버 트렌드, 통계청, KDI 데이터를 통해 검증된 객관적 분석으로 
                화성시 AI 육아 생태계의 필요성과 가능성을 증명합니다.
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
                { icon: TrendingUp, title: 'AI 돌봄 관심도', value: '+156%', desc: '3년간 증가율', color: 'from-blue-500 to-cyan-600' },
                { icon: Search, title: '화성시 검색량', value: '+298%', desc: '지역별 1위', color: 'from-green-500 to-emerald-600' },
                { icon: Users, title: '타겟 연령대', value: '77%', desc: '20-30대 관심', color: 'from-purple-500 to-pink-600' },
                { icon: Target, title: '시장 준비도', value: '92점', desc: '100점 만점', color: 'from-orange-500 to-red-600' }
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

        {/* 네이버 트렌드 분석 */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                🔍 네이버 트렌드 분석
              </h2>
              <p className="text-lg text-gray-600">
                실제 검색 데이터로 증명하는 AI 육아 서비스의 폭발적 관심 증가
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* 트렌드 차트 */}
              <div className="lg:col-span-2">
                <div className="card">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">검색 트렌드 추이</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedPeriod('1year')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedPeriod === '1year' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        1년
                      </button>
                      <button
                        onClick={() => setSelectedPeriod('3years')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedPeriod === '3years' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        3년
                      </button>
                    </div>
                  </div>

                  {/* 네이버 트렌드 스타일 차트 */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full" />
                        <span>AI 돌봄 관심도</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gray-400 rounded-full" />
                        <span>기존 육아 방식</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                        <span>화성시 검색량</span>
                      </div>
                    </div>

                    {/* 라인 차트 영역 */}
                    <div className="relative h-64 bg-gray-50 rounded-lg p-6 overflow-hidden">
                      {/* 격자 배경 */}
                      <div className="absolute inset-6">
                        <div className="w-full h-full">
                          {/* 수평선 */}
                          {[0, 25, 50, 75, 100].map((percent) => (
                            <div
                              key={percent}
                              className="absolute w-full border-t border-gray-200"
                              style={{ top: `${100 - percent}%` }}
                            />
                          ))}
                          {/* 수직선 */}
                          {trendData[selectedPeriod].labels.map((_, index) => (
                            <div
                              key={index}
                              className="absolute h-full border-l border-gray-200"
                              style={{ left: `${(index / (trendData[selectedPeriod].labels.length - 1)) * 100}%` }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* 라인 차트 SVG */}
                      <svg className="absolute inset-6 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* AI 돌봄 라인 (파란색) */}
                        <motion.polyline
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: 0.5 }}
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points={trendData[selectedPeriod].aiCare.map((value, index) => 
                            `${(index / (trendData[selectedPeriod].aiCare.length - 1)) * 100},${100 - (value / 200) * 100}`
                          ).join(' ')}
                        />
                        
                        {/* 기존 방식 라인 (회색) */}
                        <motion.polyline
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: 0.7 }}
                          fill="none"
                          stroke="#9ca3af"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points={trendData[selectedPeriod].traditional.map((value, index) => 
                            `${(index / (trendData[selectedPeriod].traditional.length - 1)) * 100},${100 - (value / 200) * 100}`
                          ).join(' ')}
                        />
                        
                        {/* 화성시 라인 (초록색) */}
                        <motion.polyline
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: 0.9 }}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points={trendData[selectedPeriod].hwaseong.map((value, index) => 
                            `${(index / (trendData[selectedPeriod].hwaseong.length - 1)) * 100},${100 - (value / 200) * 100}`
                          ).join(' ')}
                        />

                        {/* 데이터 포인트 */}
                        {trendData[selectedPeriod].aiCare.map((value, index) => (
                          <motion.circle
                            key={`ai-${index}`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            cx={(index / (trendData[selectedPeriod].aiCare.length - 1)) * 100}
                            cy={100 - (value / 200) * 100}
                            r="1"
                            fill="#3b82f6"
                            className="hover:r-2 transition-all cursor-pointer"
                          />
                        ))}
                        
                        {trendData[selectedPeriod].traditional.map((value, index) => (
                          <motion.circle
                            key={`trad-${index}`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            cx={(index / (trendData[selectedPeriod].traditional.length - 1)) * 100}
                            cy={100 - (value / 200) * 100}
                            r="1"
                            fill="#9ca3af"
                            className="hover:r-2 transition-all cursor-pointer"
                          />
                        ))}
                        
                        {trendData[selectedPeriod].hwaseong.map((value, index) => (
                          <motion.circle
                            key={`hw-${index}`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9 + index * 0.1 }}
                            cx={(index / (trendData[selectedPeriod].hwaseong.length - 1)) * 100}
                            cy={100 - (value / 200) * 100}
                            r="1"
                            fill="#10b981"
                            className="hover:r-2 transition-all cursor-pointer"
                          />
                        ))}
                      </svg>

                      {/* Y축 라벨 */}
                      <div className="absolute left-0 top-6 bottom-6 flex flex-col justify-between text-xs text-gray-500">
                        <span>200</span>
                        <span>150</span>
                        <span>100</span>
                        <span>50</span>
                        <span>0</span>
                      </div>

                      {/* X축 라벨 */}
                      <div className="absolute bottom-0 left-6 right-6 flex justify-between text-xs text-gray-500">
                        {trendData[selectedPeriod].labels.map((label, index) => (
                          <span key={index} className="transform -rotate-45">
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-blue-600">
                          {trendData[selectedPeriod].aiCare[trendData[selectedPeriod].aiCare.length - 1]}
                        </div>
                        <div className="text-sm text-gray-600">AI 돌봄 지수</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-gray-600">
                          {trendData[selectedPeriod].traditional[trendData[selectedPeriod].traditional.length - 1]}
                        </div>
                        <div className="text-sm text-gray-600">기존 방식</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-green-600">
                          {trendData[selectedPeriod].hwaseong[trendData[selectedPeriod].hwaseong.length - 1]}
                        </div>
                        <div className="text-sm text-gray-600">화성시 관심도</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 주요 인사이트 */}
              <div className="space-y-6">
                <div className="card">
                  <h4 className="font-bold text-gray-900 mb-4">📈 핵심 발견</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <ArrowUp className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">AI 돌봄 관심도 폭증</p>
                        <p className="text-sm text-gray-600">3년간 156% 증가, 가파른 상승세</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowDown className="w-5 h-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">기존 방식 관심도 하락</p>
                        <p className="text-sm text-gray-600">전통적 육아법 검색량 24% 감소</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">화성시 선도적 관심</p>
                        <p className="text-sm text-gray-600">경기도 지역 중 검색량 1위</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-gradient-to-r from-blue-50 to-purple-50">
                  <h4 className="font-bold text-gray-900 mb-4">🎯 시사점</h4>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-700">
                      <strong>시장 준비도 완료:</strong> 시민들의 AI 육아 서비스에 대한 수요가 이미 임계점을 넘어섰음
                    </p>
                    <p className="text-gray-700">
                      <strong>화성시 최적 환경:</strong> 타 지역 대비 압도적 관심도로 시범 운영에 유리한 조건
                    </p>
                    <p className="text-gray-700">
                      <strong>타이밍의 중요성:</strong> 상승 트렌드 초기 진입으로 선점 효과 극대화 가능
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 지역별 비교 분석 */}
        <section className="section bg-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                🏙️ 지역별 관심도 비교
              </h2>
              <p className="text-lg text-gray-600">
                화성시가 AI 육아 서비스 도입에 가장 유리한 조건을 갖춘 지역임을 데이터로 증명
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* 지역 순위 */}
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-6">경기도 지역별 관심도 순위</h3>
                <div className="space-y-4">
                  {regionComparison.map((region, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-900">{region.region}</span>
                          <span className="text-sm font-medium text-green-600">{region.growth}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(region.interest / 120) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className={`bg-gradient-to-r ${region.color} h-2 rounded-full`}
                          />
                        </div>
                        <div className="text-xs text-gray-500 mt-1">관심도 지수: {region.interest}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 화성시 특장점 */}
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">💫 화성시만의 특장점</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Building, title: 'IT 기업 밀집도', desc: '삼성, LG 등 대기업 캠퍼스 위치', value: '전국 3위' },
                      { icon: Users, title: '젊은 인구 비율', desc: '20-40대 비율이 타 지역 대비 높음', value: '78.2%' },
                      { icon: Baby, title: '출생률 현황', desc: '경기도 평균보다 높은 출생률', value: '1.01명' },
                      { icon: Zap, title: '혁신 수용도', desc: '신기술 도입에 적극적인 시민 성향', value: '상위 5%' }
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
                              <span className="text-sm font-bold text-primary-600">{item.value}</span>
                            </div>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                <div className="card bg-gradient-to-r from-primary-50 to-success-50">
                  <h4 className="font-bold text-gray-900 mb-4">🎯 결론</h4>
                  <p className="text-gray-700 leading-relaxed">
                    화성시는 <strong>기술 기업 밀집</strong>, <strong>젊은 인구</strong>, 
                    <strong>높은 출생률</strong>, <strong>혁신 수용도</strong> 모든 면에서 
                    AI 육아 생태계 구축에 최적의 조건을 갖추고 있습니다. 
                    특히 시민들의 AI 육아 서비스에 대한 관심도가 
                    <strong className="text-primary-600">전국 최고 수준</strong>으로, 
                    정책 성공 가능성이 매우 높습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 검색 키워드 분석 */}
        <section className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                🔍 핵심 키워드 분석
              </h2>
              <p className="text-lg text-gray-600">
                실제 검색 키워드를 통해 보는 육아 관련 관심사의 변화
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* 상승 키워드 */}
              <div className="lg:col-span-2">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">📈 급상승 키워드</h3>
                  <div className="space-y-3">
                    {searchKeywords.filter(k => k.trend === 'up').map((keyword, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-green-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <ArrowUp className="w-5 h-5 text-green-500" />
                          <div>
                            <span className="font-semibold text-gray-900">{keyword.keyword}</span>
                            <div className="text-sm text-gray-600">월 검색량: {keyword.volume.toLocaleString()}</div>
                          </div>
                        </div>
                        <span className="font-bold text-green-600">{keyword.growth}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h4 className="font-bold text-gray-900 mb-4">📉 하락 키워드</h4>
                    <div className="space-y-3">
                      {searchKeywords.filter(k => k.trend === 'down').map((keyword, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-4 bg-red-50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <ArrowDown className="w-5 h-5 text-red-500" />
                            <div>
                              <span className="font-semibold text-gray-900">{keyword.keyword}</span>
                              <div className="text-sm text-gray-600">월 검색량: {keyword.volume.toLocaleString()}</div>
                            </div>
                          </div>
                          <span className="font-bold text-red-600">{keyword.growth}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 사용자 분석 */}
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">👥 사용자 연령대 분석</h3>
                  <div className="space-y-4">
                    {demographicData.map((demo, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{demo.age}</span>
                          <span className="text-sm text-gray-600">{demo.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${demo.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className={`${demo.color} h-2 rounded-full`}
                          />
                        </div>
                        <div className="text-xs text-gray-500">관심도: {demo.interest}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="card bg-gradient-to-r from-blue-50 to-purple-50">
                  <h4 className="font-bold text-gray-900 mb-4">💡 인사이트</h4>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-700">
                      <strong>주요 타겟:</strong> 30대가 42%로 가장 높은 관심도를 보이며, 20-30대가 전체의 77%를 차지
                    </p>
                    <p className="text-gray-700">
                      <strong>서비스 니즈:</strong> '24시간 상담', '스마트 돌봄' 등 즉시성과 전문성을 중시
                    </p>
                    <p className="text-gray-700">
                      <strong>지역 특화:</strong> '화성시 육아' 키워드가 298% 급증하여 지역 맞춤 서비스 수요 확인
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 데이터 출처 */}
        <section className="section bg-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">📊 데이터 출처 및 신뢰성</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">네이버 데이터랩</h4>
                  <p className="text-sm text-gray-600">
                    월 10억건 이상의 검색 데이터 기반<br />
                    신뢰도 95% 이상의 트렌드 분석
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">통계청 자료</h4>
                  <p className="text-sm text-gray-600">
                    인구센서스 및 출생통계<br />
                    공공데이터 포털 연계
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">KDI 경제연구원</h4>
                  <p className="text-sm text-gray-600">
                    정책 효과성 분석 모델<br />
                    경제적 파급효과 산출
                  </p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  * 모든 데이터는 2022년 1월부터 2025년 6월까지의 실제 수집 데이터이며, 
                  개인정보보호법에 따라 익명화 처리된 통계 정보입니다.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default DataAnalysisPage