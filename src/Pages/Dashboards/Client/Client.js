import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../Css/Dashboard.css";
import { Logout } from "@mui/icons-material";

const Client = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8081/api/client", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserData([response.data]); // Set the retrieved user data in state
      } catch (error) {
        if (error.response && error.response.status === 401) {
          await refreshAccessToken(); //performs token refresh
          await fetchUserData();
          console.log("refresh token worked");
        } else {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    try {
      const refreshResponse = await axios.post(
        "http://localhost:8081/api/auth/refreshtoken",
        {
          refreshToken: refreshToken,
        }
      );
      const newAccessToken = refreshResponse.data.accessToken;
      localStorage.setItem("accessToken", newAccessToken);
    } catch (error) {
      console.error("error refreshing access token:", error);
    }
  };

  const handleLogout = async () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div style={{ color: "white" }}>
      <h1>Welcome Client</h1>
      <table>
        <thead>
          <tr>
            <th>Client ID</th>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Nationality</th>
            <th>Phone</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.clientId}>
              <td>{user.clientId}</td>
              <td>{user.userId}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.nationality}</td>
              <td>{user.phone}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleLogout} className="mui t">
        <Logout /> Logout
      </button>
    </div>
  );
};

export default Client;
