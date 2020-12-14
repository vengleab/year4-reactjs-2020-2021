import "./Header.scss";
import HeaderItem from  "../HeaderItem";

const Header = () => {
  return (
    <div className="header">
      {/*<div>Home</div>
      <div>Contact Us</div>
      <div>About Us</div>*/}
      <HeaderItem label="Home" active/>
      <HeaderItem label="Contact Us"/>
      <HeaderItem label="About Us"/>
      <HeaderItem/>

    </div>
  );
};

export default Header;
