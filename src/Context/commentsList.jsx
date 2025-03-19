import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchcomments } from '../redux/slices/CommentSlice';

const CommentsList = () => {
    const dispatch = useDispatch();

    const {items }= useSelector((state => state.comments))

    useEffect(()=>{
dispatch(fetchcomments())
    },[dispatch])

    const [commentData, setCommentsData] = useState([]);
    console.log('commentData',commentData)

    useEffect(()=>{
      setCommentsData(items)
    },[items])

    const centeredStyle = {
      display: "flex",
      justifyContent: "center", // Centers horizontally
      alignItems: "center", // Centers vertically
      height: "100vh", // Full viewport height
      marginTop:"5em"
    };
  return (
    <div>
        <h2 style={{textAlign:'center'}}>commentsList</h2>
<div style={centeredStyle}>
  <table>
    <thead>
      <tr>
        <th style={{padding:"2px"}}>Sr.No</th>
        <th style={{padding:"2px"}}>User</th>
        <th style={{padding:"2px"}}>Comment</th>
        <th style={{padding:"2px"}}>Likes</th>
        <th style={{padding:"2px"}}>Full Name</th>
      </tr>
    </thead>
    <tbody>
      {commentData.map((data, index)=>(

      <tr>
      <td style={{padding:"2px"}}>{index + 1}</td>
      <td style={{padding:"2px"}}>{data.user.username}</td>
      <td style={{padding:"2px"}}>{data.body}</td>
      <td style={{padding:"2px"}}>{data.likes}</td>
     <td style={{padding:"2px"}}>{data.user.fullName}</td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  )
}

export default CommentsList