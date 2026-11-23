@echo off
chcp 65001 > nul
echo ========================================================
echo   AQUA ESSENCE - SINCRONIZADOR DE PRECIOS ORIGINALES
echo   Validando Disfragancias & Disperfumes
echo   Regla: Menor precio base de proveedores + $60.000 COP
echo ========================================================
echo.
python sync_originales.py
echo.
echo Presiona cualquier tecla para cerrar esta ventana...
pause > nul

