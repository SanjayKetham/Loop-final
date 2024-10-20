import express from "express";
import {
  adminLogin,
  deletePost,
  freezeUser,
  getAllUsers,
  getUserPosts,deleteUser
} from "../controllers/admin.controller.js";
import { protectRoute3 } from "../middleware/adminauth.middleware.js";
import {protectRoute} from '../middleware/auth.middleware.js'
import {protectRoute2} from '../middleware/admin.user.middleware.js'
const router = express.Router();

router.post("/login", adminLogin);
router.post("/deleteuser/:id", protectRoute3, deleteUser);
router.get("/getAllUsers", protectRoute3, getAllUsers);
router.get("/getUserPosts/:userId", protectRoute2, getUserPosts);
router.delete("/deleteUserPost/:postId", protectRoute3, deletePost);
router.post("/freezeUser/:userId", protectRoute3, freezeUser);
export default router;
