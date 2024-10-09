// src/Components/Profile/Profile.js
import React from 'react';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '../../images/profile_photo.png'; // Placeholder profile image
import Navbar from '../Navbar/Navbar';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';
import Footer from '../Footer/Footer';

function Profile() {
  return (
    <>
    <Navbar/>
    <div className="d-flex">
        {/* Sidebar on the left */}
        <ProfileSidebar />
    <div className="profile-container">
      <div className="profile-card shadow-lg">
        <div className="profile-header text-center">
          <img src={profilePic} alt="Profile" className="profile-picture rounded-circle" />
          <h2 className="profile-name">John Doe</h2>
          <p className="profile-bio">Passionate about gardening and sustainable living</p>
        </div>

        <div className="profile-info">
          <div className="row">
            <div className="col-md-6">
              <div className="profile-field">
                <h5>Username</h5>
                <p>plantLover123</p>
              </div>
              <div className="profile-field">
                <h5>Email ID</h5>
                <p>john.doe@example.com</p>
              </div>
              <div className="profile-field">
                <h5>Contact Number</h5>
                <p>+1234567890</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-field">
                <h5>Level of Experience</h5>
                <p>Intermediate</p>
              </div>
              <div className="profile-field">
                <h5>Topics of Interest</h5>
                <p>Cactus, Urban Gardening</p>
              </div>
              <div className="profile-field">
                <h5>Location</h5>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Profile;