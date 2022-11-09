import React, { useContext, useEffect, useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [user?.email]);
  return (
    <div>
      <h2>You have {reviews.length} reviews</h2>
      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Review</th>
            <th scope="col">Service Name</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {reviews.map((review) => (
            <ReviewRow key={review._id} review={review}></ReviewRow>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default Reviews;
