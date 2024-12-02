function insert_Row() {
    // Get the table by its id
    var table = document.getElementById("sampleTable");
    
    // Create a new row at the top of the table
    var newRow = table.insertRow(0); // '0' means it inserts the row at the top
    
    // Insert two cells into the new row
    var cell1 = newRow.insertCell(0); // First cell (left)
    var cell2 = newRow.insertCell(1); // Second cell (right)
    
    // Set the text content of the new cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}
