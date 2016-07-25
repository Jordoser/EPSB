;@echo off
;Findstr -rbv ; %0 | powershell -c - 
;goto:sCode

start http://localhost:9000
harp server

;:sCode 
;echo done
;pause & goto :eof