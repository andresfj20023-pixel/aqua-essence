@echo off
chcp 65001 >nul
echo ====================================================
echo   CONFIGURACIÓN Y SUBIDA DE AQUA ESSENCE A GITHUB
echo ====================================================
echo.

:: Verificar si git está instalado
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git no está instalado en este equipo.
    echo Por favor descarga e instala Git desde: https://git-scm.com/
    pause
    exit /b
)

:: Inicializar git si no existe
if not exist ".git" (
    echo Inicializando repositorio Git...
    git init
    git branch -M main
)

:: Agregar archivos
echo Agregando archivos del proyecto...
git add .

:: Commit
git commit -m "feat: versión completa de Aqua Essence lista para Vercel"

echo.
echo ====================================================
echo   PASO FINAL PARA CONECTARLO A TU GITHUB:
echo ====================================================
echo.
echo 1. Entra a https://github.com/new y crea un repositorio (ejemplo: aqua-essence).
echo 2. Copia la URL de tu repositorio (ejemplo: https://github.com/tu-usuario/aqua-essence.git).
echo 3. Escribe o pega la URL aquí abajo y presiona ENTER:
echo.
set /p REPO_URL="URL del repositorio de GitHub: "

if not "%REPO_URL%"=="" (
    git remote remove origin >nul 2>&1
    git remote add origin %REPO_URL%
    git push -u origin main
    echo.
    echo [OK] ¡Proyecto subido exitosamente a GitHub!
    echo Ahora solo debes entrar a https://vercel.com/new e importar tu repositorio.
) else (
    echo No ingresaste ninguna URL. Puedes subirlo manualmente luego.
)

pause
