const navLinks = document.querySelectorAll('nav ul li a');
for(let link of navLinks) {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({behavior: 'smooth'});
  });
}
