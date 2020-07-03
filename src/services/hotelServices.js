import BaseAPI from "./baseApi";

class HotelService extends BaseAPI {
  constructor() {
    super();
  }

  getAllHotel(query) {
    this.requestURL = `${this.baseURL}api/v1/hotel?name=${query}`;
    return this.get();
  }
  bookingHotel(body) {
    this.requestURL = `${this.baseURL}admin/booking`;
    return this.post(body);
  }
  getListBooking(params) {
    this.requestURL = `${this.baseURL}admin/booking?page=${params.page}&limit=${params.limit}`;
    return this.get();
  }
  createHotel(body) {
    console.log("dấda");
    this.requestURL = `${this.baseURL}admin/hotel`;
    return this.post(body);
  }
}

export default new HotelService();
