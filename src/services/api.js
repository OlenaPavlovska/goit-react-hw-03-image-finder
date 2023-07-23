import axios from 'axios';

const API_KEY = '37174387-4bc26f62cece3be18dd48327d';

async function getImages(query, page) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&per_page=12&page=${page}
  &orientation=horizontal&safesearch=true`;

  const res = await axios.get(url);

  return res.data;
}

export { getImages };
