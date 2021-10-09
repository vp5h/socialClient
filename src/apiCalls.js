import axios from 'axios';

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const res = await axios.post('/auth/login', userCredential);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err });
  }
};
export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', process.env.CLOUD_UPDATE_PRESET);
  formData.append('cloud_name', process.env.CLOUD_NAME);

  const res = await fetch(process.env.CLOUD_API, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();

  return data;
};
