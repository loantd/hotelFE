import React, { useEffect } from "react";
import { message } from "antd";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import ContentLoading from "../ContentLoading";
import { bookingDetails } from "../../containers/BookingDetails/actions";
import { AppConstants } from "../../common";
import "./style.scss";

function BookingContent({ isLoggedIn, loading, bookingDetails, data }) {
  const history = useHistory();
  useEffect(() => {
    if (data && data.message === "success") {
      history.push("/home");
    }
  }, [loading, history, data]);

  const handleSubmit = () => {
    if (!isLoggedIn) {
      message.warning("Bạn cần đăng nhập!");
    } else {
      const body = {
        hotel: "5ec4a228c2255321779dd8e7",
        startDate: "03/07/2020",
        endDate: "04/07/2020",
        adults: 2,
        children: 0,
      };
      bookingDetails(body);
    }
  };
  return (
    <ContentLoading loading={loading}>
      <div className="content-booking">
        <div className="left-content">
          <div class="gallery">
            <div class="row-top">
              <div class="img img-2">
                <img src={AppConstants.fileListTemp[0]} alt="" />
              </div>
            </div>
            <div className="row-bottom">
              {AppConstants.fileListTemp.map((value, i) => (
                <div className={`img img-${i}`}>
                  {" "}
                  <img src={value} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="top-title">
            <div className="bed-person title">Deluxe Twin Room</div>
            <div className="bed-person">1 giuong X 2</div>
            <div className="bed-person">2 khách</div>
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
                <div className="button" onClick={handleSubmit}>
                  Đặt ngay
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentLoading>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.bookingDetailsReducer.loading,
    data: state.bookingDetailsReducer.data,
  };
};
const mapDisPatchTpProps = (dispatch) => {
  return {
    bookingDetails: (value) => dispatch(bookingDetails(value)),
  };
};
export default connect(mapStateToProps, mapDisPatchTpProps)(BookingContent);
