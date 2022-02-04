# Instrucciones

Para este ejercicio utilizarás el archivo index.html

Por medio de JavaScript consume la siguiente API con el métdodo get y enviando el token que generaste en el ejercicio anterior.

API: https://api.licorne.mx/prueba

El token deberá ser enviado como un header con el nombre Authorization y el valor será el token.

```js

let headers: {
    'Autorization': token;
}

```

Si tu token es aceptado y la solicitud es correcta, obtendras una respuesta similar a la siguiente:

```js

{
    imagen: 'https://licorne.mx/img/home/Mini-albya.jpg',
    nombre: 'Licorne',
    descripcion: 'Startup Kings',
    endpoint: 'https://licorne.mx'
}

```

Deberás crear un diseño similar al del archivo "Captura.JPG" con ayuda de boostrap y pintando los datos de manera dínamica con JavaScript.
