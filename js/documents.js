function listHtml(children) {
  var folderUrl =
    "https://raw.githubusercontent.com/TheOperatorDB/TheOperatorDB.github.io/main/images/documents/";

  return (
    "<ul>" +
    children
      .map(
        (node) =>
          "<li>" +
          (node.url != undefined
            ? '<button class="btn" onclick="window.open(\'' +
              folderUrl +
              node.url +
              "','_blank')\">" +
              node.name +
              "</button>"
            : node.name) +
          (node.type === "file" ? "" : listHtml(node.children)) +
          "</li>"
      )
      .join("\n") +
    "</ul>"
  );
}

function fetchDocuments() {
  var path = "../data/documents.json";

  fetch(path)
    .then((response) => response.json())
    .then((json) => {
      var html = listHtml(json.d);
      var content = document.getElementById("content");
      content.insertAdjacentHTML("beforeend", html);
    });
}

fetchDocuments();
