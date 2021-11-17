document.getElementById('boton').onclick = llamarApi;


async function llamarApi() {
    const rawResponse = await fetch('http://localhost:4000/comprar-mercadopago', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            cliente : {
                nombre        : "samuel",
                apellido      : "bustamante",
                documento     : 12345678,
                direccion     : "direccion",
                nro_casa      : 12314,
                codigo_postal : "12314",
        },
            producto : {
                nombre      : "producto",
                precio      : 12315,
                imagen      : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.autonocion.com%2Ftipos-discos-de-freno-pros-contras%2F&psig=AOvVaw2Cz1PNjwv8823a_OoQ2Y-C&ust=1637005834830000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiajI3QmPQCFQAAAAAdAAAAABAD",
                descripcion : "descripcion",
                categoria   : "frenos"
        },
            usuario : {
                email : "email@mail.com" 
}})
    });
    const content = await rawResponse.json();
  
    console.log(content);
  };