'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Smartphone, 
  MessageCircle, 
  TrendingUp, 
  Users, 
  Calendar,
  Settings,
  Home,
  User,
  Send,
  Camera,
  Clock,
  Star,
  MapPin,
  Phone,
  Play
} from 'lucide-react'

const AppDemo = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeScreen, setActiveScreen] = useState('home')
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', text: '안녕하세요! 화성 AI 맘케어입니다. 어떤 도움이 필요하신가요? 😊', time: '14:32' },
    { type: 'user', text: '6개월 아기가 밤에 자꾸 깨요. 어떻게 해야 할까요?', time: '14:33' }
  ])
  const [currentMessage, setCurrentMessage] = useState('')

  const screens = [
    { id: 'home', label: '홈', icon: Home },
    { id: 'chat', label: 'AI상담', icon: MessageCircle },
    { id: 'development', label: '발달체크', icon: TrendingUp },
    { id: 'matching', label: '돌봄매칭', icon: Users },
    { id: 'profile', label: '내정보', icon: User }
  ]

  const mockUserData = {
    childName: '민준이',
    childAge: '6개월',
    nextCheckup: '2025.07.15',
    recentActivity: '놀이 영상 분석',
    aiScore: 95,
    developmentStage: '정상 발달'
  }

  const mockSitters = [
    {
      id: 1,
      name: '김영희',
      rating: 4.9,
      experience: '3년',
      distance: '0.3km',
      availability: '즉시 가능',
      speciality: '신생아 전문',
      hourlyRate: '15,000원'
    },
    {
      id: 2,
      name: '이미영',
      rating: 4.8,
      experience: '5년',
      distance: '0.7km',
      availability: '30분 후',
      speciality: '영아 놀이',
      hourlyRate: '18,000원'
    }
  ]

  const sendMessage = () => {
    if (!currentMessage.trim()) return
    
    const newUserMessage = {
      type: 'user',
      text: currentMessage,
      time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
    }
    
    setChatMessages(prev => [...prev, newUserMessage])
    setCurrentMessage('')
    
    // AI 응답 시뮬레이션
    setTimeout(() => {
      const aiResponse = {
        type: 'ai',
        text: '6개월 아기의 야간 수면 문제는 흔한 일이에요. 몇 가지 도움이 될 만한 방법을 알려드릴게요:\n\n1. 🌙 수면 루틴 만들기\n2. 🍼 밤중 수유 조절\n3. 🛏️ 수면 환경 개선\n\n더 자세한 상담을 원하시면 전문 상담사와 연결해드릴 수 있어요!',
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
      }
      setChatMessages(prev => [...prev, aiResponse])
    }, 1500)
  }

  const HomeScreen = () => (
    <div className="p-6 space-y-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">안녕하세요!</h2>
          <p className="text-gray-600">{mockUserData.childName} 엄마</p>
        </div>
        <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* 오늘의 활동 */}
      <div className="bg-blue-50 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-4">📱 오늘의 활동</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">AI 상담</span>
            <span className="text-blue-600 font-medium">3회</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">발달 체크</span>
            <span className="text-green-600 font-medium">완료</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">다음 검진</span>
            <span className="text-orange-600 font-medium">{mockUserData.nextCheckup}</span>
          </div>
        </div>
      </div>

      {/* 빠른 액션 */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setActiveScreen('chat')}
          className="bg-white border border-gray-200 rounded-2xl p-4 text-center hover:bg-gray-50 transition-colors"
        >
          <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <span className="text-sm font-medium text-gray-900">AI 상담</span>
        </button>
        <button 
          onClick={() => setActiveScreen('matching')}
          className="bg-white border border-gray-200 rounded-2xl p-4 text-center hover:bg-gray-50 transition-colors"
        >
          <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <span className="text-sm font-medium text-gray-900">시터 찾기</span>
        </button>
      </div>

      {/* 발달 현황 */}
      <div className="bg-green-50 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-4">📈 {mockUserData.childName} 발달 현황</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700">전체 점수</span>
          <span className="text-2xl font-bold text-green-600">{mockUserData.aiScore}/100</span>
        </div>
        <div className="w-full bg-green-200 rounded-full h-3">
          <div 
            className="bg-green-500 h-3 rounded-full transition-all duration-1000"
            style={{ width: `${mockUserData.aiScore}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">{mockUserData.developmentStage}</p>
      </div>
    </div>
  )

  const ChatScreen = () => (
    <div className="flex flex-col h-full">
      {/* 채팅 헤더 */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">AI 육아 상담사</h3>
            <p className="text-xs text-green-500">● 온라인</p>
          </div>
        </div>
      </div>

      {/* 채팅 메시지 */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {chatMessages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs p-3 rounded-2xl ${
              message.type === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-900'
            }`}>
              <p className="text-sm whitespace-pre-line">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {message.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 메시지 입력 */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="메시지를 입력하세요..."
            className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={sendMessage}
            className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )

  const DevelopmentScreen = () => (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold text-gray-900">발달 체크</h2>
      
      {/* 사진/영상 업로드 */}
      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center">
        <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="font-semibold text-gray-900 mb-2">놀이 영상 업로드</h3>
        <p className="text-sm text-gray-600 mb-4">
          아이의 놀이하는 모습을 촬영해 주세요<br />
          AI가 발달 상태를 분석합니다
        </p>
        <button className="btn-primary">
          영상 선택하기
        </button>
      </div>

      {/* 최근 분석 결과 */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-4">📊 최근 분석 결과</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">운동 발달</span>
            <div className="flex items-center gap-2">
              <div className="w-20 bg-green-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-4/5" />
              </div>
              <span className="text-sm font-medium text-green-600">정상</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">언어 발달</span>
            <div className="flex items-center gap-2">
              <div className="w-20 bg-blue-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full w-4/5" />
              </div>
              <span className="text-sm font-medium text-blue-600">우수</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">사회성 발달</span>
            <div className="flex items-center gap-2">
              <div className="w-20 bg-purple-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full w-3/5" />
              </div>
              <span className="text-sm font-medium text-purple-600">보통</span>
            </div>
          </div>
        </div>
      </div>

      {/* 추천 활동 */}
      <div className="bg-yellow-50 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-4">💡 오늘의 추천 활동</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">🎵</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">음악과 함께 몸짓 놀이</p>
              <p className="text-sm text-gray-600">운동 발달에 도움</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">📚</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">책 읽어주기</p>
              <p className="text-sm text-gray-600">언어 발달에 도움</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const MatchingScreen = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">돌봄 매칭</h2>
        <div className="flex items-center gap-2 text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-sm">실시간 매칭</span>
        </div>
      </div>

      {/* 빠른 요청 */}
      <div className="bg-red-50 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-4">🚨 긴급 돌봄 요청</h3>
        <p className="text-sm text-gray-600 mb-4">
          30분 내 매칭 가능한 시터를 찾아드려요
        </p>
        <button className="btn-primary w-full">
          긴급 매칭 요청
        </button>
      </div>

      {/* 추천 시터 목록 */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">🌟 추천 시터</h3>
        <div className="space-y-4">
          {mockSitters.map((sitter) => (
            <div key={sitter.id} className="bg-white border border-gray-200 rounded-2xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{sitter.name}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">{sitter.rating}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{sitter.experience}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{sitter.hourlyRate}</div>
                  <div className="text-xs text-gray-500">/시간</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{sitter.distance}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{sitter.availability}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {sitter.speciality}
                </span>
                <div className="flex gap-2">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Phone className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="btn-primary text-sm px-4 py-2">
                    매칭 요청
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const ProfileScreen = () => (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold text-gray-900">내 정보</h2>
      
      {/* 프로필 카드 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{mockUserData.childName} 엄마</h3>
            <p className="text-gray-600">화성시 동탄신도시</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">아이 나이</span>
            <p className="font-semibold text-gray-900">{mockUserData.childAge}</p>
          </div>
          <div>
            <span className="text-gray-600">가입일</span>
            <p className="font-semibold text-gray-900">2025.06.01</p>
          </div>
        </div>
      </div>

      {/* 이용 통계 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 mb-4">📊 이용 통계</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">AI 상담 이용</span>
            <span className="font-semibold text-blue-600">47회</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">발달 체크</span>
            <span className="font-semibold text-green-600">12회</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">시터 매칭</span>
            <span className="font-semibold text-purple-600">8회</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">만족도 평균</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-semibold text-gray-900">4.9</span>
            </div>
          </div>
        </div>
      </div>

      {/* 설정 */}
      <div className="space-y-3">
        <button className="w-full text-left p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">알림 설정</span>
            <Settings className="w-5 h-5 text-gray-400" />
          </div>
        </button>
        <button className="w-full text-left p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">개인정보 관리</span>
            <Settings className="w-5 h-5 text-gray-400" />
          </div>
        </button>
      </div>
    </div>
  )

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home': return <HomeScreen />
      case 'chat': return <ChatScreen />
      case 'development': return <DevelopmentScreen />
      case 'matching': return <MatchingScreen />
      case 'profile': return <ProfileScreen />
      default: return <HomeScreen />
    }
  }

  return (
    <section id="demo-section" ref={sectionRef} className="section bg-gray-50">
      <div className="container">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading font-display font-bold text-gray-900 mb-4">
            <span className="text-gradient">"화성 AI 맘케어" 앱 체험</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            실제 작동하는 프로토타입으로 미래의 육아 경험을 미리 체험해보세요
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          {/* 앱 프로토타입 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-6 mb-8 lg:mb-0"
          >
            <div className="sticky top-8">
              {/* 스마트폰 프레임 */}
              <div className="mx-auto w-80 bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden h-[650px] flex flex-col">
                  {/* 상태바 */}
                  <div className="bg-gray-50 px-6 py-3 flex items-center justify-between text-sm">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-green-500 rounded-sm" />
                      <span className="text-xs">100%</span>
                    </div>
                  </div>

                  {/* 앱 헤더 */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-6 h-6" />
                      <div>
                        <h1 className="font-bold">화성 AI 맘케어</h1>
                        <p className="text-xs opacity-90">미래 육아의 시작</p>
                      </div>
                    </div>
                  </div>

                  {/* 스크린 콘텐츠 */}
                  <div className="flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeScreen}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        {renderScreen()}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* 하단 네비게이션 */}
                  <div className="bg-white border-t border-gray-200 p-2">
                    <div className="flex justify-around">
                      {screens.map((screen) => {
                        const IconComponent = screen.icon
                        return (
                          <button
                            key={screen.id}
                            onClick={() => setActiveScreen(screen.id)}
                            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                              activeScreen === screen.id
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                          >
                            <IconComponent className="w-5 h-5" />
                            <span className="text-xs font-medium">{screen.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 기능 설명 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  실제로 사용할 수 있는 앱
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  단순한 목업이 아닌 <strong>실제 작동하는 프로토타입</strong>입니다. 
                  왼쪽 화면을 직접 조작해보시고 미래의 육아 경험을 체험해보세요.
                </p>
              </div>

              {/* 주요 기능 목록 */}
              <div className="space-y-6">
                {[
                  {
                    icon: MessageCircle,
                    title: 'AI 실시간 상담',
                    description: '24시간 언제든지 육아 고민을 상담하세요. 실제 대화가 가능합니다.',
                    color: 'text-blue-500'
                  },
                  {
                    icon: TrendingUp,
                    title: '발달 체크 시뮬레이션',
                    description: '사진 업로드로 발달 상태를 분석하는 과정을 체험해보세요.',
                    color: 'text-green-500'
                  },
                  {
                    icon: Users,
                    title: '시터 매칭 시스템',
                    description: '위치 기반으로 최적의 시터를 찾는 과정을 확인해보세요.',
                    color: 'text-purple-500'
                  }
                ].map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 + index * 0.2 }}
                      className="flex gap-4"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center ${feature.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* 체험 가이드 */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Play className="w-5 h-5 text-blue-500" />
                  체험 가이드
                </h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <span>하단 메뉴를 클릭해서 각 기능을 탐색해보세요</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <span>AI 상담에서 실제 메시지를 보내보세요</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <span>시터 매칭에서 매칭 요청을 해보세요</span>
                  </div>
                </div>
              </div>

              {/* 개발 완성도 */}
              <div className="bg-green-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">🚀 개발 완성도</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">UI/UX 디자인</span>
                    <span className="font-bold text-green-600">100%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">핵심 기능</span>
                    <span className="font-bold text-green-600">85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">시스템 설계</span>
                    <span className="font-bold text-green-600">95%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  이미 실제 개발 가능한 수준으로 설계가 완료되었습니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AppDemo
