import {
  FaFileAlt,
  FaDownload,
  FaTrash,
  FaExternalLinkAlt,
  FaFilePdf,
  FaImage,
} from "react-icons/fa";

function FileCard({ file, onDelete }) {
  const formatSize = (size) => {
    if (size < 1024) return size + " B";
    if (size < 1024 * 1024) return (size / 1024).toFixed(2) + " KB";
    return (size / (1024 * 1024)).toFixed(2) + " MB";
  };

  const isImage = file.fileType?.startsWith("image/");
  const isPDF = file.fileType === "application/pdf";

  return (
    <div className="bg-slate-900/70 backdrop-blur-xl border border-blue-500/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-blue-600/20 transition duration-300">

      {/* Preview */}
      <div className="h-64 bg-slate-950 flex items-center justify-center">

        {isImage ? (
          <img
            src={file.fileUrl}
            alt={file.fileName}
            className="w-full h-full object-cover"
          />
        ) : isPDF ? (
          <iframe
            src={file.fileUrl}
            title={file.fileName}
            className="w-full h-full bg-white"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-blue-300">

            <FaFileAlt size={70} />

            <p>No Preview Available</p>

          </div>
        )}

      </div>

      {/* Content */}
      <div className="p-6">

        <div className="flex items-start gap-4">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">

            {isPDF ? (
              <FaFilePdf className="text-white text-2xl" />
            ) : isImage ? (
              <FaImage className="text-white text-2xl" />
            ) : (
              <FaFileAlt className="text-white text-2xl" />
            )}

          </div>

          <div className="flex-1 min-w-0">

            <h3 className="font-bold text-lg text-white truncate">
              {file.fileName}
            </h3>

            <p className="text-blue-200 text-sm mt-1">
              {formatSize(file.fileSize)}
            </p>

          </div>

        </div>

        <div className="grid grid-cols-3 gap-3 mt-6">

          {/* Open */}
          <a
            href={file.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl transition"
          >
            <FaExternalLinkAlt />
            Open
          </a>

          {/* Download */}
          <a
            href={file.fileUrl}
            download={file.fileName}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl transition"
          >
            <FaDownload />
            Download
          </a>

          {/* Delete */}
          <button
            onClick={() => onDelete(file._id)}
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl transition"
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