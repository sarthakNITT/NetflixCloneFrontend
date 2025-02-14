import React from "react";
import "./index.css";

const profiles = [
  {
    name: "sarthakkarode...",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
  },
  {
    name: "Children",
    img: "https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZp1QjF-MA1ehHWAdqxSJ6c-iIVhFECkF-DPmV35IFRQMg_e-lx2X1rbxyB224cKM5f-TnQReIJgwsE3E00uWDVnWLAxpymR2A.png?r=54d", // Replace with actual online link
  },
];

const ProfileSelection = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Who's watching?</h1>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-item">
            <img
              src={profile.img}
              alt={profile.name}
              className="profile-image"
            />
            <p className="profile-name">{profile.name}</p>
          </div>
        ))}
        <div className="profile-item">
          <div className="add-profile">+</div>
          <p className="profile-name">Add Profile</p>
        </div>
      </div>
      <button className="manage-button">Manage Profiles</button>
    </div>
  );
};

export default ProfileSelection;
