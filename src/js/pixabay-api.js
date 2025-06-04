import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50613433-846385d44e3ce175ad59ef638';

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
