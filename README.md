# TP_NODEJS

## ESLint
  Configurado con la guia de estilo de airbnb.

## Prettier
  Formatea el código con las siguientes reglas:
    
    * Separar una linea en varias, si es más larga que 80 caracteres.
    
    * Las comillas dobles, las cambia por comillas sencillas.
    
    * Agrega coma al último elemento de objetos y arreglos, según la documentación de ES5.
    
    * Agrega un espacio entre las llaves ({}) y contenido.
    
    * Agrega punto y coma al final de todas las declaraciones.
    
    * Convierte la indentación a 2 espacios.

## Jest
  En la carpeta test se pueden ver algunas pruebas basicas.

  se ejecuta con yarn test ó npm run test

## JsDoc3
  Se genera documentación del código mediante comentarios en el mismo en forma de html en la carpeta out.

  se ejecuta usando jsdoc file.js

## Scripts
    
    * "build" transpila de /src a /dist para soporte es2015.
    
    * "serve" ejecuta una versión ya transpilada en /dist de la aplicación.
    
    * "start" ejecuta una traspilación al momento de /src.
    
    * "start:dev" ejecuta una transpilación al momento de /src pero con la ejeción previa de eslint y prettier.
    
    * "prettier" ejecuta un formateo automatico del código con algunas reglas establecidas en el archivo de configuarión.
    
    * "eslint" ejecuta la verificación de las guias de estilo de airbnb.
    
    * "test" ejecuta las pruebas programadas con jest.
    
    * "coverage" ejecuta la verificación de la covertura de las pruebas. 