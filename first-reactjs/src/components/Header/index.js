import "./Header.scss";
import HeaderItem from "../HeaderItem";

const Header = (props) => {
  return (
    <div className="header">
      {props.children}
    </div>
  );
};

export default Header;
