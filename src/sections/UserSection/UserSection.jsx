import { useContext, memo } from "react";

import { appContext } from "../../App";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Title from "../../components/Title";
import UserList from "../../components/UserList/";
import Loader from "../../components/Loader";

function UserSection({ maxPage, curPage, isLoading }) {
  const { fetchUsers } = useContext(appContext);

  return (
    <section id="user-section">
      <Container>
        <Container className="user-section-wrapper">
          <Title id="users-anchor">Working with GET request</Title>
          <UserList />
          {maxPage.current !== curPage && !isLoading && (
            <Button name="Show more" onClick={() => fetchUsers(curPage + 1)} />
          )}
          {isLoading && <Loader />}
        </Container>
      </Container>
    </section>
  );
}

export default memo(UserSection);
