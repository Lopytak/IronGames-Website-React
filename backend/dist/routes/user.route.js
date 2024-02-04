import userController from '../controllers/user.controller.js';
import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
const router = express.Router();
// router.get('/', userController.get)
// router.get('/:id([0-9]+)', userController.getUserById)
router.get('/check', authMiddleware, userController.check);
router.post('/login', userController.login);
router.post('/register', userController.registerUser);
// router.get('/:id', userController.updateUser)
// router.get('/:id', userController.deleteUser)
export default router;
//# sourceMappingURL=user.route.js.map