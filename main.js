document.addEventListener('DOMContentLoaded', function() {
    const emailLink = document.getElementById('email-link');
    const linkedinLink = document.getElementById('linkedin-link');

    // Email link interaction
    emailLink.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default action

        const email = "tusharshrivas7999@gmail.com";
        const confirmEmail = confirm('Are you sure you want to email me?');
        
        if (confirmEmail) {
            window.location.href = `mailto:${email}`;
        }
    });

    // LinkedIn link interaction
    linkedinLink.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default action

        const linkedinUrl = "https://www.linkedin.com/in/t%C3%BAsh%C3%A1r-shr%C3%ADv%C3%A1s-78727a310/";
        const confirmLinkedIn = confirm('Are you sure you want to visit my LinkedIn profile?');

        if (confirmLinkedIn) {
            window.open(linkedinUrl, '_blank');
        }
    });

    // Adding glow effect to sections when clicked
    const sections = document.querySelectorAll('.section');

    // When a navigation link is clicked, add the glow effect to the relevant section
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = link.getAttribute('href').substring(1); // Get the section id
            const targetSection = document.getElementById(targetId);

            // Remove glow effect from all sections
            sections.forEach(section => section.classList.remove('glow'));

            // Add glow effect to the clicked section
            targetSection.classList.add('glow');
            
            // Optionally remove the glow effect after a delay
            setTimeout(() => {
                targetSection.classList.remove('glow');
            }, 1500); // Glow stays for 1.5 seconds
        });
    });
});
