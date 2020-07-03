import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { PlusCircleOutlined } from "@ant-design/icons";
import { isEmpty } from "lodash";
import ListBooking from "../ListBooking";
import ContentLoading from "../ContentLoading";
import SearchLocation from "../SearchLocation";
import CardItem from "../CardItem";
import { getListBooking } from "../../containers/BookingDetails/actions";
import "./style.scss";

function HomeContent({
  getListHotels,
  data,
  isLoading,
  isLoggedIn,
  editHotel,
  addHotel,
  loading,
  getListBooking,
  listBooking,
}) {
  const [tabs, setTabs] = useState([
    { name: "Hotel", active: true, type: 1 },
    { name: "Booking", active: false, type: 2 },
  ]);
  const [type, setCheckoutType] = useState(1);
  const tabToggle = (tabIndex) => {
    let newTabs = Object.assign([], tabs);
    newTabs[tabIndex].active = true;
    setCheckoutType(newTabs[tabIndex].type);
    newTabs.map((tab, index) => {
      if (index !== tabIndex) return (tab.active = false);
    });
    setTabs(newTabs);
  };

  useEffect(() => {
    if (typeof getListHotels === "function" && type === 1) {
      getListHotels();
    }
    if (typeof getListBooking === "function" && type === 2) {
      getListBooking();
    }
  }, [type]);

  return (
    <div className="container-home">
      <div className="home-landing-page">
        <div className="home-search">
          <SearchLocation />
        </div>
      </div>
      {isLoggedIn && (
        <div className="content-home">
          <div className="content-tab">
            {tabs.map((tab, index) => (
              <div
                className={`tab-${tab.type} ${tab.active ? "selected" : ""}`}
                onClick={() => tabToggle(index)}
                key={index}
              >
                {tab.name}
              </div>
            ))}
          </div>
        </div>
      )}

      <ContentLoading loading={isLoading || loading}>
        <div className="container-home-booking">
          {type === 1 && (
            <div className="content-home">
              <div className="title-action">
                <h2>Điểm đến phổ biến nhất</h2>
                <div className="button-add">
                  {isLoggedIn && (
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{
                        width: "inherit",
                        height: "inherit",
                        borderRadius: "10px",
                      }}
                      icon={<PlusCircleOutlined />}
                      onClick={() => addHotel()}
                    >
                      Thêm khách sạn
                    </Button>
                  )}
                </div>
              </div>
              <div className="home-hotel">
                {!isEmpty(data) &&
                  data.map((value, index) => (
                    <CardItem
                      editHotel={editHotel}
                      isLoggedIn={isLoggedIn}
                      key={index}
                      value={value}
                      title={"Điểm đến phổ biến nhất"}
                    />
                  ))}
              </div>
            </div>
          )}
          {type === 2 && (
            <div className="content-list-booking">
              {listBooking &&
                listBooking.map((data, i) => (
                  <ListBooking key={i} data={data} />
                ))}
            </div>
          )}
        </div>
      </ContentLoading>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.bookingDetailsReducer.loading,
    listBooking: state.bookingDetailsReducer.listBooking,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getListBooking: () => dispatch(getListBooking()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);
