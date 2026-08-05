import api from "./api";

export const uploadFile = async (formData) => {
  const response = await api.post("/files/upload", formData);
  return response.data;
};

export const getFiles = async () => {
  const response = await api.get("/files");
  return response.data;
};

export const deleteFile = async (id) => {
  const response = await api.delete(`/files/${id}`);
  return response.data;
};
