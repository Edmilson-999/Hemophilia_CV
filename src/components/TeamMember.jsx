import React from 'react';
import '../styles/TeamMember.css';

const TeamMember = ({ name, position, photo, bio }) => {
  return (
    <div className="team-member">
      <div className="member-photo">
        <img src={photo} alt={name} />
      </div>
      <div className="member-info">
        <h3>{name}</h3>
        <p className="position">{position}</p>
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;