import React from "react";
import { Input, DatePicker, Button } from "antd";
import { SearchOutlined, SendOutlined } from "@ant-design/icons";
import "./style.scss";

const { RangePicker } = DatePicker;
function SearchLocation() {
  return (
    <div className="form-search">
      <Input size="large" placeholder="Địa điểm" prefix={<SearchOutlined />} />
      <div className="search-item">
        <RangePicker />
        <Button type="primary" icon={<SendOutlined />}>
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
}

export default SearchLocation;
