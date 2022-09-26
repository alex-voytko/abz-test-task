import { useRef } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

import Container from "../Container";
import Button from "../Button";
import Loader from "../Loader";
import { input } from "./patterns";

function Form({ positions }) {
  const imgFile = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  console.log(errors);
  //   const handleChange = (e) => {};
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(imgFile.current.files[0]);
    const formData = new FormData(e.currentTarget);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };
  const styles = {
    name: classNames({ "is-errored": errors.name }),
    validName: classNames("validation-tip", { "is-errored": errors.name }),
    email: classNames({ "is-errored": errors.email }),
    validEmail: classNames("validation-tip", { "is-errored": errors.email }),
    phone: classNames({ "is-errored": errors.phone }),
    validPhone: classNames("validation-tip", { "is-errored": errors.phone }),
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Container className="input-container">
        <Container className="input-field-container">
          <input
            type="text"
            className={styles.name}
            placeholder="Your name"
            {...register("name", {
              required: input.required,
              minLength: {
                value: 2,
                message: input.messageName,
              },
              maxLength: {
                value: 60,
                message: input.messageName,
              },
            })}
          />
          <label htmlFor="name" className={styles.name}>
            Your name
          </label>
          {errors?.name && (
            <span className={styles.validName}>
              {errors?.name?.message || "Error"}
            </span>
          )}
        </Container>
        <Container className="input-field-container">
          <input type="email" name="email" placeholder="Email" required />
          <label htmlFor="email" className={styles.email}>
            Email
          </label>
        </Container>
        <Container className="input-field-container">
          <input
            className={styles.phone}
            type="tel"
            name="phone"
            placeholder="Phone"
            required
          />
          <label htmlFor="phone" className={styles.phone}>
            Phone
          </label>
          <span htmlFor="phone" className={styles.validPhone}>
            +38 (XXX) XXX - XX - XX
          </span>
        </Container>
      </Container>
      <Container className="radio-select-container">
        <p className="select-title">Select your position</p>
        {positions ? (
          positions.map(({ name, id }, index) => (
            <Container className="radio-label-container" key={name + id}>
              <input
                type="radio"
                name="position_id"
                value={id}
                id={name}
                required
                defaultChecked={!index}
              />
              <label htmlFor={name} className="radio-label">
                {name}
              </label>
            </Container>
          ))
        ) : (
          <Loader />
        )}
      </Container>
      <Container className="img-load-container">
        <input type="file" ref={imgFile} name="photo" required />
      </Container>
      <Button name="Sign up" type="submit" />
    </form>
  );
}

export default Form;
