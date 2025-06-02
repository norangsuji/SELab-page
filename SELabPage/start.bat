@echo off
REM === Step 1: 프로젝트 빌드 ===
cd /d C:\Users\Administrator\SELab-page\SELabpage
call npm run build

REM === Step 2: Nginx 디렉터리로 이동 및 실행 ===
cd /d C:\Users\Administrator\Downloads\nginx-1.28.0\nginx-1.28.0

REM 이미 실행 중이면 충돌 방지를 위해 종료
taskkill /f /im nginx.exe >nul 2>&1

REM Nginx 시작
start nginx.exe

REM === Step 3: 브라우저 열기 ===
start https://selab.uos.ac.kr

exit