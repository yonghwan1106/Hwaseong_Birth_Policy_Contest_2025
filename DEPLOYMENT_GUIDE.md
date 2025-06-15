# 화성시 AI 육아 생태계 웹사이트 배포 가이드

## 🚀 Vercel을 이용한 배포 (권장)

### 1단계: Vercel 계정 생성
1. [Vercel 웹사이트](https://vercel.com) 접속
2. "Sign Up" 클릭
3. "Continue with GitHub" 선택하여 GitHub 계정으로 가입
4. 필요한 권한 승인

### 2단계: 프로젝트 배포
1. Vercel 대시보드에서 "New Project" 클릭
2. GitHub 저장소 목록에서 해당 프로젝트 선택
3. "Import" 클릭
4. 다음 설정 확인:
   - **Framework Preset**: Next.js (자동 감지됨)
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build` (자동 설정됨)
   - **Output Directory**: `.next` (자동 설정됨)
5. "Deploy" 클릭

### 3단계: 배포 완료
- 약 2-3분 후 배포 완료
- `https://프로젝트명.vercel.app` 형태의 URL 제공
- 커스텀 도메인 연결 가능 (선택사항)

## 📋 배포 전 체크리스트

### 필수 파일 확인
- [x] `package.json` - 의존성 및 스크립트 정의
- [x] `next.config.js` - Next.js 설정
- [x] `.gitignore` - 불필요한 파일 제외
- [x] `public/` 폴더 - 정적 자산들

### 환경 변수 설정 (필요시)
```bash
# .env.local 파일 예시
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### 빌드 테스트
```bash
# 로컬에서 프로덕션 빌드 테스트
npm run build
npm run start
```

## 🔧 대안 배포 방법들

### Option 1: Netlify
1. [Netlify](https://netlify.com) 계정 생성
2. "New site from Git" 선택
3. GitHub 저장소 연결
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

### Option 2: GitHub Pages (정적 배포)
> 주의: 서버 기능이 제한될 수 있음

1. `next.config.js` 수정:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

2. GitHub Actions 워크플로우 설정:
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 🌐 커스텀 도메인 연결 (선택사항)

### Vercel에서 커스텀 도메인 설정
1. Vercel 프로젝트 설정 → Domains
2. 원하는 도메인 입력 (예: hwaseong-ai-care.com)
3. DNS 설정 안내에 따라 도메인 제공업체에서 설정
4. SSL 인증서 자동 발급

## 🔍 배포 후 확인사항

### 성능 체크
- [x] 페이지 로딩 속도 확인
- [x] 모바일 반응형 테스트
- [x] 모든 페이지 링크 동작 확인
- [x] 차트 및 인터랙티브 요소 작동 확인

### SEO 최적화
- [x] 메타 태그 설정 확인
- [x] Open Graph 이미지 설정
- [x] 구조화된 데이터 마크업
- [x] sitemap.xml 생성

### 분석 도구 연결
- Google Analytics 설정
- Search Console 등록
- 성능 모니터링 도구 연결

## 🚨 트러블슈팅

### 빌드 오류 해결
```bash
# 캐시 클리어
rm -rf .next
npm install
npm run build

# 의존성 재설치
rm -rf node_modules package-lock.json
npm install
```

### 배포 후 404 오류
- `next.config.js`에서 `trailingSlash: true` 설정
- 동적 라우팅 확인
- 정적 생성 설정 확인

### 환경 변수 문제
- 환경 변수명이 `NEXT_PUBLIC_`로 시작하는지 확인
- Vercel/Netlify 대시보드에서 환경 변수 설정
- 민감한 정보는 서버 사이드 환경 변수 사용

## 📞 지원

배포 과정에서 문제가 발생하면:
1. 빌드 로그 확인
2. Vercel/Netlify 공식 문서 참조
3. GitHub Issues 확인
4. 커뮤니티 포럼 활용

---

**배포 완료 예상 시간**: 5-10분
**권장 플랫폼**: Vercel (무료, 자동 배포, Next.js 최적화)
**백업 플랫폼**: Netlify
