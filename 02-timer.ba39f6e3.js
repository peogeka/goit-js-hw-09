!function(){function e(e){return String(e).padStart(2,"0")}function t(t,n,o,a){let d=document.querySelector("[data-days]"),r=document.querySelector("[data-hours]"),l=document.querySelector("[data-minutes]"),u=document.querySelector("[data-seconds]");d.textContent=e(t),r.textContent=e(n),l.textContent=e(o),u.textContent=e(a)}document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector("[data-start]"),n=document.getElementById("datetime-picker"),o=null,a={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function([t]){let n=t[0];n<=Date.now()?(window.alert("Please choose a date in the future"),e.disabled=!0):e.disabled=!1}};flatpickr("#datetime-picker",a),e.addEventListener("click",function(){let a=new Date(n.value),d=Date.now();a<=d||(o=setInterval(function(){let n=a-new Date;if(n<=0)clearInterval(o),t(0,0,0,0),e.disabled=!0;else{let{days:e,hours:o,minutes:a,seconds:d}=function(e){let t=864e5;return{days:Math.floor(e/t),hours:Math.floor(e%t/36e5),minutes:Math.floor(e%t%36e5/6e4),seconds:Math.floor(e%t%36e5%6e4/1e3)}}(n);t(e,o,a,d)}},1e3))})})}();
//# sourceMappingURL=02-timer.ba39f6e3.js.map
