import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Notification.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Simulating an API call to fetch notifications
  useEffect(() => {
    const fetchNotifications = () => {
      const notificationData = [
        {
          id: 1,
          title: "New Message from Plant Expert",
          date: "2024-10-09",
          content: "You have received a message regarding plant care tips.",
        },
        {
          id: 2,
          title: "New Sale on Succulents!",
          date: "2024-10-08",
          content: "Get 20% off on all succulents this week!",
        },
        {
          id: 3,
          title: "New Comment on Your Post",
          date: "2024-10-07",
          content: "Someone commented on your recent post about plant propagation.",
        },
        {
          id: 4,
          title: "Planting Season Reminder",
          date: "2024-10-06",
          content: "Now is the perfect time to plant your winter greens.",
        },
      ];
      setNotifications(notificationData);
    };

    fetchNotifications();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-5 addspace">
        <div className="headers mb-4 text-center">
          <h1>Notification History</h1>
        </div>

        <div className="row notification-list">
          {notifications.map((notification) => (
            <div className="col-md-6" key={notification.id}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{notification.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{notification.date}</h6>
                  <p className="card-text">{notification.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notifications;