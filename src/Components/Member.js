import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Member = ({ member }) => {
  const { name, img, fullnameEn, team, birthday } = member;
  return (
    <Wrapper>
      <div className="single-member">
        <div className="img-container">
          <img src={img} alt="" className="mem-img" />
        </div>
        <div className="mem-info">
          <h2 className="mem-name">{name}</h2>
          <p>Name : {fullnameEn.join(" ")}</p>
          <p>Team : {team}</p>
          <p>Date of Birth : {birthday}</p>
          <div className="link-container">
            <Link to={`/${name.toLowerCase()}`} className="link">
              More Details
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 3rem;
  // background: #fffd98;
  border-radius: 5%;
  border: black 2px solid;
  box-shadow: 5px 10px 8px #888888;
  .single-member {
    padding: 1.5rem;
    width: 30rem;
  }
  .img-container {
    text-align: center;
  }
  .link-container {
    text-align: center;
  }
  .link {
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
  }
  .link:hover {
    color: #2660a4;
    text-decoration: underline;
  }
  .mem-img {
    height: 24rem;
  }
  .topic-text {
    color: blue;
  }
  span {
    color: black;
  }
  .mem-name {
    text-align: center;
  }
`;
export default Member;
