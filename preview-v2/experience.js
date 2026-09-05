(()=>{
 const start=()=>{
  document.body.classList.add('atlas-experience');
  const reveal=[
   ['.planner .section-head','left'],['.task-list','left'],['.strategy-map','up'],['.task-result','right'],
   ['.case-copy','left'],['.case-visual','right']
  ];
  reveal.forEach(([sel,dir])=>document.querySelectorAll(sel).forEach(el=>el.dataset.atlasReveal=dir));
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('atlas-visible');io.unobserve(e.target)}}),{threshold:.14,rootMargin:'0px 0px -7% 0px'});
  document.querySelectorAll('[data-atlas-reveal]').forEach(el=>io.observe(el));
  const hero=document.querySelector('.hero');
  const heroCity=document.querySelector('.hero-city');
  if(hero&&heroCity){
   hero.addEventListener('pointermove',e=>{
    if(innerWidth<800)return;
    const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    heroCity.style.setProperty('--hero-x',`${x*-10}px`);heroCity.style.setProperty('--hero-y',`${y*-6}px`);
   },{passive:true});
   hero.addEventListener('pointerleave',()=>{heroCity.style.setProperty('--hero-x','0px');heroCity.style.setProperty('--hero-y','0px')});
  }
  let ticking=false;
  const update=()=>{
   const map=document.querySelector('.strategy-map');
   const stage=document.querySelector('.artifact-stage');
   if(map){const r=map.getBoundingClientRect();const p=(innerHeight-r.top)/(innerHeight+r.height);map.style.setProperty('--map-y',`${(p-.5)*-34}px`)}
   if(stage){const r=stage.getBoundingClientRect();const p=(innerHeight-r.top)/(innerHeight+r.height);stage.style.setProperty('--case-y',`${(p-.5)*22}px`)}
   ticking=false;
  };
  addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true}},{passive:true});update();
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();