import axios from 'axios';

// Set the base URL for Axios
const api = axios.create({
  baseURL: 'https://admin.flytesolutions.com/api',
});

console.log(process.env.NEXT_BASE_URL)
export const submitContactForm = async (data: FormData) => {
  try {
    const response = await api.post('/contact', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
