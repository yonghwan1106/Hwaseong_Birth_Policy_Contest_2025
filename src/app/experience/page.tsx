'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle,
  Smartphone,
  BarChart3,
  TrendingUp,
  Send,
  Mic,
  MicOff,
  Play,
  Pause,
  RotateCcw,
  Settings,
  User,
  Users,
  Bot,
  Heart,
  Baby,
  Clock,
  MapPin,
  Star,
  Camera,
  Calendar,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Zap,
  Target,
  Eye,
  Download,
  Share2,
  Sparkles,
  Brain,
  Home,
  Bell,
  Menu,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Info,
  PieChart,
  LineChart
} from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const ExperiencePage = () => {
  // AI 챗봇 상태
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'ai',
      message: '안녕하세요! 저는 화성 AI 맘케어 상담사입니다. 육아에 관한 모든 고민을 들어드릴게요. 어떤 도움이 필요하신가요?',
      time: '09:15'
    }
  ])
  const [currentMessage, setCurrentMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [voiceMode, setVoiceMode] = useState(false)

  // 앱 프로토타입 상태
  const [currentScreen, setCurrentScreen] = useState('home')
  const [appStep, setAppStep] = useState(0)

  // 정책 시뮬레이터 상태
  const [simulatorActive, setSimulatorActive] = useState(false)
  const [policyVariables, setPolicyVariables] = useState({
    budget: 50,
    coverage: 30,
    aiLevel: 70,
    partnershipCount: 5
  })

  // 데이터 시각화 상태
  const [selectedChart, setSelectedChart] = useState('trend')
  const [chartData, setChartData] = useState('ai_adoption')

  // AI 응답 시나리오
  const aiResponses = {
    '안녕': '안녕하세요! 육아맘님, 오늘 하루는 어떠셨나요? 궁금한 것이 있으시면 언제든 말씀해주세요.',
    '수유': '수유와 관련된 고민이시군요! 아기 월령이 어떻게 되시나요? 월령별로 수유 패턴과 주의사항이 달라져요.',
    '이유식': '이유식 시작 시기는 생후 4-6개월이 적당해요. 아기가 보이는 신호들을 체크해보시겠어요?\n\n✅ 목을 가누고 앉을 수 있음\n✅ 침 흘림이 줄어듦\n✅ 어른 음식에 관심 보임',
    '밤잠': '밤잠이 힘드시겠어요. 아기 월령과 현재 수면 패턴을 알려주시면 더 구체적인 도움을 드릴 수 있어요. 일단 수면 환경부터 체크해볼까요?',
    '발달': '아기 발달에 대한 궁금증이시군요! 현재 몇 개월 아기인지 알려주시면 해당 시기 발달 지표와 놀이법을 안내해드릴게요.',
    'default': '네, 잘 알겠습니다. 더 구체적으로 어떤 부분이 궁금하신지 말씀해주시면 맞춤형 조언을 드릴게요. 24시간 언제든 도움을 드릴 수 있어요!'
  }

  // 앱 화면 데이터
  const appScreens = {
    home: {
      title: '화성 AI 맘케어',
      component: 'HomeScreen'
    },
    chat: {
      title: 'AI 상담',
      component: 'ChatScreen'
    },
    development: {
      title: '발달 체크',
      component: 'DevelopmentScreen'
    },
    matching: {
      title: '돌봄 매칭',
      component: 'MatchingScreen'
    },
    community: {
      title: '커뮤니티',
      component: 'CommunityScreen'
    }
  }

  // 챗봇 메시지 전송
  const sendMessage = async () => {
    if (!currentMessage.trim()) return

    const userMessage = {
      type: 'user',
      message: currentMessage,
      time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
    }

    setChatMessages(prev => [...prev, userMessage])
    setCurrentMessage('')
    setIsTyping(true)

    // AI 응답 시뮬레이션
    setTimeout(() => {
      const responseKey = Object.keys(aiResponses).find(key => 
        currentMessage.toLowerCase().includes(key.toLowerCase())
      ) || 'default'

      const aiMessage = {
        type: 'ai',
        message: aiResponses[responseKey as keyof typeof aiResponses],
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
      }

      setChatMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  // 키보드 이벤트 처리
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // 정책 시뮬레이터 실행
  const runSimulator = () => {
    setSimulatorActive(true)
    setTimeout(() => setSimulatorActive(false), 3000)
  }

  // 계산된 효과
  const calculatedEffect = {
    births: Math.round((policyVariables.budget * policyVariables.coverage * policyVariables.aiLevel) / 10000),
    satisfaction: Math.min(95, 60 + (policyVariables.aiLevel * 0.3)),
    roi: Math.round((policyVariables.budget * policyVariables.partnershipCount * 2.5)),
    expansion: Math.round(policyVariables.partnershipCount * 1.5)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* 히어로 섹션 */}
        <section className="section bg-gradient-to-br from-purple-50 via-white to-cyan-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-display font-display font-bold text-gray-900 mb-6">
                <span className="text-gradient">체험하기</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                실제 작동하는 AI 상담, 앱 프로토타입, 정책 시뮬레이터를 직접 체험하며 
                화성시 AI 육아 생태계의 실현 가능성을 확인해보세요.
              </p>
            </motion.div>

            {/* 체험 메뉴 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-4 gap-6 mb-16"
            >
              {[
                { icon: MessageCircle, title: 'AI 상담 체험', desc: '실시간 육아 상담', color: 'from-blue-500 to-cyan-600', href: '#ai-chat' },
                { icon: Smartphone, title: '앱 프로토타입', desc: '모바일 앱 시연', color: 'from-green-500 to-emerald-600', href: '#app-demo' },
                { icon: Target, title: '정책 시뮬레이터', desc: '효과 실시간 계산', color: 'from-purple-500 to-pink-600', href: '#policy-sim' },
                { icon: BarChart3, title: '데이터 시각화', desc: '인터랙티브 차트', color: 'from-orange-500 to-red-600', href: '#data-viz' }
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="card text-center hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.a>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* AI 상담 체험 */}
        <section id="ai-chat" className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                🤖 AI 상담 체험
              </h2>
              <p className="text-lg text-gray-600">
                실제 AI 상담사와 대화해보며 24시간 육아 지원 서비스를 체험하세요
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* 채팅 인터페이스 */}
              <div className="lg:col-span-2">
                <div className="card bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
                  {/* 채팅 헤더 */}
                  <div className="bg-white p-4 border-b flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">AI 맘케어 상담사</h3>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        온라인
                      </div>
                    </div>
                    <button
                      onClick={() => setVoiceMode(!voiceMode)}
                      className={`p-2 rounded-lg transition-colors ${
                        voiceMode ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {voiceMode ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* 채팅 메시지 영역 */}
                  <div className="h-96 overflow-y-auto p-4 space-y-4">
                    <AnimatePresence>
                      {chatMessages.map((message, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          {message.type === 'ai' && (
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-white" />
                            </div>
                          )}
                          <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                            message.type === 'user'
                              ? 'bg-blue-500 text-white ml-auto'
                              : 'bg-white text-gray-900 shadow-sm'
                          }`}>
                            <p className="whitespace-pre-line">{message.message}</p>
                            <div className={`text-xs mt-1 ${
                              message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                            }`}>
                              {message.time}
                            </div>
                          </div>
                          {message.type === 'user' && (
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-gray-600" />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {/* 타이핑 인디케이터 */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3 justify-start"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white px-4 py-2 rounded-2xl shadow-sm">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* 메시지 입력 영역 */}
                  <div className="p-4 border-t bg-white">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="육아 고민을 말씀해주세요..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={sendMessage}
                        disabled={!currentMessage.trim()}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 추천 질문 및 기능 */}
              <div className="space-y-6">
                <div className="card">
                  <h3 className="font-bold text-gray-900 mb-4">💬 추천 질문</h3>
                  <div className="space-y-2">
                    {[
                      '밤잠을 안 자요',
                      '이유식 시작 시기',
                      '수유 간격 조절',
                      '발달 지연 체크',
                      '예방접종 일정'
                    ].map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMessage(question)}
                        className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="card bg-gradient-to-r from-blue-50 to-cyan-50">
                  <h3 className="font-bold text-gray-900 mb-4">🎯 AI 상담 특징</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">24시간 언제나 상담 가능</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">개인 맞춤형 솔루션 제공</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">전문의 검증 정보 기반</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">상담 이력 자동 저장</span>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="font-bold text-gray-900 mb-4">📊 성능 지표</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">응답 정확도</span>
                        <span className="text-sm font-medium">96%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '96%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">사용자 만족도</span>
                        <span className="text-sm font-medium">4.8/5.0</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">평균 응답 시간</span>
                        <span className="text-sm font-medium">1.2초</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '88%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 앱 프로토타입 체험 */}
        <section id="app-demo" className="section bg-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                📱 앱 프로토타입 체험
              </h2>
              <p className="text-lg text-gray-600">
                실제 모바일 앱의 주요 기능들을 미리 체험해보세요
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* 모바일 프레임 */}
              <div className="lg:col-span-2 flex justify-center">
                <div className="w-80 h-[600px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* 상태바 */}
                    <div className="h-12 bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-between px-4 text-white">
                      <div className="text-sm font-medium">9:41</div>
                      <div className="text-lg font-bold">{appScreens[currentScreen as keyof typeof appScreens].title}</div>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="w-1 h-1 bg-white rounded-full" />
                        <div className="w-1 h-1 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* 앱 콘텐츠 */}
                    <div className="h-[calc(100%-3rem)] overflow-y-auto">
                      <AnimatePresence mode="wait">
                        {currentScreen === 'home' && (
                          <motion.div
                            key="home"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="p-6 space-y-6"
                          >
                            {/* 사용자 정보 */}
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                  <User className="w-6 h-6 text-gray-600" />
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-900">김맘님</h3>
                                  <p className="text-sm text-gray-600">7개월 아기 엄마</p>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="bg-white rounded-lg p-2 text-center">
                                  <div className="font-bold text-blue-600">12회</div>
                                  <div className="text-gray-600">상담</div>
                                </div>
                                <div className="bg-white rounded-lg p-2 text-center">
                                  <div className="font-bold text-green-600">85%</div>
                                  <div className="text-gray-600">발달 진행도</div>
                                </div>
                              </div>
                            </div>

                            {/* 빠른 기능 */}
                            <div className="grid grid-cols-2 gap-4">
                              <button
                                onClick={() => setCurrentScreen('chat')}
                                className="bg-blue-500 text-white rounded-2xl p-4 text-center"
                              >
                                <MessageCircle className="w-8 h-8 mx-auto mb-2" />
                                <div className="font-medium">AI 상담</div>
                              </button>
                              <button
                                onClick={() => setCurrentScreen('development')}
                                className="bg-green-500 text-white rounded-2xl p-4 text-center"
                              >
                                <Baby className="w-8 h-8 mx-auto mb-2" />
                                <div className="font-medium">발달 체크</div>
                              </button>
                              <button
                                onClick={() => setCurrentScreen('matching')}
                                className="bg-purple-500 text-white rounded-2xl p-4 text-center"
                              >
                                <Heart className="w-8 h-8 mx-auto mb-2" />
                                <div className="font-medium">돌봄 매칭</div>
                              </button>
                              <button
                                onClick={() => setCurrentScreen('community')}
                                className="bg-orange-500 text-white rounded-2xl p-4 text-center"
                              >
                                <Users className="w-8 h-8 mx-auto mb-2" />
                                <div className="font-medium">커뮤니티</div>
                              </button>
                            </div>

                            {/* 오늘의 팁 */}
                            <div className="bg-yellow-50 rounded-2xl p-4">
                              <h4 className="font-semibold text-gray-900 mb-2">💡 오늘의 육아 팁</h4>
                              <p className="text-sm text-gray-700">
                                7개월 아기는 앉기 시작하는 시기예요. 
                                안전한 환경에서 혼자 앉는 연습을 도와주세요!
                              </p>
                            </div>
                          </motion.div>
                        )}

                        {currentScreen === 'chat' && (
                          <motion.div
                            key="chat"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="p-6"
                          >
                            <div className="space-y-4">
                              <div className="bg-blue-50 rounded-2xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Bot className="w-5 h-5 text-blue-600" />
                                  <span className="font-medium text-blue-900">AI 상담사</span>
                                </div>
                                <p className="text-sm text-gray-700">
                                  안녕하세요! 오늘은 어떤 고민이 있으신가요?
                                </p>
                              </div>
                              
                              <div className="space-y-2">
                                <button className="w-full p-3 bg-gray-50 rounded-xl text-left text-sm">
                                  이유식 진행 상황 체크
                                </button>
                                <button className="w-full p-3 bg-gray-50 rounded-xl text-left text-sm">
                                  수면 패턴 상담
                                </button>
                                <button className="w-full p-3 bg-gray-50 rounded-xl text-left text-sm">
                                  발달 단계 확인
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {currentScreen === 'development' && (
                          <motion.div
                            key="development"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="p-6"
                          >
                            <div className="space-y-4">
                              <div className="text-center mb-6">
                                <h3 className="font-bold text-gray-900 mb-2">7개월 발달 체크</h3>
                                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                                  <Baby className="w-8 h-8 text-white" />
                                </div>
                              </div>

                              <div className="space-y-3">
                                {[
                                  { skill: '혼자 앉기', status: 'completed' },
                                  { skill: '기어다니기', status: 'in-progress' },
                                  { skill: '이유식 먹기', status: 'completed' },
                                  { skill: '옹알이', status: 'completed' },
                                  { skill: '물건 잡기', status: 'in-progress' }
                                ].map((item, index) => (
                                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                      item.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                                    }`}>
                                      {item.status === 'completed' ? (
                                        <CheckCircle className="w-4 h-4 text-white" />
                                      ) : (
                                        <Clock className="w-4 h-4 text-white" />
                                      )}
                                    </div>
                                    <span className="flex-1 text-gray-900">{item.skill}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="bg-green-50 rounded-xl p-4">
                                <h4 className="font-semibold text-green-900 mb-2">진행률: 85%</h4>
                                <div className="w-full bg-green-200 rounded-full h-2">
                                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }} />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {currentScreen === 'matching' && (
                          <motion.div
                            key="matching"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="p-6"
                          >
                            <div className="space-y-4">
                              <h3 className="font-bold text-gray-900 text-center mb-6">근처 돌봄 서비스</h3>
                              
                              {[
                                { name: '김시터', rating: 4.9, distance: '0.5km', price: '15,000원/시간' },
                                { name: '이맘이', rating: 4.8, distance: '0.8km', price: '14,000원/시간' },
                                { name: '박도우미', rating: 4.7, distance: '1.2km', price: '13,000원/시간' }
                              ].map((sitter, index) => (
                                <div key={index} className="bg-white border rounded-xl p-4">
                                  <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                      <User className="w-6 h-6 text-gray-600" />
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-gray-900">{sitter.name}</h4>
                                      <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Star className="w-4 h-4 text-yellow-500" />
                                        <span>{sitter.rating}</span>
                                        <span>•</span>
                                        <span>{sitter.distance}</span>
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <div className="font-medium text-gray-900">{sitter.price}</div>
                                    </div>
                                  </div>
                                  <button className="w-full bg-purple-500 text-white rounded-lg py-2 text-sm font-medium">
                                    예약하기
                                  </button>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {currentScreen === 'community' && (
                          <motion.div
                            key="community"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="p-6"
                          >
                            <div className="space-y-4">
                              <h3 className="font-bold text-gray-900 text-center mb-6">화성맘 커뮤니티</h3>
                              
                              {[
                                { title: '이유식 레시피 공유해요!', author: '초보맘', time: '5분 전', likes: 12 },
                                { title: '동탄 놀이터 정보', author: '육아맘', time: '1시간 전', likes: 8 },
                                { title: '밤잠 꿀팁 있나요?', author: '잠못자는맘', time: '3시간 전', likes: 15 }
                              ].map((post, index) => (
                                <div key={index} className="bg-white border rounded-xl p-4">
                                  <h4 className="font-medium text-gray-900 mb-2">{post.title}</h4>
                                  <div className="flex items-center justify-between text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                      <span>{post.author}</span>
                                      <span>•</span>
                                      <span>{post.time}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Heart className="w-4 h-4 text-red-500" />
                                      <span>{post.likes}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* 하단 네비게이션 */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t flex">
                      {[
                        { id: 'home', icon: Home, label: '홈' },
                        { id: 'chat', icon: MessageCircle, label: '상담' },
                        { id: 'development', icon: Baby, label: '발달' },
                        { id: 'matching', icon: Heart, label: '매칭' },
                        { id: 'community', icon: Users, label: '커뮤니티' }
                      ].map((nav) => {
                        const IconComponent = nav.icon
                        return (
                          <button
                            key={nav.id}
                            onClick={() => setCurrentScreen(nav.id)}
                            className={`flex-1 flex flex-col items-center justify-center gap-1 ${
                              currentScreen === nav.id ? 'text-primary-600' : 'text-gray-400'
                            }`}
                          >
                            <IconComponent className="w-5 h-5" />
                            <span className="text-xs">{nav.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* 앱 기능 설명 */}
              <div className="space-y-6">
                <div className="card">
                  <h3 className="font-bold text-gray-900 mb-4">📱 주요 기능</h3>
                  <div className="space-y-4">
                    {[
                      { icon: MessageCircle, title: 'AI 24시간 상담', desc: '언제든 전문적인 육아 조언' },
                      { icon: Baby, title: '발달 단계 추적', desc: '개인 맞춤형 발달 체크' },
                      { icon: Heart, title: '돌봄 서비스 매칭', desc: '신뢰할 수 있는 돌봄이 연결' },
                      { icon: Users, title: '지역 커뮤니티', desc: '화성시 육아맘들과 소통' },
                      { icon: Calendar, title: '일정 관리', desc: '예방접종, 검진 일정 알림' }
                    ].map((feature, index) => {
                      const IconComponent = feature.icon
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <IconComponent className="w-5 h-5 text-primary-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900">{feature.title}</h4>
                            <p className="text-sm text-gray-600">{feature.desc}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="card bg-gradient-to-r from-purple-50 to-pink-50">
                  <h3 className="font-bold text-gray-900 mb-4">🎯 사용자 피드백</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <span className="text-sm font-medium">4.8/5.0</span>
                      </div>
                      <p className="text-sm text-gray-700">"밤에도 바로 답변 받을 수 있어서 너무 좋아요!"</p>
                      <p className="text-xs text-gray-500 mt-1">- 7개월 아기 엄마</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <span className="text-sm font-medium">4.9/5.0</span>
                      </div>
                      <p className="text-sm text-gray-700">"발달 체크 기능이 정말 유용해요."</p>
                      <p className="text-xs text-gray-500 mt-1">- 12개월 아기 엄마</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 정책 시뮬레이터 */}
        <section id="policy-sim" className="section bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                🎯 정책 시뮬레이터
              </h2>
              <p className="text-lg text-gray-600">
                정책 변수를 조정하며 실시간으로 효과를 확인해보세요
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* 시뮬레이터 컨트롤 */}
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  <Settings className="w-6 h-6 inline mr-2" />
                  정책 변수 조정
                </h3>
                
                <div className="space-y-6">
                  {/* 예산 규모 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      예산 규모: {policyVariables.budget}억원
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={policyVariables.budget}
                      onChange={(e) => setPolicyVariables(prev => ({ ...prev, budget: Number(e.target.value) }))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>10억</span>
                      <span>100억</span>
                    </div>
                  </div>

                  {/* 서비스 커버리지 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      서비스 커버리지: {policyVariables.coverage}%
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="80"
                      value={policyVariables.coverage}
                      onChange={(e) => setPolicyVariables(prev => ({ ...prev, coverage: Number(e.target.value) }))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>10%</span>
                      <span>80%</span>
                    </div>
                  </div>

                  {/* AI 기술 수준 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      AI 기술 수준: {policyVariables.aiLevel}%
                    </label>
                    <input
                      type="range"
                      min="30"
                      max="95"
                      value={policyVariables.aiLevel}
                      onChange={(e) => setPolicyVariables(prev => ({ ...prev, aiLevel: Number(e.target.value) }))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>기본</span>
                      <span>최고급</span>
                    </div>
                  </div>

                  {/* 파트너십 수 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      파트너십 수: {policyVariables.partnershipCount}개
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      value={policyVariables.partnershipCount}
                      onChange={(e) => setPolicyVariables(prev => ({ ...prev, partnershipCount: Number(e.target.value) }))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1개</span>
                      <span>15개</span>
                    </div>
                  </div>

                  <button
                    onClick={runSimulator}
                    disabled={simulatorActive}
                    className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 transition-all"
                  >
                    {simulatorActive ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        시뮬레이션 실행 중...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Play className="w-5 h-5" />
                        시뮬레이션 실행
                      </div>
                    )}
                  </button>
                </div>
              </div>

              {/* 시뮬레이션 결과 */}
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">예상 효과</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">{calculatedEffect.births}</div>
                      <div className="text-sm text-gray-600">연간 추가 출생</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">{calculatedEffect.satisfaction.toFixed(0)}%</div>
                      <div className="text-sm text-gray-600">사용자 만족도</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">{calculatedEffect.roi}%</div>
                      <div className="text-sm text-gray-600">투자 수익률</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-orange-600">{calculatedEffect.expansion}개</div>
                      <div className="text-sm text-gray-600">확산 지자체</div>
                    </div>
                  </div>

                  {/* 효과 분석 */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3">📊 분석 결과</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-700">
                        <strong>예산 효율성:</strong> {
                          calculatedEffect.roi > 500 ? '매우 높음' :
                          calculatedEffect.roi > 200 ? '높음' :
                          calculatedEffect.roi > 100 ? '적정' : '낮음'
                        }
                      </p>
                      <p className="text-gray-700">
                        <strong>확산 가능성:</strong> {
                          calculatedEffect.expansion > 10 ? '전국 확산 가능' :
                          calculatedEffect.expansion > 5 ? '지역 확산 가능' :
                          '단계적 확산 필요'
                        }
                      </p>
                      <p className="text-gray-700">
                        <strong>지속 가능성:</strong> {
                          calculatedEffect.satisfaction > 80 ? '매우 높음' :
                          calculatedEffect.satisfaction > 70 ? '높음' : '보통'
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card bg-gradient-to-r from-primary-50 to-success-50">
                  <h3 className="font-bold text-gray-900 mb-4">💡 최적화 제안</h3>
                  <div className="space-y-3 text-sm">
                    {policyVariables.budget < 30 && (
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5" />
                        <span className="text-gray-700">예산을 늘리면 더 큰 효과를 얻을 수 있습니다.</span>
                      </div>
                    )}
                    {policyVariables.coverage < 50 && (
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-blue-500 mt-0.5" />
                        <span className="text-gray-700">서비스 커버리지 확대를 고려해보세요.</span>
                      </div>
                    )}
                    {policyVariables.aiLevel > 80 && (
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span className="text-gray-700">높은 AI 기술 수준으로 우수한 서비스 품질 확보</span>
                      </div>
                    )}
                    {policyVariables.partnershipCount > 8 && (
                      <div className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-purple-500 mt-0.5" />
                        <span className="text-gray-700">다양한 파트너십으로 생태계 효과 극대화</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 데이터 시각화 체험 */}
        <section id="data-viz" className="section bg-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-heading font-bold text-gray-900 mb-4">
                📈 데이터 시각화 체험
              </h2>
              <p className="text-lg text-gray-600">
                인터랙티브 차트로 다양한 관점에서 데이터를 탐색해보세요
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* 차트 선택 */}
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-4">📊 차트 선택</h3>
                <div className="space-y-2">
                  {[
                    { id: 'trend', label: '트렌드 분석', icon: TrendingUp },
                    { id: 'comparison', label: '지역 비교', icon: BarChart3 },
                    { id: 'distribution', label: '연령대 분포', icon: PieChart },
                    { id: 'timeline', label: '시계열 변화', icon: LineChart }
                  ].map((chart) => {
                    const IconComponent = chart.icon
                    return (
                      <button
                        key={chart.id}
                        onClick={() => setSelectedChart(chart.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                          selectedChart === chart.id
                            ? 'bg-primary-100 text-primary-700 border border-primary-200'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium">{chart.label}</span>
                      </button>
                    )
                  })}
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-gray-900 mb-4">🎛️ 데이터 필터</h4>
                  <div className="space-y-3">
                    <select 
                      value={chartData}
                      onChange={(e) => setChartData(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                      <option value="ai_adoption">AI 도입 관심도</option>
                      <option value="birth_rate">출생률 변화</option>
                      <option value="satisfaction">정책 만족도</option>
                      <option value="usage">서비스 이용률</option>
                    </select>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 p-2 bg-primary-100 text-primary-700 rounded-lg text-sm font-medium">
                        1년
                      </button>
                      <button className="flex-1 p-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                        3년
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 차트 영역 */}
              <div className="lg:col-span-3">
                <div className="card">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {selectedChart === 'trend' && '트렌드 분석'}
                      {selectedChart === 'comparison' && '지역별 비교'}
                      {selectedChart === 'distribution' && '연령대 분포'}
                      {selectedChart === 'timeline' && '시계열 변화'}
                    </h3>
                    <div className="flex gap-2">
                      <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                        <Share2 className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* 차트 시뮬레이션 */}
                  <div className="h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {selectedChart === 'trend' && (
                        <motion.div
                          key="trend"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="w-full h-full flex items-end justify-between gap-2"
                        >
                          {[65, 78, 85, 92, 88, 95, 102, 118, 125, 134, 148, 156].map((value, index) => (
                            <motion.div
                              key={index}
                              initial={{ height: 0 }}
                              animate={{ height: `${(value / 156) * 100}%` }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm min-w-[20px]"
                            />
                          ))}
                        </motion.div>
                      )}

                      {selectedChart === 'comparison' && (
                        <motion.div
                          key="comparison"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="w-full h-full flex items-end justify-between gap-4"
                        >
                          {[
                            { name: '화성시', value: 156, color: 'from-blue-500 to-blue-400' },
                            { name: '수원시', value: 89, color: 'from-green-500 to-green-400' },
                            { name: '성남시', value: 72, color: 'from-purple-500 to-purple-400' },
                            { name: '용인시', value: 68, color: 'from-orange-500 to-orange-400' },
                            { name: '안양시', value: 45, color: 'from-pink-500 to-pink-400' }
                          ].map((region, index) => (
                            <motion.div
                              key={index}
                              initial={{ height: 0 }}
                              animate={{ height: `${(region.value / 156) * 100}%` }}
                              transition={{ delay: index * 0.1 }}
                              className={`bg-gradient-to-t ${region.color} rounded-t-sm flex-1 min-h-[20px] relative group`}
                            >
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs rounded px-2 py-1">
                                {region.name}: {region.value}
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                      {selectedChart === 'distribution' && (
                        <motion.div
                          key="distribution"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="relative w-64 h-64"
                        >
                          <div className="absolute inset-0 rounded-full border-8 border-gray-200">
                            <div className="absolute inset-0 rounded-full" style={{
                              background: 'conic-gradient(from 0deg, #3b82f6 0deg 126deg, #10b981 126deg 252deg, #f59e0b 252deg 316deg, #6b7280 316deg 360deg)'
                            }} />
                          </div>
                          <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-lg font-bold text-gray-900">연령대</div>
                              <div className="text-sm text-gray-600">분포</div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {selectedChart === 'timeline' && (
                        <motion.div
                          key="timeline"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="w-full h-full relative"
                        >
                          <svg className="w-full h-full">
                            <motion.path
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 2 }}
                              d="M 50 200 Q 150 100 250 150 T 450 100"
                              stroke="#3b82f6"
                              strokeWidth="3"
                              fill="none"
                              strokeLinecap="round"
                            />
                          </svg>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* 차트 정보 */}
                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">156</div>
                      <div className="text-sm text-gray-600">현재 지수</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">+87%</div>
                      <div className="text-sm text-gray-600">전년 대비</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">전국 1위</div>
                      <div className="text-sm text-gray-600">지역 순위</div>
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

export default ExperiencePage