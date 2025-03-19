import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/UserSlice";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.users);

  const [userList, setUserList] = useState([]);
  console.log("userList", userList);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setUserList(items);
  }, [items]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  const centeredStyle = {
    display: "flex",
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
    height: "100vh", // Full viewport height
    marginTop: "5em",
    paddingBottom: "6em",
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>User List</h2>

      <div style={centeredStyle}>
        <table border={1}>
          <thead>
            <tr>
              <th style={{ padding: "2px", textAlign: "start" }}>Sr.No</th>
              <th style={{ padding: "2px", textAlign: "start" }}>Username</th>
              <th style={{ padding: "2px", textAlign: "start" }}>Department</th>
              <th style={{ padding: "2px", textAlign: "start" }}>Position</th>
              <th style={{ padding: "2px", textAlign: "start" }}>Role</th>
              <th style={{ padding: "2px", textAlign: "start" }}>
                Contact Info
              </th>
            </tr>
          </thead>
          <tbody>
            {userList.map((data, index) => (
              <tr
                key={data.id}
                onClick={() => navigate(`/dashboard/${data.id}`)}
                style={{ cursor: "pointer" }}
              >
                <td style={{ padding: "2px", textAlign: "start" }}>
                  {index + 1}
                </td>
                <td
                  style={{
                    padding: "2px",
                    textAlign: "start",
                    backgroundColor: "gray",
                    textDecorationColor: "white",
                    borderRadius: "4px",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                >
                  {data.username}
                </td>
                <td style={{ padding: "2px", textAlign: "start" }}>
                  {data.company.department}
                </td>
                <td style={{ padding: "2px", textAlign: "start" }}>
                  {data.company.title}
                </td>
                <td style={{ padding: "2px", textAlign: "start" }}>
                  {data.role}
                </td>
                <td style={{ padding: "2px", textAlign: "start" }}>
                  {data.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
