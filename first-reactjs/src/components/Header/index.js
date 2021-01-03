import "./Header.scss";
import HeaderItem from "../HeaderItem";

// props = {
//   children: ""
// }

const Header = (props) => {
  const { children ,  isFluid} = props;
  // const children = props.children; // the same as above

  return (
    <div className={`header ${isFluid ? "fluid": ""}`}  >
      { children }
    </div>
  );
};

export default Header;
