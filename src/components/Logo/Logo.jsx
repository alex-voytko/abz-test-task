import Container from "../Container";
import { ReactComponent as LogoIcon } from "../../images/svg/logo.svg";

function Logo() {
  return (
    <Container className="logo-container">
      <LogoIcon className="icon-logo" />
    </Container>
  );
}

export default Logo;
