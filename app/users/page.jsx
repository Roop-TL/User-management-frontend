"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/Navbar.module.css";

export default function page() {
  const [User, setUser] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUser(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.usercontainer}>
      <table>
        <tbody>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Phone</th>
            <th>Role</th>
          </tr>
          {User &&
            User.length > 0 &&
            User.map((data) => {
              return (
                <>
                  <tr>
                    <td>{data.userName}</td>
                    <td>{data.userEmail}</td>
                    <td>{data.userContact}</td>
                    <td>{data.userRole.join(",")}</td>
                  </tr>
                  <select>
                    <option value="636ebbae2a90569d05990160">Admin</option>
                    <option value="636ebb9c2a90569d0599015e">Sales</option>
                    <option value="636f7de727843246a3176f8d">Finance</option>
                  </select>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
