import multer from "multer";

const storage = multer.memoryStorage();

const multerMiddleware = multer({ storage }).single("image");

export default multerMiddleware;
