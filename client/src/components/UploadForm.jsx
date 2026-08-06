import { useState } from "react";
import { FaCloudUploadAlt, FaFileAlt } from "react-icons/fa";

function UploadForm({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    onUpload(file);

    setFile(null);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Upload Box */}
      <label className="group flex flex-col items-center justify-center w-full min-h-[220px] rounded-2xl border-2 border-dashed border-blue-500/40 bg-slate-900/40 hover:border-cyan-400 hover:bg-slate-900/60 transition-all cursor-pointer p-6">

        <FaCloudUploadAlt className="text-5xl sm:text-6xl text-cyan-400 group-hover:scale-110 transition mb-4" />

        <h3 className="text-white font-semibold text-lg text-center">
          Click to Upload
        </h3>

        <p className="text-blue-200 text-sm text-center mt-2">
          PDF, Images, Word, Excel, ZIP...
        </p>

        <input
          type="file"
          hidden
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>

      {/* Selected File */}
      {file && (
        <div className="flex items-center gap-3 rounded-xl border border-blue-500/20 bg-slate-900/60 p-4">

          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">

            <FaFileAlt className="text-white" />

          </div>

          <div className="min-w-0">

            <p className="text-xs text-blue-300">
              Selected File
            </p>

            <p className="text-white text-sm truncate">
              {file.name}
            </p>

          </div>

        </div>
      )}

      {/* Upload Button */}
      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-white font-semibold hover:opacity-90 active:scale-95 transition"
      >
        Upload File
      </button>

    </form>
  );
}

export default UploadForm;