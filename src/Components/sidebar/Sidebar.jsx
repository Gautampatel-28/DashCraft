import "./sidebar.css";
import {
  LineStyle as LineStyleIcon,
  Timeline as TimelineIcon,
  TrendingUp as TrendingUpIcon,
  PermIdentity as PermIdentityIcon,
  ProductionQuantityLimits as ProductionQuantityLimitsIcon,
  Paid as PaidIcon,
  Report as ReportIcon,
  Mail as MailIcon,
  Feedback as FeedbackIcon,
  Message as MessageIcon,
  ManageAccounts as ManageAccountsIcon,
  Analytics as AnalyticsIcon,
  Assessment as AssessmentIcon
} from "@mui/icons-material";


const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sideTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active"> 
                <LineStyleIcon className="sidebarIcon"/>
                Home
              </li>
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon"/>
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUpIcon className="sidebarIcon"/>
                Sales
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sideTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon"/>
                Users
              </li>
              <li className="sidebarListItem">
                <ProductionQuantityLimitsIcon className="sidebarIcon"/>
                Products
              </li>
              <li className="sidebarListItem">
                <PaidIcon className="sidebarIcon"/>
                Transactions
              </li>
              <li className="sidebarListItem">
                <AssessmentIcon className="sidebarIcon"/>
                Reports
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sideTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem" active>
                <MailIcon className="sidebarIcon"/>
                Mail
              </li>
              <li className="sidebarListItem">
                <FeedbackIcon className="sidebarIcon"/>
                Feedback
              </li>
              <li className="sidebarListItem">
                <MessageIcon className="sidebarIcon"/>
                Messages
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sideTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem" active>
                <ManageAccountsIcon className="sidebarIcon"/>
                Manage
              </li>
              <li className="sidebarListItem">
                <AnalyticsIcon className="sidebarIcon"/>
                Analytics
              </li>
              <li className="sidebarListItem">
                <ReportIcon className="sidebarIcon"/>
                Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
