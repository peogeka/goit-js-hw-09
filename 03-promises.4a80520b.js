document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();let t=new FormData(e.target),o=parseInt(t.get("delay")),n=parseInt(t.get("step")),i=parseInt(t.get("amount"));for(let e=1;e<=i;e++){let t=o+(e-1)*n;(function(e,t){return new Promise((o,n)=>{let i=Math.random()>.3;setTimeout(()=>{i?o({position:e,delay:t}):n({position:e,delay:t})},t)})})(e,t).then(({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)}).catch(({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})}});
//# sourceMappingURL=03-promises.4a80520b.js.map
