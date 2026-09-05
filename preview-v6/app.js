(()=>{
 const panels={idea:{title:'ЗАПУСТИТЬ ИДЕЮ',text:'Разберём, кому и зачем нужен будущий продукт — до того, как начнём тратить деньги на его оформление.',items:['Изучим рынок и конкурентов','Проведём интервью и уточним задачу','Предложим 2–3 стратегии запуска']},repack:{title:'ПЕРЕУПАКОВАТЬ ПРОДУКТ',text:'Найдём, почему ценность продукта считывается слабее, чем она есть на самом деле, и соберём более точную подачу.',items:['Разберём текущую коммуникацию','Определим сильные стороны и провалы','Соберём новую структуру предложения']},site:{title:'СОЗДАТЬ САЙТ',text:'Начнём не с экранов, а со смысла, сценария и роли сайта в продукте — чтобы он работал, а не просто существовал.',items:['Определим задачу и путь пользователя','Соберём структуру и тексты','Запустим рабочую версию']},difference:{title:'НАЙТИ ОТЛИЧИЕ',text:'Поймём, за счёт чего продукт может быть заметнее и убедительнее среди похожих предложений.',items:['Изучим конкурентное поле','Найдём реальные точки отличия','Переведём их в понятную коммуникацию']}};
 const panel=document.getElementById('taskPanel');
 document.querySelectorAll('.task-list button').forEach(btn=>btn.addEventListener('click',()=>{
   document.querySelectorAll('.task-list button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
   const d=panels[btn.dataset.task];panel.animate([{opacity:.4,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:280,easing:'ease-out'});
   panel.querySelector('h3').textContent=d.title;panel.querySelector(':scope > p').textContent=d.text;panel.querySelector('ul').innerHTML=d.items.map(x=>`<li>${x}</li>`).join('');
 }));
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
 const path=document.getElementById('routePath');const len=path.getTotalLength();path.style.strokeDasharray=len;path.style.strokeDashoffset=len;
 let ticking=false;function update(){
   document.querySelectorAll('[data-parallax]').forEach(el=>{const s=+el.dataset.parallax||0;const r=el.getBoundingClientRect();const c=(r.top+r.height/2)-(innerHeight/2);el.style.transform=`translate3d(0,${c*-s}px,0)`});
   const m=document.querySelector('.method').getBoundingClientRect();const p=Math.max(0,Math.min(1,(innerHeight-m.top)/(innerHeight+m.height*.55)));path.style.strokeDashoffset=len*(1-p);
   ticking=false;
 }
 addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true}},{passive:true});addEventListener('resize',update,{passive:true});update();
})();