import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import UploadForm from "../components/UploadForm";
import FileCard from "../components/FileCard";
import {
  uploadFile,
  getFiles,
  deleteFile,
} from "../services/fileService";

function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all files
  const fetchFiles = async () => {
    try {
      console.log("Fetching files...");

      const data = await getFiles();

      console.log("Files:", data);

      setFiles(data.files || []);
    } catch (error) {
      console.error("Fetch Error:", error);
      alert(error.response?.data?.message || "Failed to load files");
    } finally {
      setLoading(false);
    }
  };

  //useEffect(() => {
  //  fetchFiles();
 // }, []);

  // Upload file
  const handleUpload = async (selectedFile) => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const data = await uploadFile(formData);

      alert(data.message);

      fetchFiles();
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Upload Failed");
    }
  };

  // Delete file
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this file?"
    );

    if (!confirmDelete) return;

    try {
      const data = await deleteFile(id);

      alert(data.message);

      fetchFiles();
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Delete Failed");
    }
  };

  // Logout
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <div>
            <h1 className="text-3xl font-bold">
              File Management System
            </h1>

            <p className="text-gray-500">
              Welcome, {user?.name}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>
      </div>

      {/* Main */}
      <div className="max-w-5xl mx-auto p-6">

        <UploadForm onUpload={handleUpload} />

        <div className="mt-8">

          <h2 className="text-2xl font-bold mb-4">
            My Files
          </h2>

          {loading ? (
            <p>Loading...</p>
          ) : files.length === 0 ? (
            <p>No files uploaded yet.</p>
          ) : (
            <div className="space-y-4">
              {files.map((file) => (
                <FileCard
                  key={file._id}
                  file={file}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default Dashboard;