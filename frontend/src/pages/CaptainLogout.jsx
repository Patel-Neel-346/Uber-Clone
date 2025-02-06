// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { SERVER_URL } from '../App'
// const UserLogout = async() => {
//     const token=localStorage.getItem('token1')

//     const navigate=useNavigate()

//     await axios.get(`${SERVER_URL}/api/user/logout`,{
//         headers:{
//             authorization: `Bearer ${token}`
//         }
//     }).then((response)=>{
//         if(response.status===200){
//             localStorage.removeItem('token1')
//             navigate('/login')
//         }
//     })

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default UserLogout

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../App';

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/captain-login');
          return;
        }

        const response = await axios.get(`${SERVER_URL}/api/captain/logout`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 201) {
          localStorage.removeItem('token');
          navigate('/captain-login');
        }
      } catch (error) {
        console.error('Error during logout:', error);
        // Optional: Handle errors gracefully (e.g., show a message)
        navigate('/captain-login');
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default CaptainLogout;
