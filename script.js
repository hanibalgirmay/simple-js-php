document.getElementById("search-input").addEventListener("keyup", async (e) => {
  // Search comments
  // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
  // Display the results in the UI

  // Things to look out for
  // ---
  // Use es6

  //Ajax request
  let url = "http://localhost:8000/";
  let _http = new XMLHttpRequest();
  const result = document.getElementById("results");

  let json = [];

  _http.open("GET", url);
  _http.onload = function () {
    if (_http.status === 200) {
      const data = JSON.parse(_http.responseText);
      result.innerHTML = "";
      data.forEach((element) => {
        if (element.name.toLowerCase().includes(e.target.value.toLowerCase())) {
          const li = document.createElement("li");
          li.textContent = element.name;
          result.appendChild(li);
        }
      });
    } else {
      console.log("request failed");
    }
  };
  _http.send();

  //   const res = await fetch("http://localhost:8000/");
  //   const json = await res.json();

  //   const result = `<li>${json.join("</li><li>")}</li>`;
  //   document.getElementById("results").innerHTML = result;
});
