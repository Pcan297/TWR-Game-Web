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

function importCSV(e) {
    const file = e.target.files[0];
    if (file) {
        Papa.parse(file, {
            complete: function(results) {
                populateFields(results.data);
            }
        });
    }
}

function populateFields(data) {
    // Assuming the CSV file has two columns: Subject and Predicate
    for (let i = 0; i < data.length && i < numPairs; i++) {
        const subjectField = document.querySelector(`input[name="subject${i + 1}"]`);
        const predicateField = document.querySelector(`input[name="predicate${i + 1}"]`);
        
        if (subjectField && predicateField) {
            subjectField.value = data[i][0]; // First column for Subject
            predicateField.value = data[i][1]; // Second column for Predicate
        }
    }
}
function exportCSV() {
    const rows = [];
    console.log("rows")
    const headers = ["Subject", "Predicate"];
    rows.push(headers);

    for (let i = 0; i < numPairs; i++) {
        const subjectField = document.querySelector(`input[name="subject${i + 1}"]`);
        const predicateField = document.querySelector(`input[name="predicate${i + 1}"]`);
        
        const subject = subjectField ? subjectField.value : '';
        const predicate = predicateField ? predicateField.value : '';
        
        rows.push([subject, predicate]);
    }
    console.log(rows)
    let csvContent = "data:text/csv;charset=utf-8,";
    rows.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "fragments_game.csv");
    document.body.appendChild(link);

    link.click();
}
// function exportCSV() {
//     // Implement CSV export functionality
//     document.getElementById('csvFileInput').addEventListener('change', handleFiles);

// function handleFiles(event) {
//     const file = event.target.files[0];
//     if (file) {
//         Papa.parse(file, {
//             complete: function(results) {
//                 populateFields(results.data);
//             }
//         });
//     }
// }

// function populateFields(data) {
//     // Assuming the CSV file has two columns: Subject and Predicate
//     for (let i = 0; i < data.length && i < numPairs; i++) {
//         const subjectField = document.querySelector(`input[name="subject${i + 1}"]`);
//         const predicateField = document.querySelector(`input[name="predicate${i + 1}"]`);
        
//         if (subjectField && predicateField) {
//             subjectField.value = data[i][0]; // First column for Subject
//             predicateField.value = data[i][1]; // Second column for Predicate
//         }
//     }
    
// }

function createGame() {
    const formData = new FormData(document.getElementById('fragmentsForm'));
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    // Send this data to Google Apps Script to populate the Google Slides template
}