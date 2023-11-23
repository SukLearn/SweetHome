import React, { useEffect, useState } from "react";
import axios from "axios";

const Welcome = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/client", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2RAZ21haWwuY29tIiwiaWF0IjoxNzAwNTc1MDcwLCJleHAiOjE3MDA1Nzg2NzB9.2IZPwQBX2gGYXOCW-lxWCbgaz4UvKyeXa_arjUeGJ1A",
          },
        });
        setUserData([response.data]); // Set the retrieved user data in state
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
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
    </div>
  );
};

export default Welcome;
