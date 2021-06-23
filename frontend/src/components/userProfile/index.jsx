import React, { Component } from 'react';
import "./userProfile.css";
import { RiImageAddLine } from "react-icons/ri";  
import firebase from "../signup/fire";

//
//profileImage:"https://i.pinimg.com/originals/26/c8/b4/26c8b491064f67253f7c6b491ea9b4ea.png"
//    profileImage:"https://data.whicdn.com/images/346995968/original.jpg"
export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      profileImage:"https://data.whicdn.com/images/346707003/original.jpg"
    }
  }
  render() {
    const {profileImage} = this.state;
    return (
      <div className="page">
        <div className="container">
          <h1 className="heading">Profile</h1>
          <div className="imageHolder">
            <img src={profileImage} alt="" id="img" className="img"></img>
          </div>
          <div>
            <input type="file" name="image-upload" id="input" accept="image/*"/>
            <div className="label">
              <label htmlFor="input" className="image-upload">
                <RiImageAddLine size="18px" color="black"/>
                Choose your photo
              </label>
            </div>
          </div>
          <div>
            <h4></h4>
          </div>
        </div>
      </div>
    )
  }
}