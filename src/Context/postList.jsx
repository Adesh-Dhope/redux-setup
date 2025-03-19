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
      <th>Sr. No</th>
      <th>Title</th>
      <th>Likes</th>
      <th>Dislikes</th>
      <th>Tags</th>
    </tr>
  </thead>
  <tbody>
    {postList.map((data, index)=>(

    <tr>
      <td>{index + 1}</td>
      <td>{data.title}</td>
      <td>{data.reactions.likes}</td>
      <td>{data.reactions.dislikes}</td>
      <td>{data.tags.join(",")}</td>
    </tr>
    ))}
  </tbody>
</table>
      </div>
    </div>
  )
}

export default PostList;