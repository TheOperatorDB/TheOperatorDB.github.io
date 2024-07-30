function fillTable(humans, filters) {
    var table = document.getElementById('humanDB');
    table.innerHTML = '';


    var humans = humans.filter(function (human, index) {
        if (filters.search != '') {
            return human.name.toLowerCase().includes(filters.search.toLowerCase());
        }
        return true;
    });

    var humans = humans.filter(function (human, index) {
        if (filters.sex != '') {
            return human.sex.toLowerCase() == filters.sex;
        }

        return true;
    });

    var humans = humans.filter(function (human, index) {
        if (filters.skin != '') {
            return human.skin.toLowerCase() == filters.skin;
        }

        return true;
    });

    var humans = humans.filter(function (human, index) {
        if (filters.eyeColor != '') {
            return human.eyeColor.toLowerCase() == filters.eyeColor;
        }

        return true;
    });

    var humans = humans.filter(function (human, index) {
        if (filters.criminalRecord == 'yes') {
            return human.criminalRecord.length > 0;
        } else if (filters.criminalRecord == 'no') {
            return human.criminalRecord.length == 0;
        }

        return true;
    });

    var humans = humans.filter(function (human, index) {
        if (filters.fingerprints == 'yes') {
            return human.fingerprints != undefined;
        } else if (filters.fingerprints == 'no') {
            return human.fingerprints == undefined;
        }

        return true;
    });
    
    var humans = humans.filter(function (human, index) {
        if (filters.status != '' && human.status != undefined) {
            return human.status.toLowerCase() == filters.status;
        }

        return true;
    });

    humans.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });

    for (var i = 0; i < humans.length; i++) {
        let row = document.createElement("tr");
        
        let img = document.createElement("td");
        img.innerHTML = humans[i].img === undefined ? "" : "<button class=\"btn\" onclick=\"window.open('https://raw.githubusercontent.com/TheOperatorDB/TheOperatorDB.github.io/main/images/humanDB/" + humans[i].img + "','_blank')\"><img class=\"imgIcon\" src=\"images/humanDB/imageIcon.png\"></button>";
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

        let skin = document.createElement("td");
        skin.classList.add("skin");
        skin.innerText = humans[i].skin === undefined ? "" : humans[i].skin;
        row.appendChild(skin);

        let eyeColor = document.createElement("td");
        eyeColor.classList.add("eyeColor");
        eyeColor.innerText = humans[i].eyeColor === undefined ? "" : humans[i].eyeColor;
        row.appendChild(eyeColor);

        let height = document.createElement("td");
        height.classList.add("height");
        height.innerText = humans[i].height === undefined ? "" : humans[i].height;
        row.appendChild(height);

        let weight = document.createElement("td");
        weight.classList.add("weight");
        weight.innerText = humans[i].weight === undefined ? "" : humans[i].weight;
        row.appendChild(weight);
        
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
            case 'Unknown':
                status.classList.add('orange');
                break;
            case 'Dead':
                status.classList.add('red');
                break;
            case 'Alive':
                status.classList.add('green');
                break;
            case undefined:
                status.innerText = '';
                status.classList.add('orange');
                break;
            default:
                break;
        }
        row.appendChild(status);

        table.appendChild(row);
    }
}

function fetchJson(path, filters) {
    fetch(path)
    .then(response => response.json())
    .then(json => fillTable(json.d, filters))
    .catch(error => console.error('Error fetching JSON:', error))
}

function displayHumanDB() {
    var search = document.getElementById("searchInput").value;
    var sex = document.getElementById("sex").value;
    var skin = document.getElementById("skin").value;
    var eyeColor = document.getElementById("eyeColor").value;
    var criminalRecord = document.getElementById("criminalRecord").value;
    var fingerprints = document.getElementById("fingerprints").value;
    var status = document.getElementById("status").value;
    
    fetchJson('data/humanDB.json', { search: search, sex: sex, skin: skin, eyeColor: eyeColor, criminalRecord: criminalRecord, fingerprints: fingerprints, status: status });
}

displayHumanDB();