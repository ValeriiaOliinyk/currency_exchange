const BASE_URL = "https://api.exchangeratesapi.io/latest";

class ApiService {
  getData = () =>
    fetch(BASE_URL)
      .then((response) => response.json())
      .catch((err) => console.log(err));
}

export const apiService = new ApiService();
