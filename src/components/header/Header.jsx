import "./header.css";
import LoriClass from "../../photos/lori/class.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Beautiful Feet In Africa & Beyond</span>
      </div>
      <img className="headerImg" src={LoriClass} alt="" />
    </div>
  );
}
