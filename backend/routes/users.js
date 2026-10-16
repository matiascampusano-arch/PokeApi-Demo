import { Router } from "express";
const router = Router();

// Define your user routes here

router.get("/", (_req, res) => {
  res.json({ message: "User route" });
});

export default router;
