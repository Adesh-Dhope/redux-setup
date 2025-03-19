import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchcomments } from '../redux/slices/CommentSlice';
import { useParams } from 'react-router-dom';

const CommentDashboard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.comments);
  const [commentDashboard, setCommentDashboard] = useState([]);

  useEffect(() => {
    dispatch(fetchcomments());
  }, [dispatch]);

  useEffect(() => {
    setCommentDashboard(items);
  }, [items]);

  const CommentData = commentDashboard.find((comment) => comment.id === parseInt(id));

  if (loading) return <p>Loading data...</p>;

  if (!CommentData) return <p>No comment found with ID {id}</p>;

  return (
    <div>
              <h2>{CommentData.user.username}</h2>
              <h2>{CommentData.user.fullName}</h2>

      <h2>{CommentData.body}</h2>
      <h2>{CommentData.id}</h2>
      <h2>{CommentData.likes}</h2>
    </div>
  );
};

export default CommentDashboard;
