@echo off
chcp 65001 >nul
echo ================================
echo   CWFLY 文档站
echo ================================
echo.
echo [1] 启动开发服务器 (port 5174)
echo [2] 构建静态文件
echo [3] 启动生产服务器 (port 5174)
echo [4] 退出
echo.

set /p choice="请选择 (1-4): "

if "%choice%"=="1" (
    cd /d %~dp0
    npx vitepress dev docs --port 5174
)
if "%choice%"=="2" (
    cd /d %~dp0
    npx vitepress build docs
    echo 构建完成！
    pause
)
if "%choice%"=="3" (
    cd /d %~dp0
    npm run build && npm run start
)
if "%choice%"=="4" exit
