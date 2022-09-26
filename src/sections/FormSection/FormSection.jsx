import { useEffect, useRef } from "react";
import { getPositions } from "../../api";

import Container from "../../components/Container";
import Title from "../../components/Title";
import Form from "../../components/Form";

function FormSection() {
  const positions = useRef(null);

  const handleGetPositions = () => {
    getPositions()
      .then((data) => (positions.current = data.positions))
      .catch((error) => error.message);
  };

  useEffect(() => {
    handleGetPositions();
  }, []);

  return (
    <section className="form-section">
      <Container>
        <Container className="form-section-wrapper">
          <Title>Working with POST request</Title>
          <Form positions={positions.current} />
        </Container>
      </Container>
    </section>
  );
}
export default FormSection;
