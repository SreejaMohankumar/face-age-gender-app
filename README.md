# 👤 Face Age & Gender Detection App

This React app allows users to upload a photo, and it intelligently detects a **face**, estimates the **age**, and identifies the **gender** using `face-api.js` models.

---

## 🚀 Features

- Upload any face image (supports single face detection for now)
- Detects and displays:
  - ✅ Approximate **Age**
  - ✅ **Gender** (Male / Female)
- Displays success or error messages based on face detection
- Built with modern frontend tools:
  - ⚛️ React (Vite setup)
  - 🎨 Bootstrap 5
  - 🧠 face-api.js

---

## 📁 Required Models

You must download and place `face-api.js` models in the following directory:


You need these models:

- `tiny_face_detector`
- `face_landmark_68`
- `face_recognition`
- `age_gender`

📦 **Download models from the official repo:**  
🔗 [face-api.js model weights](https://github.com/justadudewhohacks/face-api.js/tree/master/weights)

---

## 🧠 How It Works

- Loads models for face detection, age, and gender from the `/public/models` folder.
- When an image is uploaded:
  1. It is converted into an `Image` object.
  2. The `TinyFaceDetector` checks for any faces.
  3. If found, `AgeGenderNet` predicts age and gender.
  4. Results are displayed in the UI with styled alerts.

---

## 👩‍💻 Author

**Sreeja Mohankumar**

---

## 🛠️ Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm

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
