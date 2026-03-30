import createApiClient from "./api.service";

class AuthService {
  constructor(baseUrl = "/api/contacts") {
    this.api = createApiClient(baseUrl);
  }

  async login(data) {
    const response = await this.api.post("/login", data);
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  async register(data) {
    return (await this.api.post("/register", data)).data;
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
