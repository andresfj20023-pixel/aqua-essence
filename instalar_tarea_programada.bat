@echo off
chcp 65001 > nul
echo ========================================================
echo   INSTALADOR DE SINCRONIZACION CADA 3 HORAS - AQUA ESSENCE
echo ========================================================
echo.
powershell -ExecutionPolicy Bypass -File "%~dp0instalar_tarea.ps1"
echo.
echo Presiona cualquier tecla para salir...
pause > nul
