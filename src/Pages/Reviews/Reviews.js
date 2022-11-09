import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [user?.email]);
  return (
    <div>
      <h2>You have {reviews.length} reviews</h2>
    </div>
  );
};

export default Reviews;
