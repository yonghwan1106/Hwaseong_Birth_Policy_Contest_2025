import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '화성 AI 육아 생태계 | 미래 육아의 허브, 화성시',
  description: '전국 최초 지자체 주도 AI 기반 통합 육아 지원 플랫폼으로 저출생 문제를 해결하는 혁신적 정책 제안',
  keywords: [
    '화성시', 'AI 육아', '저출생 대책', '육아 지원', '스마트 돌봄',
    '출산 정책', '혁신 정책', '디지털 헬스케어', '화성특례시'
  ],
  authors: [{ name: '박용환' }],
  creator: '크리에이티브 넥서스',
  publisher: '화성시 저출생 극복 정책 제안팀',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: '화성 AI 육아 생태계 | 미래 육아의 허브, 화성시',
    description: '전국 최초 지자체 주도 AI 기반 통합 육아 지원 플랫폼으로 저출생 문제를 해결하는 혁신적 정책 제안',
    siteName: '화성 AI 육아 생태계',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '화성 AI 육아 생태계 - 미래 육아의 허브',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '화성 AI 육아 생태계 | 미래 육아의 허브, 화성시',
    description: '전국 최초 지자체 주도 AI 기반 통합 육아 지원 플랫폼',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      'naver-site-verification': 'naver-verification-code',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-korean antialiased bg-gray-50 text-gray-900">
        <div id="scroll-progress" className="scroll-indicator" />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // 스크롤 진행 표시기
              window.addEventListener('scroll', () => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                document.getElementById('scroll-progress').style.transform = \`scaleX(\${scrolled / 100})\`;
              });
              
              // 스크롤 애니메이션
              const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              };
              
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                  }
                });
              }, observerOptions);
              
              document.addEventListener('DOMContentLoaded', () => {
                document.querySelectorAll('.animate-on-scroll').forEach(el => {
                  observer.observe(el);
                });
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
