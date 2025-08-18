// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Modals
document.querySelectorAll('.card-link[data-modal]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const m=document.getElementById(a.dataset.modal);
    if(m) m.setAttribute('aria-hidden','false');
  });
});
document.querySelectorAll('.modal').forEach(m=>{
  m.addEventListener('click', e=>{
    if(e.target.hasAttribute('data-close') || e.target.classList.contains('modal') || e.target.classList.contains('backdrop')){
      m.setAttribute('aria-hidden','true');
    }
  });
});

// Footer year
document.getElementById('year')?.textContent = new Date().getFullYear();
