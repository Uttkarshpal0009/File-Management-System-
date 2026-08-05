import { useState } from "react";

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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow"
    >
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <button
        type="submit"
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
      >
        Upload
      </button>
    </form>
  );
}

export default UploadForm;