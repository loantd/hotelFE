import { GET, POST, PUT, DELETE } from "./api";

class BaseAPI {
  constructor() {
    this.baseURL = "";
    this.requestURL = "";
  }
  get(options) {
    return GET(this.requestURL, options);
  }

  post(payload, options) {
    return POST(this.requestURL, payload, options);
  }

  put(payload, options) {
    return PUT(this.requestURL, payload, options);
  }

  delete(payload, options) {
    return DELETE(this.requestURL, payload, options);
  }
}

export default BaseAPI;
