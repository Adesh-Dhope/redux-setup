import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchUsers } from '../redux/slices/UserSlice';

const UserDashboard = () => {

    const { id } = useParams();

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

  const client = userList.find((c) => c.id === parseInt(id));
console.log('client',client)
if (loading) return <p>Loading users...</p>;
if (error) return <p>Error: {error}</p>;
if (!client) return <p>User not found</p>;


  return (
    <div style={{padding:'2em'}}>UserDashboard
        <div>
            <div>
                <h2>FirstName :{client.username} </h2>
                <h2>LastName  : {client.lastName}</h2>
                <h2>Age : {client.age}</h2>
                <h2>Gender :{client.gender}</h2>
                <h2>BirthDate : {client.birthDate}</h2>
                <h2>BloodGroup : {client.bloodGroup}</h2>
                <h2>Address : {client.address.address}</h2>
                <h2>City : {client.address.city}</h2>
                <h2>State : {client.address.state}</h2>
                <h2>Country : {client.address.country}</h2>



            </div>
        </div>
    </div>
  )
}

export default UserDashboard