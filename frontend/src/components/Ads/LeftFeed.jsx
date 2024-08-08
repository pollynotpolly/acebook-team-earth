import "./LeftFeed.css";

const LeftFeed = () => {
    
  
    return (
    <>
    <div className="content-grid"></div>
    <div className="column-left desktop-tablet-only">
  <div className="fixed-area">
    <ul className="menus">
      <li className="menu-profile-item">
        <img src="/images/profile-320.jpg" alt="Profile" />
        <span>Yongmin Ruucm</span>
      </li>
      <li className="menu-page-item">
        <img src="/images/menu-page.png" alt="Pages" />
        <div>
          <span>Pages</span>
          <div className="new-info">
            <span className="dot"></span>
            <span>5 new</span>
          </div>
        </div>
      </li>
      <li>
        <img src="/images/menu-covid.png" alt="COVID-19 Information Center" />
        <span>COVID-19 Information Center</span>
      </li>
      <li>
        <img src="/images/menu-friends.png" alt="Friends" />
        <span>Friends</span>
      </li>
      <li>
        <img src="/images/menu-groups.png" alt="Groups" />
        <span>Groups</span>
      </li>
      <li>
        <div className="action-button-3">
          <i className="chevron-bottom-icon"></i>
        </div>
        <span>See More</span>
      </li>
    </ul>
    <div className="separator"></div>
    <div className="shortcuts">
      <span className="title">Your Shortcuts</span>
      <ul>
        <li>
          <img src="/images/shortcut-1.jpg" alt="Harbor School" />
          <span>Harbor School</span>
        </li>
        <li>
          <img src="/images/shortcut-2.jpg" alt="Framer Korea" />
          <span>Framer Korea</span>
        </li>
        <li>
          <img src="/images/shortcut-3.jpg" alt="Framer" />
          <span>Framer</span>
        </li>
        <li>
          <div className="action-button-3">
            <i className="chevron-bottom-icon"></i>
          </div>
          <span>See More</span>
        </li>
      </ul>
    </div>
  </div>
</div>


  

    </>
    );
    
}


export default LeftFeed;
