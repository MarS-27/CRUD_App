import { useState } from "react";

function useForm(emptyObj, onSave) {
    const [newInfo, setNewInfo] = useState({ ...emptyObj });

    const keysArr = Object.keys({ ...emptyObj });
  
    const onFormSubmit = (e) => {
      e.preventDefault();
      onSave(newInfo);
    };
  
    const getBase64 = file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => resolve('');
      });
    }
  
    const onChange = (e) => {
      if (e.target.name === "avatar" || e.target.name === "image") {
        getBase64(e.target.files[0])
          .then(data => {
            setNewInfo({
              ...newInfo,
              [e.target.name]: data,
            });
          }) 
      } else {
        setNewInfo({
        ...newInfo,
        [e.target.name]: e.target.value,
      });
      }
    };

    function ucFirst(str) {
      if (!str) return str;
    
      return str[0].toUpperCase() + str.slice(1);
    }

    return {
      newInfo,
      keysArr,
      onFormSubmit,
      onChange,
      ucFirst,
    };
}

export default useForm;