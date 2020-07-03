import React from "react";
import BookingContent from "../../components/BookingContent";
function BookingDetails({ isLoggedIn }) {
  return (
    <>
      <BookingContent isLoggedIn={isLoggedIn} />
    </>
  );
}

export default BookingDetails;
