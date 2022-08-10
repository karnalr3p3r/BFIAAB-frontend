import React from "react";
import GirlSinging from "./videos/singing.mp4";
import LoriProfile from "../../photos/lori/lori-conrad.jpg";
import "./board.css";

export default function Board() {
  return (
    <div className="board-page-container">
      <div className="board-header">
        <div className="header-container">
          <div className="header-title">Why We Do What We Do</div>
        </div>
      </div>
      <div className="board-video-container">
        <video
          height="350px"
          className="homepage-video-mp4"
          controls
          src={GirlSinging}
          type="video/mp4"
        ></video>
      </div>
      <div className="board-profiles">
        <div className="board-container">
          <div className="picture-container">
            <img src={LoriProfile} className="photo-image" alt=""></img>
          </div>
          <div className="board-details-container">
            <div className="profile-name">
              <h2>Lori Conrad</h2>
            </div>
            <div className="board-position-container">
              <p>Board Position: Founder</p>
            </div>
            <div className="profile-description">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
        <div className="board-container">
          <div className="picture-container">
            <img src={LoriProfile} className="photo-image" alt=""></img>
          </div>
          <div className="board-details-container">
            <div className="profile-name">
              <h2>Devon Dominick</h2>
            </div>
            <div className="board-position-container">
              <p>Board Position: President</p>
            </div>
            <div className="profile-description">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
        <div className="board-container">
          <div className="picture-container">
            <img src={LoriProfile} className="photo-image" alt=""></img>
          </div>
          <div className="board-details-container">
            <div className="profile-name">
              <h2>Linda Smith</h2>
            </div>
            <div className="board-position-container">
              <p>Board Position: Vice President</p>
            </div>
            <div className="profile-description">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
        <div className="board-container">
          <div className="picture-container">
            <img src={LoriProfile} className="photo-image" alt=""></img>
          </div>
          <div className="board-details-container">
            <div className="profile-name">
              <h2>Donna Joiner</h2>
            </div>
            <div className="board-position-container">
              <p>Board Position: Secretary</p>
            </div>
            <div className="profile-description">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
        <div className="board-container">
          <div className="picture-container">
            <img src={LoriProfile} className="photo-image" alt=""></img>
          </div>
          <div className="board-details-container">
            <div className="profile-name">
              <h2>Gabriella Gonsalves</h2>
            </div>
            <div className="board-position-container">
              <p>Board Position: Treasurer</p>
            </div>
            <div className="profile-description">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
        <div className="board-container">
          <div className="picture-container">
            <img src={LoriProfile} className="photo-image" alt=""></img>
          </div>
          <div className="board-details-container">
            <div className="profile-name">
              <h2>Heather Dominick</h2>
            </div>
            <div className="board-position-container">
              <p>Board Position: Memeber</p>
            </div>
            <div className="profile-description">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
        <div className="board-container">
          <div className="picture-container">
            <img src={LoriProfile} className="photo-image" alt=""></img>
          </div>
          <div className="board-details-container">
            <div className="profile-name">
              <h2>Theresa Mulloy</h2>
            </div>
            <div className="board-position-container">
              <p>Board Position: Member</p>
            </div>
            <div className="profile-description">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
        <div className="board-container">
          <div className="picture-container">
            <img src={LoriProfile} className="photo-image" alt=""></img>
          </div>
          <div className="board-details-container">
            <div className="profile-name">
              <h2>Herman Montgomery Green</h2>
            </div>
            <div className="board-position-container">
              <p>Board Position: Member</p>
            </div>
            <div className="profile-description">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
