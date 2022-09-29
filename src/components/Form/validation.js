export const input = {
  required: "This field is required",
  messageName: "Name should contain 2-60 characters",
  messageEmailValid: "Email must be a valid according to RFC2822",
  messageEmail: "Email should contain 2-100 characters",
  messagePhone:
    "Number should start with code of Ukraine +380 \n and 9 digits as well",
  phoneValid: /^[+]{0,1}380([0-9]{9})$/,
  emailValid:
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
  imageSize: "Image size should be less than 5 MB",
  imageType: "Image type should be JPEG/JPG",
  imageResolution: "Image resolution should be more than 70x70",
};
