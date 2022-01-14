import React from "react";
import Teams from "./Teams";
import styled from "styled-components";
import Member from "./Member";
import Footer from "./Footer";
const MemberList = ({ members, filterMem, teams, all }) => {
  return (
    <Wrapper>
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        BNK48 Members
      </h4>
      <Teams teams={teams} filterMem={filterMem} members={members} all={all} />
      <div className="members-container">
        {members.map((mem, i) => {
          const { name, img, team } = mem;
          return <Member key={i} member={mem} />;
        })}
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  background: #fffff3;
  align-items: center;
  .section {
    padding: 3.5rem;
  }

  .members-container {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    .members-container {
      display: grid;
      place-items: center;
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 1000px) and (min-width: 769px) {
    .members-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
export default MemberList;
