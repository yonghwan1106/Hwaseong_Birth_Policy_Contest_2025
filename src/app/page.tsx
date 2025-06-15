'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import AppDemo from '@/components/sections/AppDemo'
import Partnership from '@/components/sections/Partnership'
import RoadmapSection from '@/components/sections/RoadmapSection'
import ImpactSection from '@/components/sections/ImpactSection'
import CTASection from '@/components/sections/CTASection'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {/* 네비게이션 */}
      <Navigation />

      {/* 메인 콘텐츠 */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* 핵심 지표 대시보드 */}
        <StatsSection />

        {/* 5대 핵심 구성요소 */}
        <FeaturesSection />

        {/* 앱 데모 */}
        <AppDemo />

        {/* 파트너십 생태계 */}
        <Partnership />

        {/* 실행 로드맵 */}
        <RoadmapSection />

        {/* 기대 효과 */}
        <ImpactSection />

        {/* CTA */}
        <CTASection />
      </main>

      {/* 푸터 */}
      <Footer />
    </motion.div>
  )
}
