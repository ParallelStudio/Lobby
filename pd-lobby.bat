@echo off

set PATH=%APPDATA%\npm;%~dp0;%PATH%
cd C:\Program Files (x86)\pd
rem pd-extended.bat C:\Users\Administrator\Lobby\pd\master.pd

bin\pd.exe -nosleep -font-face "Lucida Console" -lib Gem -lib cyclone -lib zexy -lib creb -lib cxc -lib iemlib -lib list-abs -lib mapping -lib markex -lib maxlib -lib mjlib -lib motex -lib oscx -lib pddp -lib pdogg -lib pmpd -lib sigpack -lib smlib -lib unauthorized -lib pan -lib hcs -lib jmmmp -lib ext13 -lib ggee -lib iem_anything -lib ekext -lib flatgui -lib chaos -lib zexy/0x260x260x7e -lib zexy/0x2e -lib zexy/0x3c0x7e -lib zexy/0x3d0x3d0x7e -lib zexy/0x3e0x7e -lib zexy/0x7c0x7c0x7e C:\Users\Administrator\Lobby\pd\master.pd

