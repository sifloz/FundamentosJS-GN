// Ejemplo table

var data = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

var createTD = (tableRow,content) => {
    var td = document.createElement("td");
    td.innerText = content
    tableRow.appendChild(td);
}

var addTableRow = (info)=>{
    var table = document.getElementById("tabla-montañas");
    var tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    //Conociendo la estructura del objeto

    // createTD(tableRow, info.name);
    // createTD(tableRow, info.height);
    // createTD(tableRow, info.place);

    // Para cualquier objeto

    for(var key in info){
        createTD(tableRow, info[key]);
    }
}

var table = document.createElement("table");

table.id = "tabla-montañas";

var tableHeaders = document.createElement("tr");

var headerName = document.createElement("th");

headerName.innerText = "Name";

tableHeaders.appendChild(headerName);

var headerHeight = document.createElement("th");

headerHeight.innerText = "Height";

tableHeaders.appendChild(headerHeight);

var headerPlace = document.createElement("th");

headerPlace.innerText = "Place";

tableHeaders.appendChild(headerPlace);

document.body.appendChild(table)

table.appendChild(tableHeaders)

data.forEach(function(element) {
    addTableRow(element);
})