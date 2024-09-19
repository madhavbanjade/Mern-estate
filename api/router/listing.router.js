import { Router } from "express";
import {
  createListing,
  deleteListing,
  getListing,
  updateListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const listingRouter = Router();
listingRouter.route("/create").post(verifyToken, createListing);
listingRouter.route("/delete/:id").delete(verifyToken, deleteListing);
listingRouter.route("/update/:id").post(verifyToken, updateListing);
listingRouter.route("/get/:id").get(getListing);

export default listingRouter;
