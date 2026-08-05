# 📁 MERN File Management System

A full-stack File Management System built with the MERN Stack. Users can securely register, log in, upload files to Cloudinary, view their uploaded files, download them, and delete them.

---

## 🚀 Features

- 🔐 User Authentication (JWT)
- 👤 User Registration & Login
- 🛡️ Protected Routes
- ☁️ Cloudinary File Upload
- 📂 View Uploaded Files
- ⬇️ Download Files
- 🗑️ Delete Files
- 📱 Responsive Dashboard

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Cloudinary

---

## 📂 Project Structure

```
mern-authentication/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Uttkarshpal0009/File-Management-System-.git
```

Go into the project folder

```bash
cd File-Management-System-
```

---

## Install Client

```bash
cd client
npm install
npm run dev
```

---

## Install Server

Open another terminal

```bash
cd server
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=3000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
CLOUD_NAME=YOUR_CLOUDINARY_NAME
CLOUD_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUD_API_SECRET=YOUR_CLOUDINARY_API_SECRET
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/profile | Get User Profile |

### Files

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/files/upload | Upload File |
| GET | /api/files | Get User Files |
| DELETE | /api/files/:id | Delete File |

---

## Future Improvements

- File Preview
- Search Files
- Rename Files
- Folder Support
- File Sharing
- Dark Mode

---

## Author

**Uttkarsh Pal**

GitHub: https://github.com/Uttkarshpal0009

LinkedIn: https://www.linkedin.com/in/uttkarsh-pal-web-developer/

---

## License

This project is licensed under the MIT License.