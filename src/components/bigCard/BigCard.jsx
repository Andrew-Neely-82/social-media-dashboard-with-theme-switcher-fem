const BigCard = ({ className, lineClass, icon, iconName, username, followers, followerType, statIcon, statIconName, statNumber, statColor }) => {
  return (
    <div className={`big-card-${className}`}>
      <div className={lineClass} />
      <div className="platform">
        <img src={icon} alt={iconName} />
        <span>@{username}</span>
      </div>
      <div className="followers-container">
        <h3>{followers}</h3>
        <span className="follower-type">{followerType}</span>
      </div>
      <div className="stats-container">
        <img src={statIcon} alt={statIconName} />
        <span className={`stat-number ${statColor}`}>{statNumber} Today</span>
      </div>
    </div>
  );
};

export default BigCard;
