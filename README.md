# node_mongodb_rest_docker_MOVI
Construcción de una capa de servicios usando REST, conectando a MongoDB. Adicionalmente se ha utilizado Docker-compose.

## Desarrollo del Docker

### Implementación mediante NodeJS, MogoDB y Docker Compose

##### Para Docker Compose

- [ ] Previamente tener instalado Docker Compose, Postman (ó cualquier otro que se de su preferencia como insomnia REST)

  - Lo demás que se necesite instalar se encuentra descrito en el archivo package.json

- [ ] Situarse dentro de la terminal en el proyecto: cd node_mongodb_rest_docker; aunque si abres el proyecto en VSC por default la terminal se encontrará ahí.

  Ejecutar (esto es un ejemplo de cómo se vería la terminal USER2:node_mongodb_rest_docker user$, la instrucción está en cursiva y negrita)
- [ ] USER2:node_mongodb_rest_docker user$ ***docker-compose build***
- [ ] USER2:node_mongodb_rest_docker user$ ***docker-compose up***
- [ ] Tenemos acceso desde tu navegador en el puerto 7000

![Captura de Pantalla 2022-04-20 a la(s) 5 22 58 a  m](https://user-images.githubusercontent.com/68882204/164208984-4c72593e-b5e7-4ba7-943d-202683e08441.png)

##### Para la BD
  (mydatabasemongomovi es el nombre del contenedor que tiene a mongo)
- [ ] USER2:node_mongodb_rest_docker user$ ***docker exec -it mydatabasemongomovi mongo***
- [ ] ***> show databases***
- [ ] ***> use databasemovi***

![Captura de Pantalla 2022-04-20 a la(s) 5 03 01 a  m](https://user-images.githubusercontent.com/68882204/164205461-02e1be32-f160-42e4-94bb-46a5b8ba7055.png)

##### Peticiones 
Se utilizan cuatro métodos básicos en Postman
  - POST
  <img width="843" alt="Captura de Pantalla 2022-04-20 a la(s) 3 03 39 a  m" src="https://user-images.githubusercontent.com/68882204/164211908-eba4e259-ca2d-478c-8905-70fe1bb6b97f.png">
  
  - GET
  <img width="851" alt="Captura de Pantalla 2022-04-20 a la(s) 1 08 39 a  m" src="https://user-images.githubusercontent.com/68882204/164212226-359695ea-a19b-41e5-bc97-cd990267b6b4.png">
  
  - PUT
  <img width="780" alt="Captura de Pantalla 2022-04-20 a la(s) 3 53 31 a  m" src="https://user-images.githubusercontent.com/68882204/164212523-f26f736a-8b02-48e6-a607-3430773b277b.png">
  
  - DELETE
  <img width="848" alt="Captura de Pantalla 2022-04-20 a la(s) 3 04 36 a  m" src="https://user-images.githubusercontent.com/68882204/164212762-c6365594-04de-47c6-a52a-8c1ea6b52a4e.png">

##### Notas: 
  - El paso de crear la BD se puede evitar inicializando en la BD que necesitamos y mediante un archivo de configuracion agregar registros sí se desea.
  - A este ejemplo todavía se le podrían agregar más cosas middleware, más modelos, logueo de usuarios, seguridad en las rutas, encriptar passwords, otras validaciones, entre otras cosas.


