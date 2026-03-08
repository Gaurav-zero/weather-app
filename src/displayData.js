const table= document.querySelector("table");

function displayData(obj){
    let tableLength= table.rows.length;
    for(let i=0; i<tableLength; ++i){
        table.deleteRow(0);
    }
    
    for(let key in obj){
        let row= table.insertRow();
        let cell0= row.insertCell(0);
        let cell1= row.insertCell(1);

        cell0.textContent= key;
        cell1.textContent= obj[key];
    }
}

export {displayData};