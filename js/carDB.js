function createCell(row, name, value) {
  let cell = document.createElement("td");
  cell.classList.add(name);
  cell.innerText = value === undefined ? "" : value;
  row.appendChild(cell);
}

function buildRows(cars) {
  var table = document.getElementById("carDB");
  let imgPath =
    "https://raw.githubusercontent.com/TheOperatorDB/TheOperatorDB.github.io/main/images/carDB/";

  cars.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  for (var i = 0; i < cars.length; i++) {
    let row = document.createElement("tr");
    row.classList.add("align-middle");

    let img = document.createElement("td");
    img.innerHTML =
      cars[i].img === undefined
        ? ""
        : '<button class="btn" onclick="window.open(\'' +
          imgPath +
          cars[i].img +
          '\',\'_blank\')"><img class="imgIcon" src="/images/carDB/imageIcon.png" width="20px"></button>';
    row.appendChild(img);

    createCell(row, "plate", cars[i].plate);
    createCell(row, "status", cars[i].status);
    createCell(row, "fabDate", cars[i].fabDate);
    createCell(row, "color", cars[i].color);
    createCell(row, "model", cars[i].model);
    createCell(row, "owner", cars[i].knownFacts.owner);
    createCell(row, "distributor", cars[i].knownFacts.distributor);
    createCell(row, "dateOfPurchase", cars[i].knownFacts.dateOfPurchase);
    createCell(row, "stolen", cars[i].knownFacts.stolen);

    table.appendChild(row);
  }
}

function fetchCars() {
  var path = "/data/carDB.json";

  fetch(path)
    .then((response) => response.json())
    .then((json) => buildRows(json.d))
    .catch((error) => console.error("Error fetching JSON:", error));
}

fetchCars();
