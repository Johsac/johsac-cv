/* ============================================
   JOHSAC GOMEZ CV — Script
   ============================================ */

// --- PDF Download ---
document.getElementById('download-btn').addEventListener('click', function () {
    try {
        var link = document.createElement('a');
        link.href = './CV Johsac Gomez.pdf';
        link.download = 'CV_Johsac_Gomez.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error downloading PDF:', error.message);
    }
});

// --- Language Toggle ---
(function () {
    var currentLang = 'en';
    var langBtn = document.getElementById('lang-btn');
    var downloadText = document.getElementById('download-text');

    langBtn.addEventListener('click', function () {
        if (currentLang === 'en') {
            currentLang = 'es';
            langBtn.innerHTML = '<i class="fas fa-globe"></i> <span>EN</span>';
            downloadText.textContent = 'Descargar CV';
        } else {
            currentLang = 'en';
            langBtn.innerHTML = '<i class="fas fa-globe"></i> <span>ES</span>';
            downloadText.textContent = 'Download CV';
        }

        // Toggle EN elements
        var enEls = document.querySelectorAll('.lang-en, #hero-title-en, #nav-links-en');
        enEls.forEach(function (el) {
            el.style.display = currentLang === 'en' ? '' : 'none';
        });

        // Toggle ES elements
        var esEls = document.querySelectorAll('.lang-es, #hero-title-es, #nav-links-es');
        esEls.forEach(function (el) {
            el.style.display = currentLang === 'es' ? '' : 'none';
        });
    });
})();

// --- Scroll Reveal ---
(function () {
    var reveals = document.querySelectorAll('.reveal');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { observer.observe(el); });
})();

// --- Navbar Scroll Effect ---
(function () {
    var nav = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
})();
