import Container from "../Container";
import Title from "../Title";
import Button from "../Button";

function ErrorSubmit({ message }) {
  return (
    <Container className="error-message-container">
      <Title priority={3}>Something was wrong ;( try later</Title>
      <p>Message: "{message}"</p>
      <Button name="Refresh" onClick={() => window.location.reload()} />
    </Container>
  );
}

export default ErrorSubmit;
