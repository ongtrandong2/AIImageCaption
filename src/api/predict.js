import axios from 'axios';

const predict = async ({ data, type }) => {
  try {
    const formData = new FormData();
    formData.append('image', {
      uri: data.uri,
      name: data.name,
      type: data.type,
    });
    formData.append('algorithm', type);

    const config = {
      method: 'post',
      url: 'http://192.168.187.57:8080/predict', // Replace with your server's endpoint
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    };

    const response = await axios(config);
    console.log("DATA: ", { data: response.data });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default predict;
