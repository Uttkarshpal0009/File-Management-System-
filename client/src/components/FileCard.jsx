function FileCard({ file, onDelete }) {
  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const isImage = file.fileType.startsWith("image/");

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 flex justify-between items-center">

      <div className="flex items-center gap-5">

        {isImage ? (
          <img
            src={file.fileUrl}
            alt={file.fileName}
            className="w-20 h-20 rounded-lg object-cover border"
          />
        ) : (
          <div className="w-20 h-20 rounded-lg bg-gray-200 flex items-center justify-center text-4xl">
            📄
          </div>
        )}

        <div>
          <h2 className="font-bold text-lg">
            {file.fileName}
          </h2>

          <p className="text-gray-500">
            {file.fileType}
          </p>

          <p className="text-gray-400 text-sm">
            {formatSize(file.fileSize)}
          </p>
        </div>

      </div>

      <div className="flex gap-3">

        <a
          href={file.fileUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Download
        </a>

        <button
          onClick={() => onDelete(file._id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default FileCard;