import axios from 'axios';

export default class ApiService {
  #API_KEY = '37174387-4bc26f62cece3be18dd48327d';
  #BASE_URL = 'https://pixabay.com/api/';

  constructor() {
    this.searchQuery = '';

    this.page = 1;
    this.per_page = 12;
  }

  setSearchQuery(newSearchQuery) {
    this.searchQuery = newSearchQuery;
  }

  async getImages() {
    const URL = `${this.#BASE_URL}/?`;
    const result = await axios.get(URL, {
      params: {
        image_type: 'photo',
        q: this.searchQuery,
        key: this.#API_KEY,
        page: this.page,
        per_page: this.per_page,
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    this.incrementPage();
    return result.data;
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
