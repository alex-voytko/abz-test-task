import { Link } from "react-scroll/modules";

import Container from "../../components/Container";
import Title from "../../components/Title";
import Button from "../../components/Button";

function HeroSection({ isRegistered }) {
  return (
    <section id="hero-section">
      <Container>
        <Container className="hero-section-wrapper">
          <Title priority={1}>Test assignment for front-end developer</Title>
          <p className="description">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          {!isRegistered && (
            <Link to="form-anchor" spy={true} smooth={true} duration={1000}>
              <Button name="Sign up" />
            </Link>
          )}
        </Container>
      </Container>
    </section>
  );
}

export default HeroSection;
