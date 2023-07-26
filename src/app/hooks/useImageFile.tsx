import axios from "axios";
import {  useEffect, useState } from "react";



export const useImageFile = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    
    useEffect(() => {
        const sendFileToBackend = async () => {
          if (selectedFile) {
            const formData = new FormData();
            formData.append('archivo', selectedFile);
    
            try {
              const response = await axios.post('http://localhost:8000/api/uploads', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
    
              console.log('Respuesta del backend:', response.data);
              // Hacer algo con la respuesta del backend si es necesario
            } catch (error) {
              console.error('Error uploading image:', error);
            }
          }
        };
    
        if (selectedFile) {
          sendFileToBackend();
        }
      }, [selectedFile]);
  
    const handleFileChange = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        if(file?.type !== 'application/pdf' ){
          setSelectedFile(file);

          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewImage(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      }
    }

    return {
        handleFileChange,
        previewImage
    }
  
}