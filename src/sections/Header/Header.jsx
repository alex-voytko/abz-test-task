import Container from "../../components/Container";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

function Header() {
  return (
    <header>
      <Container>
        <Container className="header-wrapper">
          <Logo />
          <Container className="header-btn-container">
            <Button name="Users" />
            <Button name="Sign up" />
          </Container>
        </Container>
      </Container>
    </header>
  );
}

export default Header;
