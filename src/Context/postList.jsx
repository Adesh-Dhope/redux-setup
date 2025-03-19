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
      setPostList(items[4])
    },[items])
  return (
    <div>postSlice</div>
  )
}

export default PostList;