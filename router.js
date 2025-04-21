// Importar el módulo 'express' y crear una instancia de Router
var express = require('express');
var router = express.Router();



// Definir una ruta GET para la raíz
router.get('/', (req, res) => {
    res.render('index', {
      title: 'Página de Inicio',
      header: 'Bienvenido a la aplicación',
      message: '¡Esto funciona!',
      products: [
        { name: 'Producto 1', price: 100 },
        { name: 'Producto 2', price: 150 }
      ]
    });
  });
// Exportar el router directamente
module.exports = router;