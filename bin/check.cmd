@echo off
rem Windows entry point for bin/check. It runs the same shell script, using the
rem sh that comes with Git for Windows, so there is one check on every system.
setlocal
cd /d "%~dp0.."
where sh >nul 2>&1
if errorlevel 1 goto viagit
sh bin/check %*
exit /b %errorlevel%

:viagit
where git >nul 2>&1
if errorlevel 1 goto nogit
git -c "alias.run-check=!sh bin/check" run-check %*
exit /b %errorlevel%

:nogit
echo bin\check needs Git for Windows. Install it from https://git-scm.com/download/win
exit /b 1
