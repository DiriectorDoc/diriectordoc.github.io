document.addEventListener("DOMContentLoaded",function(){(window.isIE=!!document.documentMode)&&console.warn("IE detected. IE is dead. Get a better browser. I don't care what it is. Don't like Chrome? Use FireFox. Or Opera. Heck, use Edge for all I care. Just stop frickin' using IE!");let e,t=document.createElementNS("http://www.w3.org/2000/svg","svg"),n=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("viewBox","0 0 16 16"),n.setAttribute("d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"),t.appendChild(n),document.getElementsByClassName("github")[0].appendChild(t);for(let t of document.getElementsByTagName("link"))if(e="icon"==t.getAttribute("rel"))break;e||(document.getElementsByTagName("head")[0].appendChild(e=document.createElement("link")),e.setAttribute("rel","icon"),function t(n,o,i){let r=new Image;r.onload=function(){e.setAttribute("type","image/"+n.split(".").pop()),e.setAttribute("href",n)},r.onerror=function(){o&&t(o,i)},r.src=n}("icon/icon.ico","icon/icon.png","../icon/icon.ico")),(e=document.getElementsByClassName("footer")[0])&&(e.innerHTML='This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="../by-sa.png" /></a>')});