import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const toTheTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Wrapper>
      <h2 className="back-to-top">Back to top</h2>

      <button className="to-top-btn" onClick={toTheTop}>
        <FontAwesomeIcon icon={faArrowAltCircleUp} />
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  background: #030301;
  justify-content: center;
  display: flex;
  padding: 0.75rem;
  margin-top: 2rem;
  .back-to-top {
    margin-right: 3rem;
    color: #ffffa3;
  }
  .btn-container {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    justify-content: center;
  }
  .to-top-btn {
    background: transparent;
    font-size: 30px;
    border: none;
    cursor: pointer;
    color: #ffffa3;
  }
  .to-top-btn:hover {
    color: #3affff;
  }
`;
export default Footer;
