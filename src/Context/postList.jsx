import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchpost } from '../redux/slices/PostSlice';

const PostList = () => {
    const dispatch = useDispatch();
    const {items} = useSelector((state => state.post))

    useEffect(()=>{
dispatch(fetchpost())
    },[dispatch])

    const [postList, setPostList] = useState([]);
console.log('postList',postList)
    useEffect(()=>{
      setPostList(items)
    },[items]);

    const centeredStyle = {
      display: "flex",
      justifyContent: "center", // Centers horizontally
      alignItems: "center", // Centers vertically
      height: "100vh", // Full viewport height
      marginTop:"5em"
    };

  return (
    <div>
      <h2 style={{textAlign:'center'}}>postSlice</h2>

      <div style={centeredStyle}>
<table>
  <thead>
    <tr>
      <th style={{padding:"2px" , textAlign:"start"}}>Sr. No</th>
      <th style={{padding:"2px" , textAlign:"start"}}>Title</th>
      <th style={{padding:"2px" , textAlign:"start"}}>Likes</th>
      <th style={{padding:"2px" , textAlign:"start"}}>Dislikes</th>
      <th style={{padding:"2px" , textAlign:"start"}}>Tags</th>
    </tr>
  </thead>
  <tbody>
    {postList.map((data, index)=>(

    <tr>
      <td style={{padding:"2px" , textAlign:"start"}}>{index + 1}</td>
      <td style={{padding:"2px" , textAlign:"start"}}>{data.title}</td>
      <td style={{padding:"2px" , textAlign:"start"}}>{data.reactions.likes}</td>
      <td style={{padding:"2px" , textAlign:"start"}}>{data.reactions.dislikes}</td>
      <td style={{padding:"2px" , textAlign:"start"}}>{data.tags.join(",")}</td>
    </tr>
    ))}
  </tbody>
</table>
      </div>
    </div>
  )
}

export default PostList;