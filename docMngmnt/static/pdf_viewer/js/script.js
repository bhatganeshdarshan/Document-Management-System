document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const pdfContainer = document.getElementById('pdf-container');

    dropZone.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', (event) => {
        event.preventDefault();
        dropZone.classList.remove('drag-over');

        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type === 'application/pdf') {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const pdfObject = `<embed src="${e.target.result}" type="application/pdf" width="100%" height="600px" />`;
                    pdfContainer.innerHTML = pdfObject;
                };
                reader.readAsDataURL(file);
            } else {
                alert('Please drop a PDF file.');
            }
        }
    });
});
