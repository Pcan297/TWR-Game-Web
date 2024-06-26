const numPairs = 17; // Number of subject/predicate pairs
const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < numPairs; i++) {
    const subjectInput = document.createElement('input');
    subjectInput.type = 'text';
    subjectInput.name = `subject${i + 1}`;
    subjectInput.placeholder = `Subject ${i + 1}`;
    
    const predicateInput = document.createElement('input');
    predicateInput.type = 'text';
    predicateInput.name = `predicate${i + 1}`;
    predicateInput.placeholder = `Predicate ${i + 1}`;
    
    gridContainer.appendChild(subjectInput);
    gridContainer.appendChild(predicateInput);
}

function importCSV() {
    // Implement CSV import functionality
}

function exportCSV() {
    // Implement CSV export functionality
}

function createGame() {
    const formData = new FormData(document.getElementById('fragmentsForm'));
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    // Send this data to Google Apps Script to populate the Google Slides template
}