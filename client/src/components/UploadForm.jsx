import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

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
    <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">

      <h2 className="text-2xl font-bold mb-6">
        Upload New File
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <label className="border-2 border-dashed border-blue-400 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition">

          <FaCloudUploadAlt className="text-6xl text-blue-600 mb-4" />

          <p className="text-lg font-semibold">
            Click to choose a file
          </p>

          <p className="text-gray-500 mt-2">
            Images, PDFs, Documents...
          </p>

          <input
            type="file"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />

        </label>

        {file && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">

            <p className="font-semibold text-blue-700">
              Selected File
            </p>

            <p className="mt-1 break-all">
              {file.name}
            </p>

          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition"
        >
          Upload File
        </button>

      </form>

    </div>
  );
}

export default UploadForm;