var imagesUrl =
  "https://raw.githubusercontent.com/TheOperatorDB/TheOperatorDB.github.io/main/images/";

function buildFile(node, parentDiv) {
  var imgUrl =
    node.url !== undefined ? imagesUrl + "documents/" + node.url : undefined;

  var thumbnailUrl =
    node.url !== undefined
      ? imagesUrl + "documents_thumbnails/" + node.url
      : undefined;

  let button = document.createElement("button");
  button.classList.add("border", "bg-white", "align-top", "m-4");
  button.setAttribute("onclick", "window.open('" + imgUrl + "')");
  parentDiv.appendChild(button);

  let figure = document.createElement("figure");
  figure.classList.add("figure", "mx-auto", "d-block", "text-center");
  button.appendChild(figure);

  let img = document.createElement("img");
  img.classList.add("rounded", "mx-auto", "d-block");
  img.src = thumbnailUrl;
  figure.appendChild(img);

  let figcaption = document.createElement("figcaption");
  figcaption.classList.add("figure-caption", "primary");
  figcaption.textContent = node.name;
  figure.appendChild(figcaption);
}

function buildFolder(node, parentDiv, index) {
  var sanitizedName = node.name.replace(/\s/g, "");
  let folderDiv = document.createElement("div");
  folderDiv.classList.add("border", "p-4", "my-4");
  index % 2 == 0
    ? folderDiv.classList.add("bg-light")
    : folderDiv.classList.add("bg-white");
  parentDiv.appendChild(folderDiv);

  let folderName = document.createElement("button");
  folderName.classList.add(
    "border-0",
    "bg-transparent",
    "w-100",
    "border-bottom",
    "font-15",
    "text-decoration-none"
  );
  folderName.setAttribute("data-bs-toggle", "collapse");
  folderName.setAttribute("data-bs-target", "#" + sanitizedName);
  folderName.textContent = node.name;
  folderDiv.appendChild(folderName);

  let childrenDiv = document.createElement("div");
  childrenDiv.classList.add("collapse", "show");
  childrenDiv.setAttribute("id", sanitizedName);
  folderDiv.appendChild(childrenDiv);

  fillDocuments(childrenDiv, node.children, index + 1);
}

function fillDocuments(parentDiv, nodes, index) {
  nodes.map((node) =>
    node.type === "file"
      ? buildFile(node, parentDiv)
      : buildFolder(node, parentDiv, index)
  );
}

function fetchDocuments() {
  var mainDiv = document.getElementById("documents");

  fetch("../data/documents.json")
    .then((response) => response.json())
    .then((json) => fillDocuments(mainDiv, json.d, 0));
}

fetchDocuments();
