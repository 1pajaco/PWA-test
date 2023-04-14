//delni info
function seznamDelni() {
    fetch('items.json')
        .then(response => response.json())
        .then(data => seznamFunction(data));
}

function seznamFunction(data) {

    var table = "<table border=1>";

    table += `<tr>
                <th>ItemId</th>
                <th>Title</th >
                <th>Price</th>
                <th>ItemType</th>
                </tr>`;

    var tr = ""; 

    for (let i = 0; i < data.Rows.length; i++) {
        tr += "<tr>";
        tr += `<td>${data.Rows[i].ItemId}</td>`;
        tr += `<td>${data.Rows[i].Title}</td>`;
        tr += `<td>${data.Rows[i].Price}</td>`;
        tr += `<td>${data.Rows[i].ItemType}</td>`;
        tr += "</tr>";
    }
    table += tr + "</table>";

    document.body.innerHTML += table;
}

seznamDelni();