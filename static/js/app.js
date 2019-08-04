// from data.js
var tableData = data;
var reset = null;

function fillTable (sightings){
    var tbody = d3.select("#ufo-table>tbody");
    tbody.text("") 
    sightings.forEach((sighting) => {
        let row = tbody.append("tr");
        Object.values(sighting).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
}
fillTable(tableData)

var button = d3.select('#filter-btn')

function dateSearch(userInput){
    var dateFilter = tableData.filter(data => data.datetime === userInput);
    fillTable (dateFilter);
};

// Function to handle button click and blank values
function handleChange(event) {
    let inputElement = d3.select('#datetime');
    let input = inputElement.property("value");
    if (reset == true) {
        fillTable(tableData);
        button.text('Filter Table');
        reset = false;
    }
    else if (input == ''){
        reset = true;
        button.text('All Dates');
        d3.select("#ufo-table>tbody").text('')
    }
    else {
        dateSearch(input);
    }
};

button.on("click", handleChange);