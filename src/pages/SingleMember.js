import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SingleMember = () => {
  const { name } = useParams();

  const [singleMember, setSingleMember] = useState([]);
  const findMem = (memName) => {
    const selectedMember = data.find(
      (mem) => mem.name.toLowerCase() === memName.toLowerCase()
    );

    let { fullnameEn, hobby, favorite, follow } = selectedMember;
    const fullName = fullnameEn.join(" ");
    const hobbies = hobby.join(", ");
    const favorites = favorite.join(", ");
    const facebook = follow[0];
    const ig = follow[1];

    setSingleMember({
      ...selectedMember,
      fullName,
      hobby: hobbies,
      favorite: favorites,
      facebook,
      ig,
    });
  };

  const formatDate = (dob) => {
    const dateDob = new Date(dob).toGMTString().substring(5, 16);
    // console.log(dateDob);
    return dateDob;
  };

  const calcAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const diff_ms = Date.now() - dob.getTime();
    const ageDt = new Date(diff_ms);
    // console.log(ageDt.getUTCFullYear());
    return Math.abs(ageDt.getUTCFullYear() - 1970);
  };

  useEffect(() => {
    findMem(name);
  }, [name]);
  return (
    <Wrapper>
      <section>
        <nav className="navbar">
          <div className="nav-title">
            <Link to="/" className="to-home-link">
              <h4 className="project-title">48TH Basic Project</h4>
            </Link>
          </div>
        </nav>
        <article className="member">
          <div className="img-container">
            <img src={singleMember.img} alt="" className="mem-img" />;
          </div>
          <div className="mem-info">
            <h3 className="nickname">{singleMember.name}</h3>
            <h4 className="profile">
              Name : <span>{singleMember.fullName}</span>
            </h4>
            <h4 className="profile">
              Team : <span>{singleMember.team}</span>
            </h4>
            <h4 className="profile">
              Date of Birth : <span>{formatDate(singleMember.birthday)}</span>
            </h4>
            <h4 className="profile">
              Age : <span>{calcAge(singleMember.birthday)}</span>
            </h4>
            <h4 className="profile">
              Province : <span>{singleMember.province}</span>
            </h4>
            <h4 className="profile">
              Favorites : <span>{singleMember.favorite}</span>
            </h4>
            <h4 className="profile">
              Hobbies : <span>{singleMember.hobby}</span>
            </h4>
            <Link to="/" className="home-container">
              <h5 className="home-btn">Back Home</h5>
            </Link>
          </div>
          <div className="social-media">
            <a
              href={singleMember.facebook}
              target="_blank"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={singleMember.ig} target="_blank" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fffff3;
  height: 100%;

  .social-media {
    width: 100%;
    text-align: center;
  }

  .home-btn {
    border: black 2px solid;
    text-align: center;
    padding: 0.75rem;
    color: #030301;
    font-size: 1.5rem;
  }
  .home-btn:hover {
    background: #030301;
    transition: var(--transition);
    color: #ffffa3;
  }

  .social-icon {
    margin-right: 3rem;
    font-size: 2rem;
    color: #030301;
  }
  .social-icon:hover {
    color: #af929d;
  }

  .project-title {
    color: #ffffa3;
  }
  h4 {
    color: #030301;
  }
  span {
    color: #af929d;
  }
  .navbar {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    top: 0;
    background: #030301;
  }
  .img-container {
    text-align: center;
  }
  .member {
    padding: 3.5rem;
  }
  .mem-img {
    height: 30rem;
  }
  .mem-info {
    margin: 1rem auto;
    width: 40rem;
  }
  .nickname {
    text-align: center;
    text-transform: uppercase;
    color: #703d57;
  }
  .to-home-link {
    cursor: pointer;
  }
  .profile {
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }
  @media screen and (min-width: 900px) {
    section {
      height: 100vh;
    }
    .member {
      display: grid;
      place-items: center;
      grid-template-columns: 1fr 1fr;
      width: 100vw;
    }
    .social-media {
      margin: 1rem auto;
    }
  }
`;
export default SingleMember;
