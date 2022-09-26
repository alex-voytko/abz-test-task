import { ColorRing } from "react-loader-spinner";

function Loader() {
  return (
    <ColorRing
      visible={true}
      height="48"
      width="48"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
      }}
      wrapperClass="blocks-wrapper"
      colors={["#00BDD3", "#00BDD3", "#00BDD3", "#00BDD3", "#00BDD3"]}
    />
  );
}

export default Loader;
