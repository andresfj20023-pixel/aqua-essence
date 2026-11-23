@echo off
chcp 65001 >nul
echo ====================================================
echo   SUBIENDO AQUA ESSENCE A TU GITHUB
echo ====================================================
echo.

git remote remove origin >nul 2>&1
git remote add origin https://github.com/andresfj20023-pixel/aqua-essence.git
git branch -M main

echo Subiendo archivos y carpetas a GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ====================================================
    echo   [OK] ¡SUBIDO CON ÉXITO A GITHUB!
    echo ====================================================
    echo Tu repositorio está listo en:
    echo https://github.com/andresfj20023-pixel/aqua-essence
    echo.
    echo Ahora solo debes entrar a:
    echo https://vercel.com/new
    echo y hacer clic en "Import" junto a aqua-essence.
) else (
    echo.
    echo [AVISO] Si te pidió autorización en el navegador, completa el inicio de sesión.
)

pause
