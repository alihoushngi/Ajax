// Ajax
document.querySelector("#button").addEventListener("click", showContent);

function showContent() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "data.txt", true);

  xhr.onload = function () {
    if (this.status === 200) {
      document.querySelector("#output").innerHTML = `<h1>${this.response}</h1>`;
    }
  };

  xhr.send();
}
