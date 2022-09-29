import { Link } from "react-scroll/modules";

import Container from "../../components/Container";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

function Header({ isRegistered }) {
  return (
    <header>
      <Container>
        <Container className="header-wrapper">
          <Logo />
          <Container className="header-btn-container">
            <Link to="users-anchor" spy={true} smooth={true} duration={1000}>
              <Button name="Users" />
            </Link>
            {!isRegistered && (
              <Link to="form-anchor" spy={true} smooth={true} duration={1000}>
                <Button name="Sign up" />
              </Link>
            )}
          </Container>
        </Container>
      </Container>
    </header>
  );
}

export default Header;
