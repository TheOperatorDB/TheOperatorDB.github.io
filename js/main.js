function searchHumanDB(column) {
    var input = document.getElementById(column + "Search");
    var table = document.getElementById("humanDB");
    var tr = table.getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
        var cell = tr[i].getElementsByClassName(column)[0];
        if (cell) {
            if (cell.innerText.toLowerCase().indexOf(input.value.toLowerCase()) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function fillTable(humans) {
    var table = document.getElementById('humanDB');

    humans.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });

    for (var i = 0; i < humans.length; i++) {
        let row = document.createElement("tr");

        let name = document.createElement("td");
        name.classList.add("name")
        name.innerText = humans[i].name;
        row.appendChild(name);

        let sex = document.createElement("td");
        sex.classList.add("sex")
        sex.innerText = humans[i].sex === undefined ? "" : humans[i].sex;
        row.appendChild(sex);
        
        let age = document.createElement("td");
        age.classList.add("age")
        age.innerText = humans[i].age === undefined ? "" : humans[i].age;
        row.appendChild(age);

        let skin = document.createElement("td");
        skin.classList.add("skin")
        skin.innerText = humans[i].skin === undefined ? "" : humans[i].skin;
        row.appendChild(skin);

        let eyeColor = document.createElement("td");
        eyeColor.classList.add("eyeColor")
        eyeColor.innerText = humans[i].eyeColor === undefined ? "" : humans[i].eyeColor;
        row.appendChild(eyeColor);

        let height = document.createElement("td");
        height.classList.add("height")
        height.innerText = humans[i].height === undefined ? "" : humans[i].height;
        row.appendChild(height);

        let weight = document.createElement("td");
        weight.classList.add("weight")
        weight.innerText = humans[i].weight === undefined ? "" : humans[i].weight;
        row.appendChild(weight);

        let status = document.createElement("td");
        status.classList.add("status")
        status.innerText = humans[i].status;
        switch (humans[i].status) {
            case 'Unknown':
                status.classList.add('btn-warning');
                break;
            case 'Dead':
                status.classList.add('btn-danger');
                break;
            case 'Alive':
                status.classList.add('btn-success');
                break;
            case undefined:
                status.innerText = '';
                status.classList.add('btn-warning');
                break;
            default:
                break;
        }
        row.appendChild(status);

        let img = document.createElement("td");
        img.innerHTML = humans[i].img === undefined ? "" : "<button class=\"btn\" onclick=\"window.open('images/humanDB/" + humans[i].img + "','_blank')\"><img src=\"images/humanDB/humanDBIcon.png\" width=\"40px\"></button>";
        row.appendChild(img);

        table.appendChild(row);
    }
}

function fetchJson(path) {
    fetch(path)
    .then(response => response.json())
    .then(json => fillTable(json.d))
    .catch(error => console.error('Error fetching JSON:', error))
}

function displayHumanDB() {
    fetchJson('humanDB.json');
}

displayHumanDB();