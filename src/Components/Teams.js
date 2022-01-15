import React, { useState } from "react";
import styled from "styled-components";
const Teams = ({ teams, filterMem, members, all }) => {
  return (
    <Wrapper>
      <div className="btn-container">
        {teams.map((team, i) => {
          return (
            <>
              <button
                key={i}
                type="button"
                onClick={() => filterMem(team)}
                className="team-btn"
              >
                {team}
              </button>
            </>
          );
        })}
      </div>
      <div>
        {all ? (
          <h4 className="number-of-mem-text">
            There are {members.length} members in the group.
          </h4>
        ) : (
          <h4 className="number-of-mem-text">
            There are {members.length} members in team{" "}
            {members.map((mem) => mem.team)[0]}
          </h4>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fffff3;
  .btn-container {
    display: flex;
    justify-content: center;

    width: 60vw;
    margin: 0 auto;
  }

  .team-btn {
    margin-right: 0.75rem;
    background: transparent;
    padding: 1rem;
    cursor: pointer;
    border-radius: 15%;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .team-btn:hover {
    background: #ffffa3;
    transition: all 0.5s linear;
  }
  .number-of-mem-text {
    text-transform: none;
    text-align: center;
    margin-top: 1.5rem;
  }
`;
export default Teams;
