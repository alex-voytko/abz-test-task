import { useEffect, useState, useContext, useCallback, memo } from "react";

import { getPositions, getToken, postData } from "../../api";
import { appContext } from "../../App";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Form from "../../components/Form";
import SuccessRegistred from "../../components/SuccessRegistred";
import ErrorSubmit from "../../components/ErrorSubmit";
import Loader from "../../components/Loader";

function FormSection({ isRegistered }) {
  const [positions, setPositions] = useState([]);
  const [token, setToken] = useState(null);
  const [formData, setFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { fetchUsers, setIsRegistered } = useContext(appContext);

  const handleGetPositions = () => {
    getPositions()
      .then((data) => setPositions(data.positions))
      .catch((error) => error.message);
  };
  const handleSaveTokenAndData = (data) => {
    setIsLoading(true);
    data.photo = data.photo[0];
    const entries = Object.entries(data);
    const formData = new FormData();
    for (const entry of entries) {
      formData.append(entry[0], entry[1]);
    }
    setFormData(formData);
    getToken()
      .then((tok) => setToken(tok))
      .catch((error) => setError(error));
  };

  useEffect(
    useCallback(() => {
      handleGetPositions();
    }, []),
    []
  );
  useEffect(
    useCallback(() => {
      if (token && formData)
        postData(formData, token)
          .then((response) => {
            if (response.success) setIsRegistered(true);
            else setError(response.message);
          })
          .finally(() => setIsLoading(false));
    }, [token, formData, setIsRegistered]),
    [token, formData, setIsRegistered]
  );
  useEffect(
    useCallback(() => {
      if (isRegistered) fetchUsers(1, false);
    }, [isRegistered]),
    [isRegistered]
  );

  return (
    <section id="form-section">
      <Container>
        <Container className="form-section-wrapper">
          <Title id="form-anchor">
            {!isRegistered
              ? "Working with POST request"
              : "User successfully registered"}
          </Title>
          {isLoading && <Loader />}
          {!isRegistered && !isLoading && !error && (
            <Form positions={positions} onSubmit={handleSaveTokenAndData} />
          )}
          {isRegistered && !isLoading && <SuccessRegistred />}
          {error && <ErrorSubmit message={error} />}
        </Container>
      </Container>
    </section>
  );
}
export default memo(FormSection);
