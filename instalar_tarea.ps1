$taskName = "AquaEssence_Sync_3H"
$workDir = "C:\Users\Andres\Downloads\Aqua Essence"
$vbsPath = "$workDir\ejecutar_silencioso.vbs"

Write-Host "Configurando Tarea Programada para Aqua Essence (cada 3 horas)..." -ForegroundColor Cyan

# Definir Acción
$action = New-ScheduledTaskAction -Execute "wscript.exe" -Argument "`"$vbsPath`"" -WorkingDirectory $workDir

# Definir Disparador: Repetir cada 3 horas indefinidamente
$trigger = New-ScheduledTaskTrigger -Once -At (Get-Date).AddMinutes(1) -RepetitionInterval (New-TimeSpan -Hours 3)

# Configuraciones adicionales (ejecutar aunque no esté conectado a la corriente si es laptop)
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable

# Registrar la tarea
Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Settings $settings -Description "Sincroniza precios de perfumes originales Aqua Essence comparando proveedores cada 3 horas" -Force

Write-Host "¡Tarea programada '$taskName' registrada con éxito!" -ForegroundColor Green
Write-Host "Se ejecutará automáticamente cada 3 horas en segundo plano sin interrumpir." -ForegroundColor Green
