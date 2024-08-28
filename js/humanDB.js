function filterByInputProperty(filter, property) {
  if (filter != "" && property !== undefined) {
    return property.toLowerCase().includes(filter.toLowerCase());
  } else if (filter != "" && property === undefined) {
    return false;
  }
  return true;
}

function filterByProperty(filter, property) {
  if (filter != "" && property !== undefined) {
    return property.toLowerCase() == filter;
  } else if (filter != "" && property === undefined) {
    return false;
  }

  return true;
}

function createCell(row, name, value) {
  let cell = document.createElement("td");
  cell.classList.add(name);
  cell.innerText = value === undefined ? "" : value;
  row.appendChild(cell);
}

function buildRows(humans) {
  var table = document.getElementById("humanDB");
  table.innerHTML = "";

  var imgPath =
    "https://raw.githubusercontent.com/TheOperatorDB/TheOperatorDB.github.io/main/images/humanDB/";

  for (var i = 0; i < humans.length; i++) {
    let row = document.createElement("tr");
    row.classList.add("align-middle");

    let img = document.createElement("td");
    img.innerHTML =
      humans[i].img === undefined
        ? ""
        : '<button class="btn" onclick="window.open(\'' +
          imgPath +
          humans[i].img +
          '\',\'_blank\')"><img class="imgIcon" src="/images/humanDB/imageIcon.png"></button>';
    row.appendChild(img);

    createCell(row, "name", humans[i].name);
    createCell(row, "sex", humans[i].name);
    createCell(row, "age", humans[i].name);
    createCell(row, "maritalStatus", humans[i].knownFacts.maritalStatus);
    createCell(row, "lastKnownAddress", humans[i].knownFacts.lastKnownAddress);
    createCell(row, "occupation", humans[i].knownFacts.occupation);

    let criminalRecord = document.createElement("td");
    criminalRecord.classList.add("criminalRecord");
    if (humans[i].criminalRecord.length === 0) {
      criminalRecord.classList.add("green");
      criminalRecord.innerText = "No";
    } else {
      criminalRecord.classList.add("red");
      criminalRecord.innerText = "Yes";
    }
    row.appendChild(criminalRecord);

    let fingerprints = document.createElement("td");
    fingerprints.classList.add("fingerprints");
    if (humans[i].fingerprints === undefined) {
      fingerprints.innerText = "No";
    } else {
      fingerprints.classList.add("red");
      fingerprints.innerText = "Yes";
    }
    row.appendChild(fingerprints);

    let status = document.createElement("td");
    status.classList.add("status");
    status.innerText = humans[i].status;
    switch (humans[i].status) {
      case "Dead":
        status.classList.add("red");
        break;
      case "Alive":
        status.classList.add("green");
        break;
      case undefined:
        status.classList.add("orange");
        status.innerText = "";
        break;
      default:
        break;
    }
    row.appendChild(status);

    createCell(row, "dateOfBirth", humans[i].knownFacts.dateOfBirth);

    table.appendChild(row);
  }
}

function filterAndSortHumans(humans, filters) {
  return humans
    .filter((human) => filterByInputProperty(filters.name, human.name))
    .filter((human) =>
      filterByInputProperty(filters.address, human.knownFacts.lastKnownAddress)
    )
    .filter((human) => filterByProperty(filters.sex, human.sex))
    .filter((human) => filterByProperty(filters.skin, human.skin))
    .filter((human) => filterByProperty(filters.eyeColor, human.eyeColor))
    .filter((human) => filterByProperty(filters.status, human.status))
    .filter(function (human) {
      if (
        filters.bloodType == "unknown" &&
        human.knownFacts.bloodType == undefined
      ) {
        return true;
      } else if (
        filters.bloodType != "" &&
        human.knownFacts.bloodType != undefined
      ) {
        return human.knownFacts.bloodType.toLowerCase() == filters.bloodType;
      } else if (
        filters.bloodType != "" &&
        human.knownFacts.bloodType == undefined
      ) {
        return false;
      }

      return true;
    })
    .filter(function (human) {
      if (filters.criminalRecord == "yes") {
        return human.criminalRecord.length > 0;
      } else if (filters.criminalRecord == "no") {
        return human.criminalRecord.length == 0;
      }

      return true;
    })
    .filter(function (human) {
      if (filters.fingerprints == "yes") {
        return human.fingerprints != undefined;
      } else if (filters.fingerprints == "no") {
        return human.fingerprints == undefined;
      }

      return true;
    })
    .sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
}

function fetchJson(filters) {
  fetch("/data/humanDB.json")
    .then((response) => response.json())
    .then((json) => buildRows(filterAndSortHumans(json.d, filters)));
}

function displayHumanDB() {
  fetchJson({
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    sex: document.getElementById("sex").value,
    skin: document.getElementById("skin").value,
    eyeColor: document.getElementById("eyeColor").value,
    bloodType: document.getElementById("bloodType").value,
    criminalRecord: document.getElementById("criminalRecord").value,
    fingerprints: document.getElementById("fingerprints").value,
    status: document.getElementById("status").value,
  });
}

displayHumanDB();
