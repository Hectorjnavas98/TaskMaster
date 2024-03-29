# Event Personal

## Objetivo General
Este proyecto tiene como objetivo principal desarrollar habilidades en el manejo del lenguaje JavaScript, tanto en el lado cliente como en el servidor. Además, se busca aplicar HTML5 y algunas de sus API's más significativas, así como desarrollar interfaces web amigables y diseñar e implementar una API GraphQL para acceder a ella mediante una comunicación asíncrona cliente-servidor.

## Descripción
Este proyecto consiste en desarrollar una aplicación colaborativa planificada y pensada por el grupo de trabajo a partir del ejemplo y las indicaciones de la aplicación presentada To-Do-List tipo KANBAN. La aplicación permitirá a múltiples usuarios logados realizar aportaciones de tareas a realizar, mover estas tareas desde “TO DO” a “DONE” pasando por “DOING” con una actualización del interfaz en tiempo real. 

El motor principal de la aplicación será `node-express`, realizando dos aplicaciones desacopladas:
- La aplicación de cliente (FRONTEND) con `node-express` y un motor de plantillas (hbs) permitirá renderizar las diferentes vistas de nuestra aplicación (login, dashboard y project). Esta parte se encargará de la interfaz usando HTML5, JS y Bootstrap para la correcta presentación y usabilidad de nuestra aplicación.
- La aplicación de servidor (BACKEND) implementará un API mediante GraphQL con `ExpressJS` para la interacción contra la base de datos (`MongoDB`), teniendo por lo tanto una aplicación desacoplada de la misma forma que en una aplicación profesional se realiza.

Las tecnologías para la comunicación entre la aplicación de cliente y de servidor serán WebSockets que nos permitirá reflejar los cambios en tiempo real de nuestra actividad en los proyectos y Fetch/Promise que nos permitirá realizar conexiones contra nuestra aplicación de servidor.

