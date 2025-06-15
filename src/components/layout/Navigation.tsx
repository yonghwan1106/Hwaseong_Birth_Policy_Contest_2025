'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download, ExternalLink, Brain } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navItems = [
    { id: 'home', label: '홈', href: '#home' },
    { id: 'features', label: 'AI 생태계', href: '#features-section' },
    { id: 'data', label: '데이터 분석', href: '/data-analysis' },
    { id: 'roadmap', label: '실행 계획', href: '#roadmap-section' },
    { id: 'impact', label: '기대 효과', href: '#impact-section' },
    { id: 'demo', label: '체험하기', href: '/demo' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // 현재 섹션 감지
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i] + '-section') || 
                      document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      }
    } else {
      // 외부 링크 또는 다른 페이지
      window.open(href, '_self')
    }
  }

  const downloadProposal = () => {
    // 제안서 다운로드 링크
    const link = document.createElement('a')
    link.href = '/documents/hwaseong-ai-childcare-proposal.pdf'
    link.download = '화성_AI_육아_생태계_제안서.pdf'
    link.click()
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* 로고 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-success-500 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-gray-900">화성 AI 육아</div>
                <div className="text-xs text-gray-500 -mt-1">미래 육아의 허브</div>
              </div>
            </motion.div>

            {/* 데스크톱 메뉴 */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors hover-underline ${
                    activeSection === item.id
                      ? 'text-primary-600'
                      : isScrolled
                      ? 'text-gray-700 hover:text-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA 버튼들 */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadProposal}
                className="btn-ghost flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                제안서 다운로드
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://naver.me/5L7gyXlX', '_blank')}
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                공모전 참여
              </motion.button>
            </div>

            {/* 모바일 메뉴 버튼 */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
        >
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <button
                onClick={downloadProposal}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                <Download className="w-4 h-4" />
                제안서 다운로드
              </button>
              
              <button
                onClick={() => window.open('https://naver.me/5L7gyXlX', '_blank')}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                공모전 참여
              </button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* 모바일 메뉴 오버레이 */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Navigation
