import "./RightFeed.css";

const RightFeed = () => {
  return (
    <>
    <div className="content-grid">
      <div className="column-right desktop-tablet-only">
        <div className="fixed-area">
          <div className="sponsored">
            <span className="title">Sponsored</span>
            <div className="sponsor-list">
              <div className="sponsor-item">
                <img src="/images/sponsor-1.jpg" alt="Sponsor 1" />
                <div className="sponsor-info">
                  <span>Create your perfect video</span>
                  <div>artlist.io</div>
                </div>
              </div>
              <div className="sponsor-item">
                <img src="/images/sponsor-2.jpg" alt="Sponsor 2" />
                <div className="sponsor-info">
                  <span>Create your perfect video</span>
                  <div>artlist.io</div>
                </div>
              </div>
            </div>
          </div>

          <div className="separator"></div>

          <div className="birthdays">
            <span className="title">Birthdays</span>
            <div className="info">
              <i className="birthday-icon"></i>
              <span><strong>Cydney Barron</strong> and <strong>4 others</strong> have birthdays today.</span>
            </div>
          </div>

          <div className="separator"></div>

          <div className="contacts">
            <div className="header">
              <span className="title">Contacts</span>
              <div className="actions">
                <i className="contact-live-video-icon"></i>
                <i className="contact-search-icon"></i>
                <i className="contact-menu-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default RightFeed;
