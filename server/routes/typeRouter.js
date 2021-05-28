const Router = require('express');
const router = new Router();
const typeController = require('../contollers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), typeController.create);
router.get('/', typeController.getAll);
// router.delete('/', );

module.exports = router;