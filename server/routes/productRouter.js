const Router = require('express');
const router = new Router();
const productController = require('../contollers/productController');

router.post('/', productController.create);
router.get('/', productController.getAll);
router.get('/:id', productController.getOne);
router.delete('/delete/:id', productController.deleteOne);

module.exports = router;