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

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  // delete function
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = reviews.filter((rvw) => rvw._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

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
            <ReviewRow
              key={review._id}
              handleDelete={handleDelete}
              review={review}
            ></ReviewRow>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default Reviews;
