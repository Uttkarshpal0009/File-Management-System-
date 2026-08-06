import { FaFileAlt, FaDownload, FaTrash } from "react-icons/fa";

function FileCard({ file, onDelete }) {
  const formatSize = (size) => {
    if (size < 1024) return size + " B";
    if (size < 1024 * 1024) return (size / 1024).toFixed(2) + " KB";
    return (size / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 border border-gray-100">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

        <div className="flex items-center gap-4 min-w-0">

          <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <FaFileAlt className="text-white text-2xl" />
          </div>

          <div className="min-w-0">
            <h3 className="font-bold text-lg truncate">
              {file.fileName}
            </h3>

            <p className="text-gray-500 text-sm">
              {formatSize(file.fileSize)}
            </p>
          </div>

        </div>

        <div className="flex flex-wrap gap-3">

          <a
            href={file.fileUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
          >
            <FaDownload />
            View
          </a>

          <button
            onClick={() => onDelete(file._id)}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
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