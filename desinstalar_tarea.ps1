$taskName = "AquaEssence_Sync_3H"
Write-Host "Eliminando Tarea Programada '$taskName'..." -ForegroundColor Yellow
Unregister-ScheduledTask -TaskName $taskName -Confirm:$false -ErrorAction SilentlyContinue
Write-Host "Tarea eliminada." -ForegroundColor Green
