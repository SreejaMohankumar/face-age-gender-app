# 👤 Face Age & Gender Detection App

This React app allows users to upload a photo, and it intelligently detects a **face**, estimates the **age**, and identifies the **gender** using `face-api.js` models.

---

## 🚀 Features

- Upload any face image (supports single face detection for now).
- Detects and displays:
  - ✅ Approximate **Age**
  - ✅ **Gender** (Male / Female)
- Displays success or error messages based on face detection.
- Built with modern frontend tools:
  - React (Vite setup)
  - Bootstrap 5
  - face-api.js

You must download and place face-api.js models in the following directory:
/public/models/

**You need these models:**
- tiny_face_detector
- face_landmark_68
- face_recognition
- age_gender

📦 Download from the official repo:
🔗 https://github.com/justadudewhohacks/face-api.js/tree/master/weights

## 🧠 How It Works

- Loads models for face detection, age, and gender from the `/public/models` folder.
- When an image is uploaded:
  - It is converted into an `Image` object.
  - The `TinyFaceDetector` checks for any faces.
  - If found, `AgeGenderNet` predicts age and gender.
  - Results are displayed in the UI.

---

## 📂 Folder Structure

face-age-gender-app/
├── public/
│ └── models/ # face-api.js model files
├── src/
│ ├── FaceDetection.jsx # Core component with logic
│ ├── App.jsx # Main App file
│ └── main.jsx # Entry point
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

## 🛠️ Getting Started

### ✅ Prerequisites
Make sure you have **Node.js** and **npm** installed.

### 📦 Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/SreejaMohankumar/face-age-gender-app.git

# 2. Move into the project folder
cd face-age-gender-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

👩‍💻 Author
Sreeja Mohankumar

