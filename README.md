*Descripción
Este proyecto es una implementación de una aplicación de lista de tareas (ToDo List) utilizando TypeScript y siguiendo el enfoque de Desarrollo Guiado por Pruebas (TDD). 

*Características
•	Añadir una tarea
•	Marcar una tarea como completada
•	Eliminar una tarea
•	Mostrar la lista de tareas

*Tecnologías Utilizadas
•	TypeScript: Un superconjunto de JavaScript que añade tipado estático opcional.
•	Jest: Un marco de pruebas de JavaScript que permite escribir pruebas unitarias de manera sencilla.

*Instalación
•	Clona este repositorio en tu máquina local:
      git clone https://github.com/ftdesp/ToDo-List-Level-1.git
   		cd todo-list
•	Instala las dependencias del proyecto:
   		npm install
  
•	Instala Jest como una dependencia de desarrollo:
   		npm install --save-dev jest @types/jest ts-jest
   
•	Asegúrate de que tu archivo `jest.config.js` tiene la siguiente configuración:
  		 /** @type {import('ts-jest').JestConfigWithTsJest} */
   		module.exports = {
     		preset: 'ts-jest',
    		 testEnvironment: 'node',
   		};

*Uso
•	Para ejecutar las pruebas y asegurarte de que todo funciona correctamente:
   		npx jest
