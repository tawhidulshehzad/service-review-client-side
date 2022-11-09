import { MDBBadge, MDBBtn } from "mdb-react-ui-kit";
import React from "react";

const ReviewRow = ({ review, handleDelete }) => {
  const { _id, name, email, url, message, serviceName, price } = review;

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={url}
            alt=""
            style={{ width: "45px", height: "45px" }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">{name}</p>
            <p className="text-muted mb-0">{email}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">{message}</p>
      </td>
      <td>
        <MDBBadge color="success" pill>
          {serviceName}
        </MDBBadge>
      </td>
      <td>{price}</td>
      <td>
        <MDBBtn onClick={() => handleDelete(_id)} rounded size="sm">
          x
        </MDBBtn>
      </td>
    </tr>
  );
};

export default ReviewRow;
