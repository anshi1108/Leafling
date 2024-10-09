import React from 'react';
import ForumNavbar from '../../Forum/ForumNavbar/ForumNavbar';
import SocialMediaSidebar from '../SocialMediaSidebar/SocialMediaSidebar';
import Footer from '../../Footer/Footer';

const SocialMedia = () => {
  return (
    <div>
      {/* Navbar at the top */}
      <ForumNavbar />

      {/* Layout for sidebar and main content */}
      <div className="d-flex">
        {/* Sidebar on the left */}
        <SocialMediaSidebar />

        {/* Main content on the right */}
        <div className="flex-grow-1 p-3">
          {/* Your Social Media Page Content Goes Here */}
          <h1>Welcome to the Social Media Platform</h1>
          <p>This is where your main content for the social media section will be displayed.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SocialMedia;
