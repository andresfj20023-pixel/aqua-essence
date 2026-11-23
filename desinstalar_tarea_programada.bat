@echo off
chcp 65001 > nul
echo ========================================================
echo   DESINSTALADOR DE TAREA PROGRAMADA - AQUA ESSENCE
echo ========================================================
echo.
powershell -ExecutionPolicy Bypass -File "%~dp0desinstalar_tarea.ps1"
echo.
echo Presiona cualquier tecla para salir...
pause > nul
