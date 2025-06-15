@echo off
echo ========================================
echo 화성시 AI 육아 생태계 웹사이트 배포 테스트
echo ========================================
echo.

echo 1. 의존성 설치 중...
call npm install
if %errorlevel% neq 0 (
    echo ❌ 의존성 설치 실패
    pause
    exit /b 1
)
echo ✅ 의존성 설치 완료
echo.

echo 2. 프로덕션 빌드 중...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ 빌드 실패 - 오류를 확인하고 수정해주세요
    pause
    exit /b 1
)
echo ✅ 빌드 성공
echo.

echo 3. 프로덕션 서버 실행 중...
echo ⏰ 브라우저에서 http://localhost:3000 으로 접속하여 확인하세요
echo ⚠️  서버를 중지하려면 Ctrl+C 를 누르세요
echo.
call npm run start
