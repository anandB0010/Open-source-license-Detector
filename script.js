function detectLicense() {
    const fileInput = document.getElementById('fileInput');
    const resultText = document.getElementById('licenseType');
    const loadingText = document.getElementById('loading');
    
    if (fileInput.files.length === 0) {
        resultText.textContent = 'No file selected yet.';
        return;
    }
    
    const file = fileInput.files[0];
    const reader = new FileReader();

    // Show loading message
    loadingText.style.display = 'block';

    reader.onload = function(event) {
        loadingText.style.display = 'none'; // Hide loading message
        const fileContent = event.target.result.toLowerCase();  // Convert content to lowercase for better matching
            
        // License detection logic
        if (fileContent.includes("MIT")) {
            resultText.textContent = 'MIT License';
        } else if (fileContent.includes('gpl')) {
            resultText.textContent = 'GPL License';
        } else if (fileContent.includes('Apache')) {
            resultText.textContent = 'Apache 2.0 License';
        } else if (fileContent.includes('bsd')) {
            resultText.textContent = 'BSD License';
        } else if (fileContent.includes('mpl')) {
            resultText.textContent = 'Mozilla Public License (MPL)';
        } else if (fileContent.includes('eclipse')) {
            resultText.textContent = 'Eclipse Public License';
        } else if (fileContent.includes('creative commons')) {
            resultText.textContent = 'Creative Commons License';
        } else if (fileContent.includes('agpl')) {
            resultText.textContent = 'GNU Affero General Public License (AGPL)';
        } else if (fileContent.includes('lgpl')) {
            resultText.textContent = 'GNU Lesser General Public License (LGPL)';
        } else if (fileContent.includes('floss')) {
            resultText.textContent = 'Free/Libre and Open Source Software (FLOSS)';
        } else {
            resultText.textContent = 'License type not detected.';
        }
    };
    reader.onerror = function() {
        loadingText.style.display = 'none'; // Hide loading message in case of error
        resultText.textContent = 'Error reading the file.';
    };

    // Read the file as text
    reader.readAsText(file);
}