import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/UserSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.users);

const [userList, setUserList]= useState([])
console.log('userList',userList)
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(()=>{
    setUserList(items)
  },[items])

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  const centeredStyle = {
    display: "flex",
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
    height: "100vh", // Full viewport height
    marginTop:"5em",
    paddingBottom:"6em",
  };

  return (
    <div>
      <h2 style={{textAlign:'center'}}>User List</h2>
     
     <div style={centeredStyle}>
         <table>
          <thead>
            <tr>
              <th style={{padding:"2px"}}>Sr.No</th>
              <th style={{padding:"2px"}}>Username</th>
              <th style={{padding:"2px"}}>Department</th>
              <th style={{padding:"2px"}}>Position</th>
              <th style={{padding:"2px"}}>Role</th>
              <th style={{padding:"2px"}}>Contact Info</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((data, index)=>(
              <tr>
                <td style={{padding:"2px"}}>{index + 1}</td>
                <td style={{padding:"2px"}}>{data.username}</td>
                <td style={{padding:"2px"}}>{data.company.department}</td>
                <td style={{padding:"2px"}}>{data.company.title}</td>
                <td style={{padding:"2px"}}>{data.role}</td>
                <td style={{padding:"2px"}}>{data.phone}</td>
              </tr>
            ))}
          </tbody>
         </table>
     </div>
    </div>
  );
};

export default UserList;
