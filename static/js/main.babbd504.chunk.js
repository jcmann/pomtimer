(this.webpackJsonppomtimer=this.webpackJsonppomtimer||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(1),r=n(3),i=n.n(r),a=(n(10),n(2)),s=function(t){var e=Object(a.a)(t.changePomSetting,2),n=(e[0],e[1]);return Object(c.jsxs)("section",{className:"pomControl",children:[Object(c.jsx)("button",{onClick:function(){return n("pomodoro")},children:"Pomodoro"}),Object(c.jsx)("button",{onClick:function(){return n("short")},children:"Short Break"}),Object(c.jsx)("button",{onClick:function(){return n("long")},children:"Long Break"})]})},u=function(t){var e=t.calculateTimeLeft;return Object(c.jsx)("div",{id:"timerDisplay",children:e()})},l=function(t){var e=Object(a.a)(t.changeCurrentStatus,2),n=e[0],r=e[1],i=Object(a.a)(t.timeLeft,2),s=(i[0],i[1]);return Object(o.useEffect)((function(){var t=document.querySelector("#toggleActiveBtn");t.classList.toggle("btnStart"),t.classList.toggle("btnStop")}),[n]),Object(c.jsxs)("div",{id:"timerControls",children:[Object(c.jsx)("button",{onClick:function(){var t=document.querySelector("#toggleActiveBtn");"stopped"===n?(r("active"),t.innerHTML="Stop"):(r("stopped"),t.innerHTML="Start")},id:"toggleActiveBtn",className:"btnStop",children:"active"===n?"Stop":"Start"}),Object(c.jsx)("button",{onClick:function(){s(t.initialTime),r("stopped")},id:"resetBtn",children:"Reset"})]})},j=function(t){var e=Object(a.a)(t.changeTimeLeft,2),n=e[0],o=e[1],r=Object(a.a)(t.pomSetting,2),i=(r[0],r[1],Object(a.a)(t.currentStatus,2)),s=i[0],j=i[1],b=t.initialTime;return Object(c.jsxs)("section",{className:"timer",children:[Object(c.jsx)(u,{calculateTimeLeft:function(){var t=Math.floor(n/60)+"",e=Math.floor(n%60)+"";return e.length<10&&(e=e.padStart(2,"0")),"".concat(t,":").concat(e)}}),Object(c.jsx)(l,{changeCurrentStatus:[s,j],timeLeft:[n,o],initialTime:b})]})},b=function(){var t=Object(o.useState)("pomodoro"),e=Object(a.a)(t,2),n=e[0],r=e[1],i=Object(o.useState)(1500),u=Object(a.a)(i,2),l=u[0],b=u[1],p=Object(o.useState)(1500),f=Object(a.a)(p,2),m=f[0],d=f[1],O=Object(o.useState)("stopped"),g=Object(a.a)(O,2),h=g[0],S=g[1];return Object(o.useEffect)((function(){"pomodoro"===n?(b(1500),d(1500),S("stopped")):"short"===n?(b(300),d(300),S("stopped")):"long"===n&&(b(900),d(900),S("stopped"))}),[n]),Object(o.useEffect)((function(){var t=null;return"active"===h&&l>0?t=setInterval((function(){b(l-1)}),1e3):clearInterval(t),function(){return clearInterval(t)}}),[h,l,n]),Object(o.useEffect)((function(){0==l&&alert("Time's up! :)")}),[l]),Object(c.jsxs)("section",{className:"App",children:[Object(c.jsx)(s,{changePomSetting:[n,r]}),Object(c.jsx)(j,{initialTime:m,changeTimeLeft:[l,b],pomSetting:[n,r],currentStatus:[h,S]})]})};i.a.render(Object(c.jsx)(b,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.babbd504.chunk.js.map