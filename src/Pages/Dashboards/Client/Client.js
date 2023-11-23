import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
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
    <div className="dashboard">
      <div className="app-container">
        <div className="sidebar">
          <div className="sidebar-header"></div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <a href="/">
                <svg
                  xmlns="http://www.w6.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home"
                >
                  <path d="M6 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 6 15 6 15 22" />
                </svg>
                <span>Home</span>
              </a>
            </li>
            <li className="sidebar-list-item active">
              <a href="/">
                <svg
                  xmlns="http://www.w6.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-shopping-bag"
                >
                  <path d="M6 2L6 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-6-4z" />
                  <line x1="6" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span>Requests</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="/">
                <svg
                  xmlns="http://www.w6.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-pie-chart"
                >
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.86" />
                  <path d="M22 6A10 10 0 0 0 6 2v10z" />
                </svg>
                <span>Statistics</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="/">
                <svg
                  xmlns="http://www.w6.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-inbox"
                >
                  <polyline points="22 6 16 6 14 15 10 15 8 6 2 6" />
                  <path d="M5.45 5.11L2 6v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-6.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                </svg>
                <span>Inbox</span>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="/">
                <svg
                  xmlns="http://www.w6.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bell"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-6 9-6 9h18s-6-2-6-9" />
                  <path d="M16.76 21a2 2 0 0 1-6.46 0" />
                </svg>
                <span>Notifications</span>
              </a>
            </li>
          </ul>
          <div className="account-info">
            <div className="account-info-picture">
              <img
                src="https://hope.be/wp-content/uploads/2015/05/no-user-image.gif"
                alt="Account"
              />
            </div>
            <div className="account-info-name">Nikusha</div>
            <button className="account-info-more">
              <svg
                xmlns="http://www.w6.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-more-horizontal"
              >
                <circle cx="6" cy="6" r="1" />
                <circle cx="19" cy="6" r="1" />
                <circle cx="5" cy="6" r="1" />
              </svg>
            </button>
          </div>
        </div>
        <div className="app-content">
          <form className="form">
            <div>
              {userData.map((user) => (
                <div key={user.clientId}>
                  <div className="title">Welcome {user.firstName}</div>
                  <div className="title2">You have role of Client</div>
                  <div className="subtitle">
                    This is your information you used to register here
                  </div>
                  <label htmlFor={`firstName-${user.clientId}`}>
                    First Name:
                  </label>
                  <input
                    type="text"
                    id={`firstName-${user.clientId}`}
                    value={user.firstName}
                    disabled
                  />
                  <label htmlFor={`lastName-${user.clientId}`}>LastName</label>
                  <input
                    type="text"
                    id={`lastName-${user.clientId}`}
                    value={user.lastName}
                    disabled
                  />
                  <label htmlFor={`age-${user.clientId}`}>Age</label>
                  <input
                    type="number"
                    id={`age-${user.clientId}`}
                    value={user.age}
                    disabled
                  />
                  <label htmlFor={`nationality-${user.clientId}`}>
                    Nationality
                  </label>
                  <input
                    type="text"
                    id={`nationality-${user.clientId}`}
                    value={user.nationality}
                    disabled
                  />
                  <label htmlFor={`phone-${user.clientId}`}>Phone</label>
                  <input
                    type="text"
                    id={`phone-${user.clientId}`}
                    value={user.phone}
                    disabled
                  />
                </div>
              ))}
            </div>
          </form>
          <form>
            <label></label>
            <input type="text" name="firstName" />
            <input type="text" name="lastName" />
            <input type="tel" name="phone" />
            <input type="number" />
            <input />
          </form>

          <button onClick={handleLogout} className="dash-button">
            <Logout /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Client;
