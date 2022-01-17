import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = ({ members, searchTerm, setSearchTerm, setMembers, data }) => {
  const filterMember = (name) => {
    if (name) {
      const filteredMembers = members.filter(
        (mem) => mem.name.toLowerCase() === name.toLowerCase()
      );
      setMembers(filteredMembers);
    } else {
      setMembers(data);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    filterMember(searchTerm);
  };

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-links">
          <Link to="/" className="project-title">
            <h4>48 group basic project</h4>
          </Link>
          <form onSubmit={submitHandler} className="form-control">
            <label htmlFor="name" className="form-title">
              Search you favorite members
            </label>
            <input
              type="text"
              name="name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 4rem;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background: #030301;

  label {
    color: #fffff3;
  }
  .project-title {
    color: #ffffa3;
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-links {
    display: block;
    text-align: center;
  }

  .form-control {
    text-align: center;
  }
  .input-text {
    margin-left: 0.75rem;
  }
  .form-title {
    font-size: 1.25rem;
    margin-right: 0.75rem;
    color: #ffffa3;
  }

  @media screen and (min-width: 900px) {
    .nav-links {
      display: flex;
      justify-content: space-between;
    }
    .nav-center {
      left: 0;
    }
  }
`;

export default Navbar;
