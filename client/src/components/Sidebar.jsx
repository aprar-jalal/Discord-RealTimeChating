import React from "react";
import { 
  HiHashtag, 
  HiLogout, 
  HiSparkles, 
  HiPlay, 
  HiCode, 
  HiMusicNote, 
  HiEmojiHappy 
} from "react-icons/hi";

const getChannelIcon = (channelName) => {
  switch (channelName.toLowerCase()) {
    case 'general': return <HiSparkles className="hashtag" style={{ color: '#00b4d8' }} />;
    case 'gaming': return <HiPlay className="hashtag" style={{ color: '#ff4d6d' }} />; 
    case 'coding': return <HiCode className="hashtag" style={{ color: '#2a9d8f' }} />;
    case 'music': return <HiMusicNote className="hashtag" style={{ color: '#ffb703' }} />;
    case 'memes': return <HiEmojiHappy className="hashtag" style={{ color: '#9d4edd' }} />;
    default: return <HiHashtag className="hashtag" />;
  }
};

function Sidebar({
  channels,
  currentChannel,
  setCurrentChannel,
  user,
  onLogout,
}) {
  const pic = "/logo192.png";
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>🔮 UniCord</h3>
      </div>

      <div className="channel-section">
        <p className="section-title">🎈 CHANNELS</p>
        <div className="channel-list">
          {channels.map((ch) => (
            <button
              key={ch}
              className={`channel-btn ${currentChannel === ch ? "active" : ""}`}
              onClick={() => setCurrentChannel(ch)}
            >
              {getChannelIcon(ch)} 
              <span style={{ marginLeft: "4px" }}>{ch}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="user-profile-bar">
        <div className="user-info">
          <div className="user-avatar">
            <img
              src={pic}
              alt="User Avatar"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
          <span className="username-display">{user?.username}</span>
        </div>
        <button className="logout-btn" onClick={onLogout} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <HiLogout size={16} />
          Exit
        </button>
      </div>
    </div>
  );
}

export default Sidebar;