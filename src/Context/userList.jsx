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

  return (
    <div>
      <h2>User List</h2>
     
    </div>
  );
};

export default UserList;
