export const uploadFile = async (fileUri, fileType, fileName) => {
    const formData = new FormData();
  
    formData.append('file', {
      uri: fileUri,
      type: fileType, 
      name: fileName, 
    });
    console.log(formData)
  
    const response = await fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to upload file');
    }
  
    const result = await response.json();
    return result;
  };

  export const convertDocs = async (endPoint,fileName, fileProcess) => {
  
    const response = await fetch(`http://localhost:3000/${endPoint}/${fileName}/${fileProcess}`, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to convert file');
    }
  
    const result = await response.json();
    return result;
  };
  
  export const downloadFile = async (fileName, fileProcess) => {
    const response = await fetch(`http://localhost:3000/download/${fileName}/${fileProcess}`, {
      method: 'GET',
    });

    if (!response.ok) {
        throw new Error('Failed to download file');
      }
    
      const result = await response.json();
      return result;
  }