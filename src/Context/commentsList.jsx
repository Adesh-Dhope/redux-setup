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
  return (
    <div>
        <h2>commentsList</h2>

    </div>
  )
}

export default CommentsList