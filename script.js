document.getElementById('download-btn').addEventListener('click', function() {
    try {
        const link = document.createElement('a');
        link.href = './CV JOHsac Gomez.pdf';
        link.download = 'CV JOHsac Gomez.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error al descargar el PDF:', error.message);
        alert('No se pudo descargar el PDF. Asegúrate de que el archivo CV JOHsac Gomez.pdf esté en la carpeta correcta.');
    }
});