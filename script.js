const $=s=>document.querySelector(s);
const toast=$('#toast');let toastTimer;
function notify(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2800)}
$('#menu').addEventListener('click',()=>$('#nav').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>$('#nav').classList.remove('open')));
$('#theme').addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('sport-light',document.body.classList.contains('light')?'1':'0')});
if(localStorage.getItem('sport-light')==='1')document.body.classList.add('light');
document.querySelectorAll('[data-detail]').forEach(b=>b.addEventListener('click',()=>notify(b.dataset.detail+' — bo‘limi tanlandi.')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
$('#contactForm').addEventListener('submit',e=>{e.preventDefault();const name=new FormData(e.target).get('name');$('#status').textContent=`Rahmat, ${name}! Demo xabaringiz qabul qilindi.`;e.target.reset();});
const quick=$('#quickAction');if(quick)quick.addEventListener('click',()=>notify('So‘rov tafsilotlari tanlandi. Bu demo forma.'));
$('#year').textContent=new Date().getFullYear();
