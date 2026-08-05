import File from "../models/File.js";
import cloudinary from "../config/cloudinary.js";

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const file = await File.create({
      user: req.user.id,
      fileName: req.file.originalname,
      fileUrl: req.file.path,
      publicId: req.file.filename,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
    });

    res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      file,
    });
  } catch (error) {
  console.error("UPLOAD ERROR:", error);

  res.status(500).json({
    success: false,
    message: error.message,
    error,
  });
}
};
export const getFiles = async (req, res) => {
  try {
    const files = await File.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: files.length,
      files,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    // Security Check
    if (file.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }
let resourceType = "image";

if (
  file.fileType.startsWith("application") ||
  file.fileType.includes("pdf") ||
  file.fileType.includes("pages")
) {
  resourceType = "raw";
}

await cloudinary.uploader.destroy(file.publicId, {
  resource_type: resourceType,
});
    
    ;

    await file.deleteOne();

    res.status(200).json({
      success: true,
      message: "File deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};