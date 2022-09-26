import { useState } from "react";

import DefaultPhoto from "../../images/svg/photo-cover.svg";

function Image({ src, alt }) {
  const [isErrored, setIsErrored] = useState(false);

  return (
    <>
      <img
        src={!isErrored ? src : DefaultPhoto}
        alt={alt}
        onError={() => setIsErrored(true)}
      />
    </>
  );
}

export default Image;
