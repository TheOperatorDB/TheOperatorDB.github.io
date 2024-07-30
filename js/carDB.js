function fillTable(cars) {
    var table = document.getElementById('carDB');

    cars.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });

    for (var i = 0; i < cars.length; i++) {
        let row = document.createElement("tr");

        let img = document.createElement("td");
        img.innerHTML = cars[i].img === undefined ? "" : "<button class=\"btn\" onclick=\"window.open('https://raw.githubusercontent.com/TheOperatorDB/TheOperatorDB.github.io/main/images/carDB/" + cars[i].img + "','_blank')\"><img class=\"imgIcon\" src=\"images/carDB/imageIcon.png\" width=\"20px\"></button>";
        row.appendChild(img);

        let plate = document.createElement("td");
        plate.innerText = cars[i].plate;
        row.appendChild(plate);

        let status = document.createElement("td");
        status.innerText = cars[i].status;
        row.appendChild(status);
        
        let fabDate = document.createElement("td");
        fabDate.innerText = cars[i].fabDate;
        row.appendChild(fabDate);

        let color = document.createElement("td");
        color.innerText = cars[i].color;
        row.appendChild(color);

        let model = document.createElement("td");
        model.innerText = cars[i].model;
        row.appendChild(model);

        let owner = document.createElement("td");
        owner.innerText = cars[i].knownFacts.owner;
        row.appendChild(owner);

        let distributor = document.createElement("td");
        distributor.innerText = cars[i].knownFacts.distributor;
        row.appendChild(distributor);

        let dateOfPurchase = document.createElement("td");
        dateOfPurchase.innerText = cars[i].knownFacts.dateOfPurchase;
        row.appendChild(dateOfPurchase);

        let stolen = document.createElement("td");
        stolen.innerText = cars[i].knownFacts.stolen;
        row.appendChild(stolen);

        table.appendChild(row);
    }
}

function fetchJson(path) {
    fetch(path)
    .then(response => response.json())
    .then(json => fillTable(json.d))
    .catch(error => console.error('Error fetching JSON:', error))
}

function displayCarDB() {
    fetchJson('data/carDB.json');
}

displayCarDB();