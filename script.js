// Descarga del PDF
document.getElementById('download-btn').addEventListener('click', function() {
    try {
        const link = document.createElement('a');
        link.href = './CV Johsac Gomez.pdf';
        link.download = 'CV Johsac Gomez.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error downloading the PDF:', error.message);
        alert('Could not download the PDF. Ensure that the file CV Johsac Gomez.pdf is in the correct folder.');
    }
});

// Cambio de idioma
let currentLang = 'en'; // Idioma por defecto: inglés

// Seleccionar todos los elementos del dropdown
const langItems = document.querySelectorAll('.dropdown-item');
const contentEs = document.getElementById('content-es');
const contentEn = document.getElementById('content-en');
const downloadText = document.getElementById('download-text');
const languageBtn = document.getElementById('language-btn');

// Mostrar inglés por defecto
contentEs.style.display = 'none';
contentEn.style.display = 'block';
downloadText.textContent = 'Download CV in PDF';
languageBtn.textContent = 'Language: English';

// Manejar la selección del idioma
langItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const selectedLang = this.getAttribute('data-lang');

        if (selectedLang === 'es') {
            // Cambiar a español
            contentEs.style.display = 'block';
            contentEn.style.display = 'none';
            downloadText.textContent = 'Descargar CV en PDF';
            languageBtn.textContent = 'Language: Spanish';
            currentLang = 'es';
        } else {
            // Cambiar a inglés
            contentEs.style.display = 'none';
            contentEn.style.display = 'block';
            downloadText.textContent = 'Download CV in PDF';
            languageBtn.textContent = 'Language: English';
            currentLang = 'en';
        }
    });
});