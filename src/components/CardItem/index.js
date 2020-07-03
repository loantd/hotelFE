import React from "react";
import { message } from "antd";
import { Link } from "react-router-dom";

import "./style.scss";
function CardItem({ value, isLoggedIn, editHotel }) {
  const handleEdit = (value) => {
    if (!isLoggedIn) {
      message.warning("Bạn cần đăng nhập!");
    } else {
      editHotel(value);
    }
  };
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          background: `url(${value.photos[0]})`,
          backgroundSize: "cover",
        }}
      ></div>
      <Link to={"/hotel/" + value._id}>
        <div className="card-text">
          <h2>{value.name}</h2>
          <p>{value.description} ...</p>
        </div>
      </Link>
      {isLoggedIn && (
        <div className="card-stats">
          <button className="stat" onClick={() => handleEdit(value)}>
            <div className="type">Sửa thông tin</div>
          </button>
          <button className="stat">
            <div className="type">Xoá</div>
          </button>
        </div>
      )}
    </div>
  );
}

export default CardItem;
