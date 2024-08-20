import { Audio } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <Audio color="orange" height={120} width={120} wrapperClass={css.loader} />
  );
};

export default Loader;
