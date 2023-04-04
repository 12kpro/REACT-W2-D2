import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const AUTH_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzYjZhZGM1NmIzNjAwMTMzZmU1NzAiLCJpYXQiOjE2ODA1MjI2MjcsImV4cCI6MTY4MTczMjIyN30.o95uQAsLLXkKapQuegwZnOjwLwi5er5rwl3OoGIczs8";
const BASE_URL = "https://striveschool-api.herokuapp.com/api/comments/";

const AddComment = (props) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("");
  const [elementId, setElementId] = useState("");

  useEffect(() => {
    setElementId(props.asin);
  }, [props.asin]);

  console.log(props);
  const sendComment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify({
          comment,
          rate,
          elementId
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: AUTH_KEY
        }
      });
      if (response.ok) {
        props.fetchComments();
        setComment("");
        setRate("");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Form onSubmit={sendComment}>
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Commento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Inserisci il commento"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Voto</Form.Label>
        <Form.Select value={rate} onChange={(e) => setRate(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>

      <Button type="submit" variant="primary">
        Invia commento
      </Button>
    </Form>
  );
};

export default AddComment;
