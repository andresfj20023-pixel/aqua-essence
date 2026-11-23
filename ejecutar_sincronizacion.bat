@echo off
chcp 65001 > nul
set WORKDIR=C:\Users\Andres\Downloads\Aqua Essence
cd /d "%WORKDIR%"

echo ======================================================== >> sync_log.txt
echo [%DATE% %TIME%] INICIANDO SINCRONIZACION AUTOMATICA >> sync_log.txt
echo ======================================================== >> sync_log.txt

"C:\Users\Andres\AppData\Local\Programs\Python\Python311\python.exe" sync_originales.py >> sync_log.txt 2>&1

echo [%DATE% %TIME%] FINALIZADA SINCRONIZACION CON EXITO >> sync_log.txt
echo. >> sync_log.txt
