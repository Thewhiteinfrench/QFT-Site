const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach((item) => observer.observe(item));

document.querySelectorAll('[data-target="qualityos"]').forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById('qualityos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const lightboxTitle = document.querySelector('.lightbox strong');
const closeBtn = document.querySelector('.lightbox-close');

document.querySelectorAll('.device-wall .phone-frame').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.device-wall .phone-frame').forEach((item) => item.classList.remove('selected'));
    button.classList.add('selected');
    lightboxImg.src = button.dataset.image;
    lightboxTitle.textContent = button.dataset.title || 'QualityOS Pro';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
}
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});
