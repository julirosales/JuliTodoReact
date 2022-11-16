function GetFetch() {
  const url = "https://6348a6070b382d796c74f065.mockapi.io/api/v1/todos";
  fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    //console.log("que trae?", listaTareas);)
    .catch((error) => {
      console.error("Error:", error);
    });
}

export { GetFetch };
