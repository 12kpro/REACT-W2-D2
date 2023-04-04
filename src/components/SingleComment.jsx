import { Badge, ListGroup, Button } from "react-bootstrap";
const AUTH_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYjZhZGM1NmIzNjAwMTMzZmU1NzAiLCJpYXQiOjE2ODA1MjI2MjcsImV4cCI6MTY4MTczMjIyN30.o95uQAsLLXkKapQuegwZnOjwLwi5er5rwl3OoGIczs8";
const BASE_URL = "https://striveschool-api.herokuapp.com/api/comments/";

const SingleComment = (props) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`${BASE_URL}${props.comment._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: AUTH_KEY
        }
      });

      if (response.ok) {
        props.fetchComments();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ListGroup.Item key={props.comment._id} className="d-flex flex-wrap ">
      <span className="me-auto text-truncate">{props.comment.author}</span>
      <span>
        <Badge variant="dark">{props.comment.rate}</Badge> {props.comment.comment}
      </span>
      <Button variant="danger" className="btn-close" onClick={handleDelete}></Button>
    </ListGroup.Item>
  );
};
export default SingleComment;
