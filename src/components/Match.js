import React from "react";

const Match = ({ match }) => {
  return (
    <div className="match">
      <div className="date">
        Match-{match.id} | {match.date}
      </div>
      <div className="time">
        {match.time} {match["pm/am"]} IST
      </div>
      <hr />
      <div className="teams">
        <div className="team-1">
          <div className="team-logo">
            <img src={match.logo_home_team} className="w-100" alt="LOGO" />
          </div>
          <div className="team-name-1">{match.home_team}</div>
        </div>
        <span className="vs">VS</span>
        <div className="team-2">
          <div className="team-name-2">{match.away_team}</div>
          <div className="team-logo">
            <img src={match.logo_away_team} className="w-100" alt="LOGO" />
          </div>
        </div>
      </div>
      <hr />
      <div>{match.venue}</div>
      <hr />
    </div>
  );
};

export default Match;
