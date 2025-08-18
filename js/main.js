// Year already inline; theme & interactions here.
const root=document.documentElement;
const toggle=document.getElementById('themeToggle');
const saved=localStorage.getItem('theme');
if(saved) root.setAttribute('data-theme', saved);
toggle.addEventListener('click', ()=>{
  const next=root.getAttribute('data-theme')==='light'?'': 'light';
  if(next) root.setAttribute('data-theme', next); else root.removeAttribute('data-theme');
  localStorage.setItem('theme', next||'');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Simple modal
document.querySelectorAll('.card-link[data-modal]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id=a.dataset.modal;
    const m=document.getElementById(id);
    if(m) m.setAttribute('aria-hidden','false');
  });
});
document.querySelectorAll('.modal').forEach(m=>{
  m.addEventListener('click', e=>{
    if(e.target.hasAttribute('data-close') || e.target.classList.contains('modal')){
      m.setAttribute('aria-hidden','true');
    }
  });
});

// Count-up stats
const counters=document.querySelectorAll('[data-count]');
const io=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el=entry.target;
      const max=+el.dataset.count;
      let n=0; const step=Math.max(1, Math.round(max/60));
      const tick=()=>{ n+=step; if(n>=max){ el.textContent=max; } else { el.textContent=n; requestAnimationFrame(tick);} };
      tick(); io.unobserve(el);
    }
  });
},{threshold:0.6});
counters.forEach(el=>io.observe(el));
