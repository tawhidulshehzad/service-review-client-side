import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Reviews = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      
    </div>
  );
};

export default Reviews;