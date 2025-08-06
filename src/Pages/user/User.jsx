import "./user.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";

const user = () => {
  return (
    <>
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser">
          <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userConatainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="img"
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Snow</span>
                <span className="userShowUserTitle">Software dev..</span>
              </div>
            </div>

            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>

              <div className="userShowInfo">
                <PermIdentityIcon className="userShowIcon" />
                <span className="userShowInfoTitle">snowback99</span>
              </div>

              <div className="userShowInfo">
                <CalendarTodayIcon className="userShowIcon" />
                <span className="userShowInfoTitle">01 Jan 2000</span>
              </div>

              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroidIcon className="userShowIcon" />
                <span className="userShowInfoTitle">+91 9876543210</span>
              </div>

              <div className="userShowInfo">
                <MailOutlineIcon className="userShowIcon" />
                <span className="userShowInfoTitle">snowback99@gmail.com</span>
              </div>

              <div className="userShowInfo">
                <LocationOnIcon className="userShowIcon" />
                <span className="userShowInfoTitle">Mumbai, India</span>
              </div>
            </div>
          </div>

          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label htmlFor="" type="text">Username</label>
                    <input type="text" name="" placeholder="annaback99" className="userUpdateInput" />
                  </div>
                  <div className="userUpdateItem">
                    <label htmlFor="" type="text">FullName</label>
                    <input type="text" name="" placeholder="Anna becker" className="userUpdateInput" />
                  </div>
                  <div className="userUpdateItem">
                    <label htmlFor="" type="text">Birth Date</label>
                    <input type="text" name="" placeholder="01 Jan 2000" className="userUpdateInput" />
                  </div>
                  <div className="userUpdateItem">
                    <label htmlFor="" type="text">Phone Number</label>
                    <input type="text" name="" placeholder="+91 9876543210" className="userUpdateInput" />
                  </div>
                  <div className="userUpdateItem">
                    <label htmlFor="" type="text">Gmail</label>
                    <input type="text" name="" placeholder="snowback99@gmail.com" className="userUpdateInput" />
                  </div>
                  <div className="userUpdateItem">
                    <label htmlFor="" type="text">Location</label>
                    <input type="text" name="" placeholder="Mumbai, India" className="userUpdateInput" />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUploadUpdate">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="" className="userUpdateImg" />
                    <label htmlFor="file"><PublishIcon className="userUpdateIcon"/></label>
                    <input type="file" name="" id="file" style={{display:"none"}} className="" />
                  </div>
                  <button className="userUpdateButton">Update</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default user;
