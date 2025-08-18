// Theme toggle persistence
const root=document.documentElement;
const btn=document.getElementById('themeToggle');
const saved=localStorage.getItem('theme');
if(saved) root.setAttribute('data-theme', saved);
btn.addEventListener('click', ()=>{
  const next=root.getAttribute('data-theme')==='light'?'': 'light';
  if(next) root.setAttribute('data-theme', next); else root.removeAttribute('data-theme');
  localStorage.setItem('theme', next||'');
});

// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  });
});

// Simple modal system
document.querySelectorAll('.card-link[data-modal]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const m=document.getElementById(a.dataset.modal);
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

// Footer year
document.getElementById('year')?.textContent = new Date().getFullYear();
