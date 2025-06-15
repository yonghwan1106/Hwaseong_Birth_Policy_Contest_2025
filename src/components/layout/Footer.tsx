'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: '데이터 분석', href: '#stats-section' },
    { name: 'AI 육아 생태계', href: '#features-section' },
    { name: '실행 계획', href: '#roadmap-section' },
    { name: '기대 효과', href: '#impact-section' },
  ]

  const resources = [
    { name: '제안서 다운로드', href: '/proposal/hwaseong-ai-childcare-proposal.pdf' },
    { name: '화성시 홈페이지', href: 'https://www.hscity.go.kr', external: true },
    { name: '공모전 참여', href: 'https://naver.me/5L7gyXlX', external: true },
    { name: '정책 문의', href: 'tel:031-5189-1337', external: true },
  ]

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: '💻' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Email', href: 'mailto:sanoramyun8@gmail.com', icon: '📧' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container relative z-10">
        {/* 메인 푸터 콘텐츠 */}
        <div className="grid lg:grid-cols-4 gap-8 py-16">
          {/* 프로젝트 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-heading font-bold">
                <span className="text-gradient bg-gradient-to-r from-primary-400 to-success-400 bg-clip-text text-transparent">
                  화성 AI 육아 생태계
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                전국 최초 지자체 주도 AI 기반 통합 육아 지원 플랫폼으로 
                저출생 문제를 해결하는 혁신적 정책 제안입니다.
              </p>
            </div>

            {/* 연락처 정보 */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-white">연락처 정보</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <span>sanoramyun8@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary-400" />
                  <span>010-7939-3123</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span>경기도 용인시 수지구 성복2로 126</span>
                </div>
              </div>
            </div>

            {/* 프로젝트 정보 */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-white">프로젝트 정보</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p><strong>제안자:</strong> 박용환 (크리에이티브 넥서스)</p>
                <p><strong>공모전:</strong> 2025년 화성특례시 저출생 극복 정책 제안 공모전</p>
                <p><strong>목표:</strong> 최우수상 수상 및 실제 정책 채택</p>
                <p><strong>기여도:</strong> 100% (개인 참여)</p>
              </div>
            </div>
          </motion.div>

          {/* 빠른 링크 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-semibold text-lg text-white">빠른 링크</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-300 hover-underline"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* 리소스 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="font-semibold text-lg text-white">관련 자료</h4>
            <nav className="space-y-3">
              {resources.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-300 hover-underline"
                >
                  <span>{link.name}</span>
                  {link.external && <ExternalLink className="w-3 h-3" />}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-700" />

        {/* 하단 정보 */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* 저작권 정보 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-gray-400 text-sm">
                © 2025 크리에이티브 넥서스. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                이 제안서의 모든 권리는 채택 시 화성시에 귀속됩니다.
              </p>
            </motion.div>

            {/* 소셜 링크 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-full flex-center transition-colors duration-300"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* 맨 위로 버튼 */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-primary-600 hover:bg-primary-700 rounded-full flex-center transition-colors duration-300 shadow-lg"
              aria-label="맨 위로 이동"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>

        {/* 마지막 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center py-8 border-t border-gray-700"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-sm">
              화성시의 미래를 위해 정성껏 제작된 정책 제안서입니다
            </span>
            <Heart className="w-4 h-4 text-red-400" />
          </div>
        </motion.div>

        {/* 추가 정보 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center pb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-gray-400">
              실시간 업데이트 중 • 마지막 업데이트: 2025.06.15
            </span>
          </div>
        </motion.div>
      </div>

      {/* 배경 그래디언트 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </footer>
  )
}

export default Footer
