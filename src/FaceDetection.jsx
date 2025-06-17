import * as faceApi from "face-api.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

const FaceDetection = ()=>{

  const[image, setImage] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [detectionMessage, setDetectionMessage] = useState("");



  //Load Face Algorithms
  useEffect ( ()=>{
    const loadModals = async() =>{
      const ModalURL = "/models";

      await faceApi.nets.tinyFaceDetector.loadFromUri(ModalURL)
      await faceApi.nets.faceLandmark68Net.loadFromUri(ModalURL)
      await faceApi.nets.faceRecognitionNet.loadFromUri(ModalURL)
      await faceApi.nets.ageGenderNet.loadFromUri(ModalURL)
    }
    
    loadModals();

  }, [])

  const handleImageUploadEvent = (event)=> {

    const file = event.target.files[0]

    if(file){

      const imageURL = URL.createObjectURL(file)
      const imageObject = new Image();
      imageObject.src = imageURL

      imageObject.onload = async() => {

        const detections = await faceApi.detectAllFaces
        ( imageObject, new faceApi.TinyFaceDetectorOptions() ).withAgeAndGender();

        if(detections.length>0){
          setImage(imageURL)
          setAge(Math.round(detections[0].age)); // Set Age
          setGender(detections[0].gender);       // Set Gender
          console.log("Face detected with Age: " + Math.round(detections[0].age) 
          + " and Gender: " + detections[0].gender);
        }
        else{
          setImage(null);
          setAge(null);
          setGender(null);
          setDetectionMessage("No face detected.");
          console.log("No face detected");
        }

      }

    }

    else{
      console.log("No file found");
    }

  }


  return (
  <>
    <div className="container mt-5">
      <h1 className="mb-4">Face Detection App (Age, Gender)</h1>
      <div className="mb-3">
          <input type="file" className="form-control" accept="image/*"  onChange={ handleImageUploadEvent } />
      </div>

      {
        detectionMessage && (
          <div className={`alert ${detectionMessage === "No face detected." ? "alert-danger" : "alert-success"}`}>
            {detectionMessage}
          </div>
        )
      }

      {
        age && gender && (
          <div className="alert alert-info">
            <strong>Detected Age:</strong> {age} <br />
            <strong>Detected Gender:</strong> {gender}
          </div>
        )
      }

      {
        image && (
          <div className="position-relative">
            <img src={ image } alt="" className="img-fluid"/>
          </div>
        )
      }
    </div>

    
  </>
  );
};

export default FaceDetection;