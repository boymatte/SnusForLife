document.addEventListener('DOMContentLoaded', function() {
    var fadeContainer = document.getElementById('fade-container');
    var fadeContent = document.getElementById('fade-content');
    var fadeLinks = document.querySelectorAll('.fade-link');

    fadeLinks.forEach(function(fadeLink) {
        fadeLink.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Hämta data-content från det klickade box-elementet
            var content = fadeLink.closest('.box').getAttribute('data-content');

            // Lägg till innehåll i fade-content
            fadeContent.innerHTML = "<p>" + content + "</p>";

            // Visa fade-container och fada in texten
            fadeContainer.style.display = 'flex';
            setTimeout(function() {
                fadeContent.style.opacity = '1';
            }, 10);
        });
    });

    fadeContainer.addEventListener('click', function() {
        // Dölj fade-container och återställ opacity
        fadeContainer.style.display = 'none';
        fadeContent.style.opacity = '0';
    });
});