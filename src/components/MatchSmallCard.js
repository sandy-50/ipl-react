import React from "react";
import { Link } from "react-router-dom";

export default function MatchSmallCard({ teamName, match }) {
  if (!match) return null;

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/team/${otherTeam}`;
  const isMatchWon = teamName === match.winner;
  return (
    <div
      className={
        isMatchWon ? "MatchSmallCard won-card" : "MatchSmallCard lost-card"
      }
    >
      <span className="vs">vs</span>
      <h1>
        <Link
          to={otherTeamRoute}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {otherTeam}
        </Link>
      </h1>
      <p className="match-result">
        {match.winner} won by {match.result_margin} {match.result}{" "}
      </p>
    </div>
  );
}
