import React from "react"
import People from "../images/people-overlay.png"

const TeamMember = () => {
  return (
    <div className="team _team-member">
      <a href="/people/bogomil-balkansky/">
        <div className="_content">
          <div
            style={{ backgroundImage: `url(${People})` }}
            className="_overlay"
          >
            <div className="_overlay-content">
              <div className="_member-name -headline -white">
                Bogomil Balkansky
              </div>
              <button className="-border-button--white">
                <div className="_border"></div>
                <span className="_cta">VIEW PROFILE</span>
              </button>
            </div>
          </div>
          <span className="responsive-image-set">
            <img
              className="_profile-photo js-lazy-image-large -large -is-loaded -is-lazy-handled"
              src="https://via.placeholder.com/475x425"
            />
          </span>
        </div>
        <div className="_member-name-small">Bogomil Balkansky</div>
      </a>
    </div>
  )
}

export default TeamMember
