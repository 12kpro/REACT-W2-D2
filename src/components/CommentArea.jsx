import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { useState, useEffect } from "react";
const AUTH_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYjZhZGM1NmIzNjAwMTMzZmU1NzAiLCJpYXQiOjE2ODA1MjI2MjcsImV4cCI6MTY4MTczMjIyN30.o95uQAsLLXkKapQuegwZnOjwLwi5er5rwl3OoGIczs8";
const BASE_URL = "https://striveschool-api.herokuapp.com/api/comments/";
const CommentArea = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, [props.asin]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`${BASE_URL}${props.asin}`, {
        headers: {
          Authorization: AUTH_KEY
        }
      });

      if (response.ok) {
        const commentsArr = await response.json();
        setComments(commentsArr);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AddComment asin={props.asin} fetchComments={fetchComments} />
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentArea;
