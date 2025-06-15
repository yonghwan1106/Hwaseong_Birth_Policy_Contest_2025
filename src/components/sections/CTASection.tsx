'use client'

import { motion } from 'framer-motion'
import { Download, ExternalLink, Heart, Star, Users } from 'lucide-react'

const CTASection = () => {
  const handleDownload = () => {
    // 제안서 다운로드 로직
    const link = document.createElement('a')
    link.href = '/proposal/hwaseong-ai-childcare-proposal.pdf'
    link.download = '화성시_AI_육아생태계_정책제안서.pdf'
    link.click()
  }

  const handleContactForm = () => {
    // 연락처 폼으로 이동
    window.open('https://naver.me/5L7gyXlX', '_blank')
  }

  const testimonials = [
    {
      name: '김민주',
      role: '화성시 거주 워킹맘',
      content: '24시간 AI 상담이 정말 필요했어요. 특히 밤늦은 시간에 육아 고민이 생겼을 때...',
      rating: 5
    },
    {
      name: '이준호',
      role: '화성시의회 의원',
      content: '데이터 기반의 체계적인 접근이 인상적입니다. 실현 가능성이 매우 높아 보여요.',
      rating: 5
    },
    {
      name: '박소영',
      role: '육아정책연구소',
      content: '전국 최초 모델로서 타 지자체 확산 가능성이 충분합니다.',
      rating: 5
    }
  ]

  return (
    <section className="section bg-gradient-to-br from-primary-50 via-white to-success-50 relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8 mb-16"
        >
          <h2 className="text-display font-display font-bold text-gray-900">
            <span className="text-gradient">화성시의 미래</span>를 함께 만들어가세요
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            혁신적인 AI 육아 생태계로 저출생 문제를 해결하고, 
            전국 모델이 될 화성시의 도전에 동참해주세요.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: CTA 카드들 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* 제안서 다운로드 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-glow cursor-pointer"
              onClick={handleDownload}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex-center">
                  <Download className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">완전한 정책 제안서 다운로드</h3>
                  <p className="text-primary-100">
                    상세한 분석 자료와 구현 계획이 담긴 
                    전체 제안서를 확인해보세요.
                  </p>
                </div>
                <ExternalLink className="w-6 h-6 text-primary-200" />
              </div>
            </motion.div>

            {/* 공모전 참여 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card bg-gradient-to-r from-success-500 to-success-600 text-white hover:shadow-glow cursor-pointer"
              onClick={handleContactForm}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex-center">
                  <Heart className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">공모전 투표 참여하기</h3>
                  <p className="text-success-100">
                    화성시 정책광장에서 시민 투표에 
                    참여하여 지지를 표해주세요.
                  </p>
                </div>
                <ExternalLink className="w-6 h-6 text-success-200" />
              </div>
            </motion.div>

            {/* 연락처 정보 */}
            <div className="card bg-white border-2 border-primary-200">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex-center mx-auto">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">문의사항이 있으신가요?</h3>
                  <p className="text-gray-600 mb-4">
                    정책 제안에 대한 자세한 내용이나 협력 방안에 대해 
                    언제든 연락주세요.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p><strong>제안자:</strong> 박용환 (크리에이티브 넥서스)</p>
                    <p><strong>이메일:</strong> sanoramyun8@gmail.com</p>
                    <p><strong>연락처:</strong> 010-7939-3123</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 오른쪽: 사용자 의견 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h3 className="text-heading font-bold text-gray-900 mb-4">
                시민들의 반응
              </h3>
              <p className="text-gray-600">
                화성시민과 전문가들이 보내는 뜨거운 관심
              </p>
            </div>

            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:shadow-card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-success-400 rounded-full flex-center text-white font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <span className="text-sm text-gray-500">({testimonial.role})</span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 통계 요약 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-r from-warm-50 to-orange-50 border-2 border-warm-200"
            >
              <div className="text-center">
                <h4 className="font-bold text-gray-900 mb-4">예상 효과 요약</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-gradient-warm">2,945%</div>
                    <div className="text-gray-600">투자 수익률</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient-warm">108억원</div>
                    <div className="text-gray-600">연간 경제효과</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient-warm">1.1명</div>
                    <div className="text-gray-600">목표 출생률</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient-warm">10개</div>
                    <div className="text-gray-600">확산 지자체</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 하단 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-200"
        >
          <h3 className="text-subheading font-bold text-gray-900 mb-4">
            함께 만드는 <span className="text-gradient">미래 육아의 허브</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            화성시가 대한민국 저출생 문제 해결의 선도 도시가 될 수 있도록, 
            여러분의 관심과 지지가 필요합니다. 
            혁신적인 변화는 시민 여러분과 함께할 때 가능합니다.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
