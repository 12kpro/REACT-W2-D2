import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentsList = (props) => (
  <ListGroup>
    {props.comments.map((comment) => (
      <SingleComment key={comment._id} comment={comment} fetchComments={props.fetchComments} />
    ))}
  </ListGroup>
);

export default CommentsList;
