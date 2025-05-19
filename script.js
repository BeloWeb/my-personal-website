// Gestion du menu hamburger
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Fermeture du menu quand on clique sur un lien (mobile)
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
});

// Gestion du formulaire de contact
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Récupérer les valeurs
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Validation simple
  if (!name || !email || !message) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Veuillez remplir tous les champs.';
    return;
  }

  // Simuler envoi
  formMessage.style.color = '#00509e';
  formMessage.textContent = 'Envoi en cours...';

  // Simuler délai d'envoi
  setTimeout(() => {
    formMessage.textContent = `Merci, ${name}, votre message a bien été envoyé. Nous vous répondrons bientôt.`;
    form.reset();
  }, 1500);
});
