import { useState, memo } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

import Container from "../Container";
import Button from "../Button";
import Loader from "../Loader";
import { input } from "./validation";
import isDisabled from "./isDisabled";

function Form({ positions, onSubmit }) {
  const [imgName, setImgName] = useState("Upload your photo");
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
  } = useForm({ mode: "onChange" });

  const handleImageInput = (e) => {
    const { files } = e.target;
    if (files) {
      const reader = new FileReader();
      if (files[0]?.name) setImgName(files[0].name);
      else {
        setImgName("Upload your photo");
        return;
      }
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (e) => {
          if (e.target.height < 70 || e.target.width < 70) {
            setError("photo", {
              type: "checkResolution",
              message: input.imageResolution,
            });
          }
        };
      };
    }
  };

  const styles = {
    name: classNames({ "is-errored": errors.name }),
    validName: classNames("validation-tip", { "is-errored": errors.name }),
    email: classNames({ "is-errored": errors.email }),
    validEmail: classNames("validation-tip", { "is-errored": errors.email }),
    phone: classNames({ "is-errored": errors.phone }),
    validPhone: classNames("validation-tip", {
      "is-errored": errors.phone,
    }),
    staticPhone: classNames("validation-tip", {
      phone: errors.phone,
      "is-errored": errors.phone,
    }),
    image: classNames({ "is-errored": errors.photo }),
    validImage: classNames("validation-tip", { "is-errored": errors.photo }),
    addLabel: classNames("additional-label", {
      "has-loaded": imgName !== "Upload your photo",
    }),
    imgInputContainer: classNames("img-load-container", {
      "is-errored": errors.photo,
    }),
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
          <input
            type="email"
            placeholder="Email"
            className={styles.email}
            {...register("email", {
              required: input.required,
              pattern: {
                value: input.emailValid,
                message: input.messageEmailValid,
              },
              minLength: { value: 2, message: input.messageEmail },
              maxLength: { value: 100, message: input.messageEmail },
            })}
          />
          <label htmlFor="email" className={styles.email}>
            Email
          </label>
          {errors?.email && (
            <span className={styles.validEmail}>{errors?.email?.message}</span>
          )}
        </Container>
        <Container className="input-field-container">
          <input
            className={styles.phone}
            type="tel"
            placeholder="Phone"
            {...register("phone", {
              required: input.required,
              pattern: {
                value: input.phoneValid,
                message: input.messagePhone,
              },
            })}
          />
          <label htmlFor="phone" className={styles.phone}>
            Phone
          </label>
          <span htmlFor="phone" className={styles.staticPhone}>
            +38 (XXX) XXX - XX - XX
          </span>
          {errors?.phone && (
            <span className={styles.validPhone}>{errors?.phone?.message}</span>
          )}
        </Container>
      </Container>
      <Container className="radio-select-container">
        <p className="select-title">Select your position</p>
        {positions ? (
          positions.map(({ name, id }, index) => (
            <Container className="radio-label-container" key={name + id}>
              <input
                type="radio"
                value={id}
                id={name}
                defaultChecked={!index}
                {...register("position_id")}
                required
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
      <Container className={styles.imgInputContainer}>
        <label htmlFor="photo" className={styles.image}>
          Upload
        </label>
        <span className={styles.addLabel}>{imgName}</span>
        <input
          type="file"
          className={styles.image}
          {...register("photo", {
            required: input.required,
            validate: {
              checkSize: (photo) => photo[0].size <= 5000000 || input.imageSize,
              checkType: (photo) =>
                photo[0].type === "image/jpeg" || input.imageType,
            },
            onChange: handleImageInput,
          })}
        />
        {errors?.photo && (
          <span className={styles.validImage}>{errors?.photo?.message}</span>
        )}
      </Container>
      <Button
        name="Sign up"
        type="submit"
        disabled={isDisabled(getValues(), errors)}
      />
    </form>
  );
}

export default memo(Form);
