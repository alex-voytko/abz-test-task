import { useContext } from "react";

import { appContext } from "../../App";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Title from "../../components/Title";
import UserList from "../../components/UserList/";

function UserSection({ maxPage, curPage, isLoading }) {
  const { fetchUsers } = useContext(appContext);

  return (
    <section className="user-section">
      <Container>
        <Container className="user-section-wrapper">
          <Title>Working with GET request</Title>
          <UserList />
          {maxPage !== curPage && !isLoading && (
            <Button name="Show more" onClick={() => fetchUsers(curPage + 1)} />
          )}
        </Container>
      </Container>
    </section>
  );
}

export default UserSection;
