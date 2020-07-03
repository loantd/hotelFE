import BaseAPI from "./baseApi";

class UserService extends BaseAPI {
  constructor() {
    super();
  }

  registerUser(body) {
    this.requestURL = `${this.baseURL}user/register`;
    return this.post(body);
  }
  signInUser(body) {
    this.requestURL = `${this.baseURL}user/login`;
    return this.post(body);
  }
}

export default new UserService();
