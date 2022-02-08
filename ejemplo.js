async function inicial() {
  let json = await apiGet();

  let idDiv = document.getElementById("idConteiner");
  idDiv.innerHTML = 
  "<img class=card-img-top' src='" + json.imagen + "' />"+
  "<h5 class='card-title'>" + json.nombre + "</h5>"+
  "<p class='card-text'>" + json.descripcion + "</p>"+
  "<a href='" + json.endpoint + "' target='_blank' class='btn btn-primary bloc d-block'>Visìtanos</a>";      

  console.log(json);
}

async function apiGet() {
  let request = await fetch("https://api.licorne.mx/prueba", {
    method: "GET",
    headers: getHeaders(),
  });

  return await request.json();
}

function getHeaders() {
  let token = "2EDa15eC3CEED4D";
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
}

inicial();
