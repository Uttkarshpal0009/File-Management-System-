import {
  FaFileAlt,
  FaFilePdf,
  FaFileImage,
  FaDownload,
  FaTrash,
  FaEye,
} from "react-icons/fa";

function FileCard({ file, onDelete }) {
  const formatSize = (size) => {
    if (!size) return "0 B";
    if (size < 1024) return size + " B";
    if (size < 1024 * 1024) return (size / 1024).toFixed(2) + " KB";
    return (size / (1024 * 1024)).toFixed(2) + " MB";
  };

  const isImage = file.fileType?.startsWith("image/");
  const isPdf = file.fileType === "application/pdf";

  return (
    <div className="bg-slate-900/70 backdrop-blur-md border border-blue-500/20 rounded-2xl p-5 hover:border-blue-400 transition-all duration-300">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

        {/* Left */}
        <div className="flex items-center gap-4 min-w-0">

          <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shrink-0">

            {isPdf ? (
              <FaFilePdf className="text-white text-2xl" />
            ) : isImage ? (
              <FaFileImage className="text-white text-2xl" />
            ) : (
              <FaFileAlt className="text-white text-2xl" />
            )}

          </div>

          <div className="min-w-0">

            <h3 className="text-white font-semibold truncate">
              {file.fileName}
            </h3>

            <p className="text-blue-200 text-sm mt-1">
              {formatSize(file.fileSize)}
            </p>

          </div>

        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-3">

          {/* Preview */}
          <a
            href={file.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl transition"
          >
            <FaEye />
            Preview
          </a>

          {/* Download */}
          <a
            href={file.fileUrl.replace("/upload/", "/upload/fl_attachment/")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-xl transition"
          >
            <FaDownload />
            Download
          </a>

          {/* Delete */}
          <button
            onClick={() => onDelete(file._id)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-xl transition"
          >
            <FaTrash />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default FileCard;