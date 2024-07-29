const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

const scrollHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('blur-header')
                         : header.classList.remove('blur-header');
};

window.addEventListener('scroll', scrollHeader);

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ajhhv26', 'template_c1o7fbg', '#contact-form', 'MZlTtTXAcTpwx_bqd')
    .then(() => {
        contactMessage.textContent = 'Message sent ✅';

        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        contactForm.reset();
    }, (error) => {
        contactMessage.textContent = 'Message not sent ❌';
        console.error('EmailJS Error:', error);
    });
};

contactForm.addEventListener('submit', sendEmail);
