import React from "react";

import "./style.scss";
function ListBooking({ data }) {
  return (
    <div className="booking-item">
      <div className="left-content">{data["hotel"]["name"]}</div>
      <div className="right-content">
        <div className="top-title">
          <div className="bed-person title">Deluxe Twin Room</div>
          <div className="bed-person">1 giuong X 2</div>
          <div className="bed-person">
            <span>Người lớn :{data["adults"]}</span> -{" "}
            <spa>Trẻ nhỏ : {data["children"]}</spa>
          </div>
        </div>
        <div className="body-info">
          <div className="column">
            <div className="item free">Miễn phí bữa sáng</div>
            <div className="item free">WiFi miễn phí</div>
          </div>
          <div className="column">
            {" "}
            <div className="item not">Không hoàn tiền</div>
            <div className="item not">Không áp dụng đổi lịch</div>
          </div>
          <div className="column">
            {" "}
            <div className="item price">2.001.000 VND</div>
            <div className="item ">
              <span>{data["startDate"]}</span> - <span>{data["endDate"]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListBooking;
