<div className="flex flex-wrap gap-3">

  {/* Preview */}
  <a
    href={file.fileUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
  >
    Preview
  </a>

  {/* Download */}
  <a
    href={file.fileUrl.replace("/upload/", "/upload/fl_attachment/")}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition"
  >
    <FaDownload />
    Download
  </a>

  {/* Delete */}
  <button
    onClick={() => onDelete(file._id)}
    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
  >
    <FaTrash />
    Delete
  </button>

</div>