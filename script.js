const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  document.body.classList.toggle('menu-open', open);
});

document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); document.body.classList.remove('menu-open'); toggle.setAttribute('aria-expanded', 'false');
}));

const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('nav a');
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  }
}), { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => observer.observe(section));

const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
}), { threshold: .12 });
reveals.forEach(item => revealObserver.observe(item));
