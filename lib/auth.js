export async function getLogin(datos) {
  const URL_LOGIN = "http://www.lvlerp.com.ar/api/login";

  const data = { email: datos.email, password: datos.password };
  //const data = { email: "rrufino71@gmail.com", password: "11111" };
  let response = {};
  //console.log("data", data);

  try {
    const result = await fetch(URL_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Define que estamos enviando JSON
      },
      body: JSON.stringify(data), // Lo que enviamos en el cuerpo de la solicitud
    });

    const respuesta = await result.json(); // Convierte la respuesta a JSON

    console.log("respuesta", respuesta);

    // Manejo de la respuesta
    if (respuesta.status) {
      //response = await result.json(); // Convierte la respuesta a JSON
      //  console.log("logueado");
      response = { status: respuesta.status, message: respuesta.data };
    } else {
      // Captura código y texto de estado para los errores
      let errorText = "";
      if (!response.status && Array.isArray(respuesta.errors)) {
        errorText = respuesta.errors.join(" - "); // Une los errores con un salto de línea
      } else {
        errorText = respuesta.errors;
      }

      response = {
        status: respuesta.status,
        message: errorText,
      };
    }
  } catch (error) {
    response = {
      status: "false",
      message: respuesta.errors || "Error Desconocido",
    };
  }
  //console.log("response", response);
  return response;
}
