function fillTable(humans, filters) {
  var table = document.getElementById("humanDB");
  table.innerHTML = "";

  var imgPath =
    "https://raw.githubusercontent.com/TheOperatorDB/TheOperatorDB.github.io/main/images/humanDB/";

  var humans = humans.filter(function (human, index) {
    if (filters.name != "") {
      return human.name.toLowerCase().includes(filters.name.toLowerCase());
    }
    return true;
  });

  var humans = humans.filter(function (human, index) {
    if (
      filters.address != "" &&
      human.knownFacts.lastKnownAddress !== undefined
    ) {
      return human.knownFacts.lastKnownAddress
        .toLowerCase()
        .includes(filters.address.toLowerCase());
    } else if (
      filters.address != "" &&
      human.knownFacts.lastKnownAddress === undefined
    ) {
      return false;
    }
    return true;
  });

  var humans = humans.filter(function (human, index) {
    if (filters.sex != "") {
      return human.sex.toLowerCase() == filters.sex;
    }

    return true;
  });

  var humans = humans.filter(function (human, index) {
    if (filters.skin != "") {
      return human.skin.toLowerCase() == filters.skin;
    }

    return true;
  });

  var humans = humans.filter(function (human, index) {
    if (filters.eyeColor != "") {
      return human.eyeColor.toLowerCase() == filters.eyeColor;
    }

    return true;
  });

  var humans = humans.filter(function (human, index) {
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
  });

  var humans = humans.filter(function (human, index) {
    if (filters.criminalRecord == "yes") {
      return human.criminalRecord.length > 0;
    } else if (filters.criminalRecord == "no") {
      return human.criminalRecord.length == 0;
    }

    return true;
  });

  var humans = humans.filter(function (human, index) {
    if (filters.fingerprints == "yes") {
      return human.fingerprints != undefined;
    } else if (filters.fingerprints == "no") {
      return human.fingerprints == undefined;
    }

    return true;
  });

  var humans = humans.filter(function (human, index) {
    if (filters.status != "" && human.status != undefined) {
      return human.status.toLowerCase() == filters.status;
    }

    return true;
  });

  humans.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

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

    let name = document.createElement("td");
    name.classList.add("name");
    name.innerText = humans[i].name;
    row.appendChild(name);

    let sex = document.createElement("td");
    sex.classList.add("sex");
    sex.innerText = humans[i].sex === undefined ? "" : humans[i].sex;
    row.appendChild(sex);

    let age = document.createElement("td");
    age.classList.add("age");
    age.innerText = humans[i].age === undefined ? "" : humans[i].age;
    row.appendChild(age);

    let maritalStatus = document.createElement("td");
    maritalStatus.classList.add("maritalStatus");
    maritalStatus.innerText =
      humans[i].knownFacts.maritalStatus === undefined
        ? ""
        : humans[i].knownFacts.maritalStatus;
    row.appendChild(maritalStatus);

    let lastKnownAddress = document.createElement("td");
    lastKnownAddress.classList.add("lastKnownAddress");
    lastKnownAddress.innerText =
      humans[i].knownFacts.lastKnownAddress === undefined
        ? ""
        : humans[i].knownFacts.lastKnownAddress;
    row.appendChild(lastKnownAddress);

    let occupation = document.createElement("td");
    occupation.classList.add("occupation");
    occupation.innerText =
      humans[i].knownFacts.occupation === undefined
        ? ""
        : humans[i].knownFacts.occupation;
    row.appendChild(occupation);

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

    let remark = document.createElement("td");
    remark.classList.add("remark");
    remark.innerText = humans[i].remark === undefined ? "" : humans[i].remark;
    row.appendChild(remark);

    table.appendChild(row);
  }
}

function fetchJson(path, filters) {
  fetch(path)
    .then((response) => response.json())
    .then((json) => fillTable(json.d, filters));
}

function displayHumanDB() {
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var sex = document.getElementById("sex").value;
  var skin = document.getElementById("skin").value;
  var eyeColor = document.getElementById("eyeColor").value;
  var bloodType = document.getElementById("bloodType").value;
  var criminalRecord = document.getElementById("criminalRecord").value;
  var fingerprints = document.getElementById("fingerprints").value;
  var status = document.getElementById("status").value;

  fetchJson("/data/humanDB.json", {
    name: name,
    address: address,
    sex: sex,
    skin: skin,
    eyeColor: eyeColor,
    bloodType: bloodType,
    criminalRecord: criminalRecord,
    fingerprints: fingerprints,
    status: status,
  });
}

displayHumanDB();
