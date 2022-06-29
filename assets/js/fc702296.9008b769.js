"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1027],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8240:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={},p="Local Web Interface",c={unversionedId:"developer/Local_Web_Interface",id:"developer/Local_Web_Interface",title:"Local Web Interface",description:"This document describes the implementation of the local administrative web",source:"@site/../docs/developer/Local_Web_Interface.md",sourceDirName:"developer",slug:"/developer/Local_Web_Interface",permalink:"/docs/developer/Local_Web_Interface",editUrl:"https://github.com/terragraph/meta-terragraph/edit/main/docs/../docs/developer/Local_Web_Interface.md",tags:[],version:"current",frontMatter:{},sidebar:"developerManualSidebar",previous:{title:"API Service",permalink:"/docs/developer/API_Service"},next:{title:"LED Agent",permalink:"/docs/developer/LED_Agent"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Web Server",id:"web-server",level:2},{value:"UI",id:"ui",level:2},{value:"Resources",id:"resources",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"local-web-interface"},"Local Web Interface"),(0,i.kt)("p",null,"This document describes the implementation of the local administrative web\ninterface."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Terragraph provides a proof-of-concept web portal that is accessible over Wi-Fi,\nwith the primary purpose of enabling easy initial setup. This currently supports\nstatus monitoring, configuration editing, assoc/dissoc actions, topology scans,\nand more."),(0,i.kt)("p",null,"The web portal is disabled by default. To access the web portal, the following\nsteps are required:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enable the web server in node config (",(0,i.kt)("inlineCode",{parentName:"li"},"envParams.WEBUI_ENABLED"),")."),(0,i.kt)("li",{parentName:"ol"},"Connect to the ESP32 Wi-Fi network (PSK: ",(0,i.kt)("inlineCode",{parentName:"li"},"facebook"),")."),(0,i.kt)("li",{parentName:"ol"},"Visit ",(0,i.kt)("inlineCode",{parentName:"li"},"192.168.5.1")," in a web browser.")),(0,i.kt)("p",null,"There are two components involved: a web server (",(0,i.kt)("inlineCode",{parentName:"p"},"webui"),") and UI (",(0,i.kt)("inlineCode",{parentName:"p"},"tg95"),"), both\ndescribed in sections below. For more details on the Wi-Fi architecture, refer\nto ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer/WiFi"},"Wi-Fi"),"."),(0,i.kt)("h2",{id:"web-server"},"Web Server"),(0,i.kt)("p",null,"The local HTTP server (",(0,i.kt)("inlineCode",{parentName:"p"},"webui"),") is written in C++ using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/uNetworking/uWebSockets"},"\xb5WebSockets"),", chosen\nfor its small footprint. The server contains three types of endpoints:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"REST APIs for management"),(0,i.kt)("li",{parentName:"ol"},"Websocket endpoints for streaming stats"),(0,i.kt)("li",{parentName:"ol"},"Static file serving for the UI (",(0,i.kt)("inlineCode",{parentName:"li"},"tg95"),")")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"webui")," is installed via ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes-utils/webui/webui_0.1.bb"),". Sources are located\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes-utils/webui/files/src/webui/"),", with routes defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"WebUI.cpp"),"\nand implemented in ",(0,i.kt)("inlineCode",{parentName:"p"},"WebRoute.cpp"),"."),(0,i.kt)("h2",{id:"ui"},"UI"),(0,i.kt)("p",null,'The experimental "Terragraph95" UI (',(0,i.kt)("inlineCode",{parentName:"p"},"tg95"),") is written in ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," and\nbootstrapped with ",(0,i.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),". To accommodate slow UART speeds, bundle\nsize is reduced by substituting React with ",(0,i.kt)("a",{parentName:"p",href:"https://preactjs.com/"},"Preact"),", code splitting, etc."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tg95")," is installed via ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes-utils/webui/tg95_0.1.bb"),". Sources are located\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"src/tg95/"),". An optimized build is checked in to ",(0,i.kt)("inlineCode",{parentName:"p"},"src/tg95/build/"),", which\ngets installed to ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/webui/tg95.tar.gz")," and is extracted by ",(0,i.kt)("inlineCode",{parentName:"p"},"webui")," in its\n",(0,i.kt)("inlineCode",{parentName:"p"},"sv")," startup script."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/uNetworking/uWebSockets"},"\xb5WebSockets")," - C/C++ web server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React")," - Meta's JavaScript UI library"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://create-react-app.dev/"},"Create React App")," - Meta's React app toolchain"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://preactjs.com/"},"Preact")," - Small, API-compatible React alternative")))}m.isMDXComponent=!0}}]);