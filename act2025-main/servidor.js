//Escribe un comentario explicando para qué sirve http
/* La libreria http nos sirve para poder manejar solicitudes y respetas permitiendo crear servidores web y clientes HTTP */
import http from 'http';
//Escribe un comentario explicando para qué sirve fs
/* El modulo fs permite trabajar con el sistema de archivos lo que incluye  leer, escribir, modificar, eliminar y manipular archivos y directores  */
import fs from 'fs';

    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
       //Agrega un enlace en bienvenida a la página de escuelas 
       //Agrega un enlace en bienvenida a la página de donantes 
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //Escribe qué significa el 500 
           // EL 500 significa "Internal Server Error"
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //Escribe qué significa el 200
        // Esto nos permite saber que el archivo a corrido de manera exitosa
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    //Esta función deberá enviar un json con los datos de las escuelas
    function getEscuelas(req, res) {
        //Esto representa un objeto JSON de una escuela
        //Agrega otra escuela
        // const escuelas = [
        //   {
        //     "nombre": "Escuela Benito Juárez",
        //     "direccion": "Av. Principal 123, Ciudad de México",
        //   },  
        //   {
        //     "nombre":"Escuela aqui aprender por que aprendes",
        //     "direccion": "Av. nose 456, Ciudad de topolobampo"
        //   }
        // ];  
        const escuelas = {
          escuelas:[
            {
              "nombre": "Escuela Benito Juárez",
              "direccion": "Av. Principal 123, Ciudad de México",
            },  
            {
              "nombre":"Escuela aqui aprender por que aprendes",
              "direccion": "Av. nose 456, Ciudad de topolobampo"
            }
          ]
        }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      //Escribe qué hace la función stringify y por qué la tenemos que usar
      res.end(JSON.stringify(escuelas));
    }

     //Agrega un enlace a bienvenida y a donantes en escuelas.html 
    function mostrarEscuelas(req, res) {
        fs.readFile('escuelas.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

      //Agrega un enlace a bienvenida y a escuelas en donantes.html
      function mostrarDonantes(req, res) {
        //Construye una página básica donantes.html
        fs.readFile('donantes.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Esta función deberá enviar un json con los datos de las donantes
    function getDonantes(req, res) {
      const donantes = {
        donantes: [
          {
            nombre: "Alfredo Molina",
            cantidad: "7777 mxn"
          },
          { 
            nombre: "Maria Escobar",
            cantidad: "3333 mxn"
          }
        ]
      }
      /* cosnt donantes = [
          {
            nombre: "Alfredo Molina",
            cantidad: "7777 mxn"
          },
          { 
            nombre: "Maria Escobar",
            cantidad: "3333 mxn"
          }
        ] */
    //Tienes que corregir varias cosas en esta sección
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(donantes));
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('Te quivocaste manito vuelve a intentar mas tarde');
    }

    //incluye el enlace a la documentación de createServer
    // https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      } else if (url === '/api/escuelas') {
        getEscuelas(req, res);
      } else if (url === '/api/donantes') {
        getDonantes(req, res);
      } 
      else if (url === '/escuelas') {
        mostrarEscuelas(req, res);
      } 
      else if (url === '/donantes') {
        mostrarDonantes(req, res);
      } 
      else if (url === '/equipo') {
        fs.readFile("equipo.html","utf-8", (error, data) => {
          if(error){
            manejarRuta404(req,res)
          } else {
            res.writeHead(200, {"content-type": "text/html"})
            res.end(data)
          }
        })
      }
      else if (url === '/opinion'){
        fs.readFile("opinion.html","utf-8", (error, data) => {
          if(error){
            manejarRuta404(req,res)
          } else {
            res.writeHead(200, {"content-type": "text/html"})
            res.end(data)
          }
        })
      }
      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      //Haz una página equipo.html correspondiente
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo
      //Trata de agregar una imagen a opinion.html
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase?

      //Agrega una ruta /opinion
      //Haz una página opinion.html
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona?
      //¿Qué es el freedombox?
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      
      
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en supertarea un enlace a servidor.js y al resto de los html