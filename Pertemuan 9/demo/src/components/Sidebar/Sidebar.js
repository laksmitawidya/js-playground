import logo from "../../assets/logo.png";
import homeIcon from "../../assets/homeIcon.svg";
import libraryIcon from "../../assets/libraryIcon.svg";
import searchIcon from "../../assets/searchIcon.svg";
import podcastIcon from "../../assets/podcast.svg";
import plusIcon from "../../assets/plusIcon.svg";
import favIcon from "../../assets/favoriteIcon.svg";
import installIcon from "../../assets/installIcon.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="logo" src={logo} alt="logo" />
      <MainSidebarDemo />
      <PlaylistActionSidebar />
      <PlaylistSongSidebar />
      <InstallApp />
    </div>
  );
};

const MainSidebarDemo = () => {
  return (
    <div className="mainSidebar">
      <div className="mainSidebarItem">
        <div className="mainSidebarItemIcon">
          <img src={homeIcon} alt="icon not found" />
        </div>
        <div className="mainSidebarItemText">Home</div>
      </div>
      <div className="mainSidebarItem">
        <div className="mainSidebarItemIcon">
          <img src={searchIcon} alt="icon not found" />
        </div>
        <div className="mainSidebarItemText">Search</div>
      </div>
      <div className="mainSidebarItem">
        <div className="mainSidebarIcon">
          <img src={libraryIcon} alt="icon not found" />
        </div>
        <div className="mainSidebarItemText">Your Library</div>
      </div>
    </div>
  );
};

const MainSidebar = () => {
  return (
    <div className="mainSidebar">
      <div className="mainSidebarItem">
        <span className="mainSidebarIcon">
          <img src={homeIcon} alt="homeIcon" />
        </span>
        <span>Home</span>
      </div>
      <div className="mainSidebarItem">
        <span className="mainSidebarIcon">
          <img src={searchIcon} alt="searchIcon" />
        </span>
        <span>Search</span>
      </div>
      <div className="mainSidebarItem">
        <span className="mainSidebarIcon">
          <img src={libraryIcon} alt="libraryIcon" />
        </span>
        <span>Your Library</span>
      </div>
    </div>
  );
};

const PlaylistActionSidebar = () => {
  return (
    <div className="playlistActionSidebar">
      <div className="playlistActionSidebarItem">
        <span className="playlistActionSidebarIcon">
          <img src={plusIcon} alt="plusIcon" />
        </span>
        <span className="playlistActionSidebarText">Create Playlist</span>
      </div>
      <div className="playlistActionSidebarItem">
        <span className="playlistActionSidebarLikedIcon">
          <img src={favIcon} alt="favIcon" />
        </span>
        <span className="playlistActionSidebarText">Liked Songs</span>
      </div>
      <div className="playlistActionSidebarItem">
        <span className="playlistActionSidebarPodcastIcon">
          <img src={podcastIcon} alt="podcastIcon" />
        </span>
        <span className="playlistActionSidebarText">Your Episodes</span>
      </div>
    </div>
  );
};

const PlaylistSongSidebar = () => {
  return (
    <div className="playlistSongSidebar">
      <div className="playlistSongSidebarText">FAV</div>
      <div className="playlistSongSidebarText">Daily Mix 1</div>
      <div className="playlistSongSidebarText">Discover Weekly</div>
      <div className="playlistSongSidebarText">Mayalayam</div>
      <div className="playlistSongSidebarText">Dance/Electronic Mix</div>
      <div className="playlistSongSidebarText">EDM / Popular</div>
    </div>
  );
};

const InstallApp = () => {
  return (
    <div className="installApp">
      <img src={installIcon} alt="installIcon"></img>
      <span>Install App</span>
    </div>
  );
};

export default Sidebar;
