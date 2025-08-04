import "./widgetsm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetSm = () => {
  return (
    <>
      <div className="widgetSm">
        <span className="widgetSetTitle">New Join Members</span><br />
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img src="/images/prf1.jpg" alt="prf1" className="widgetSmImg" />
            <div className="widgetSetUser">
              <span className="widgetSetUserName">Anna Killer</span>
              <span className="widgetSetUserTitle">Software Eng</span>
            </div>
            <button className="widgetSwButton">
              <VisibilityIcon className="widgetSmIcon"/>
              Display
            </button>
          </li>

          <li className="widgetSmListItem">
            <img src="/images/prf2.jpg" alt="prf2" className="widgetSmImg" />
            <div className="widgetSetUser">
              <span className="widgetSetUserName">Riya Mehta</span>
              <span className="widgetSetUserTitle">Frontend Dev</span>
            </div>
            <button className="widgetSwButton">
              <VisibilityIcon className="widgetSmIcon"/>
              Display
            </button>
          </li>

          <li className="widgetSmListItem">
            <img src="/images/prf3.jpg" alt="prf3" className="widgetSmImg" />
            <div className="widgetSetUser">
              <span className="widgetSetUserName">Aditya Rao</span>
              <span className="widgetSetUserTitle">Software Eng</span>
            </div>
            <button className="widgetSwButton">
              <VisibilityIcon className="widgetSmIcon"/>
              Display
            </button>
          </li>

          <li className="widgetSmListItem">
            <img src="/images/prf4.jpg" alt="prf4" className="widgetSmImg" />
            <div className="widgetSetUser">
              <span className="widgetSetUserName">Neha Sharma</span>
              <span className="widgetSetUserTitle">Backend Eng</span>
            </div>
            <button className="widgetSwButton">
              <VisibilityIcon className="widgetSmIcon"/>
              Display
            </button>
          </li>

          <li className="widgetSmListItem">
            <img src="/images/prf5.jpg" alt="prf5" className="widgetSmImg" />
            <div className="widgetSetUser">
              <span className="widgetSetUserName">Kunal Joshi</span>
              <span className="widgetSetUserTitle">Full Stack Dev</span>
            </div>
            <button className="widgetSwButton">
              <VisibilityIcon className="widgetSmIcon"/>
              Display
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WidgetSm;
