const BigCard = ({ className, lineClass, icon, iconName, username, followers, followerType, statIcon, statIconName, statNumber }) => {
  return (
    <div className={`big-card-${className}`}>
      <div className={lineClass} />
      <div className="platform">
        <img src={icon} alt={iconName} />
        <span>@{username}</span>
      </div>
      <div className="followers-container">
        <h1>{followers}</h1>
        <span>{followerType}</span>
      </div>
      <div className="stats-container">
        <img src={statIcon} alt={statIconName} />
        <span className="stat-number">{statNumber} Today</span>
      </div>
    </div>
  );
};

export default BigCard;
