# 화성시 AI 육아 생태계 정책 제안 웹사이트

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO_NAME)

## 🚀 프로젝트 개요

화성시 저출생 극복 정책 제안 공모전을 위한 인터랙티브 웹사이트입니다.

- **목적**: 제안서 지면의 한계를 넘어서는 완전한 정책 제안 전달
- **타겟**: 화성시 공모전 심사위원 및 시민
- **특징**: AI 체험, 데이터 시각화, ROI 시뮬레이터 등 인터랙티브 요소

## 🎯 핵심 기능

- 📊 실시간 데이터 시각화 (네이버 트렌드 기반)
- 🤖 AI 육아 상담 시스템 체험
- 💰 ROI 시뮬레이터 (투자 수익률 계산)
- 📱 모바일 앱 프로토타입 데모
- 🎮 정책 효과 시뮬레이션

## 🛠️ 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Charts**: Chart.js, D3.js
- **3D**: Three.js, React Three Fiber
- **Deployment**: Vercel

## 🚀 로컬 개발 환경 설정

```bash
# 1. 저장소 클론
git clone [YOUR_REPO_URL]
cd hwaseong-ai-childcare-website

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev

# 4. 브라우저에서 확인
# http://localhost:3000
```

## 📦 빌드 및 배포

### 로컬 빌드 테스트
```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

### Vercel 배포 (권장)
1. [Vercel](https://vercel.com)에서 계정 생성
2. GitHub 저장소 연결
3. 자동 배포 완료

### 기타 배포 옵션
- Netlify
- AWS Amplify  
- GitHub Pages (정적 배포)

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 홈페이지
│   ├── data-analysis/     # 데이터 분석 페이지
│   ├── ai-ecosystem/      # AI 생태계 페이지
│   ├── execution-plan/    # 실행 계획 페이지
│   ├── expected-impact/   # 기대 효과 페이지
│   └── experience/        # 체험하기 페이지
├── components/            # 재사용 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   ├── sections/         # 섹션 컴포넌트
│   ├── charts/           # 차트 컴포넌트
│   └── interactive/      # 인터랙티브 컴포넌트
├── data/                 # 정적 데이터
├── lib/                  # 유틸리티 함수
├── styles/               # 스타일 파일
└── types/                # TypeScript 타입 정의
```

## 🎨 디자인 시스템

- **컬러**: 화성시 브랜드 컬러 + AI 테마
- **타이포그래피**: Pretendard 폰트
- **애니메이션**: Framer Motion 기반 마이크로 인터랙션
- **반응형**: 모바일 퍼스트 디자인

## 📊 주요 성과 지표

- **Lighthouse Score**: 95+ (목표)
- **First Contentful Paint**: < 1.5초
- **Time to Interactive**: < 3초
- **Core Web Vitals**: 모든 지표 통과

## 🔧 개발 도구

- **Code Quality**: ESLint + Prettier
- **Pre-commit**: Husky + lint-staged
- **Testing**: Jest + Testing Library (예정)
- **CI/CD**: GitHub Actions

## 📝 라이선스

이 프로젝트는 화성시 저출생 극복 정책 제안 공모전을 위해 제작되었습니다.

## 👨‍💻 개발자

**박용환** (크리에이티브 넥서스)
- Email: sanoramyun8@gmail.com
- Tel: 010-7939-3123

## 🏆 공모전 정보

- **공모명**: 2025년 화성특례시 저출생 극복 정책 제안 공모전
- **주최**: 화성특례시
- **분야**: 돌봄·양육 환경 개선
- **제출기한**: 2025년 7월 6일 23:00

---

**Live Demo**: [https://hwaseong-ai-childcare.vercel.app](https://hwaseong-ai-childcare.vercel.app)

**배포 상태**: [![Vercel](https://vercelbadges.vercel.app/hwaseong-ai-childcare)](https://hwaseong-ai-childcare.vercel.app)
