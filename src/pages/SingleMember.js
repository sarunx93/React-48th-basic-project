// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import data from "../data";
// import styled from "styled-components";
// const SingleMember = () => {
//   const { name } = useParams();

//   const [singleMember, setSingleMember] = useState([]);
//   const findMem = (memName) => {
//     const selectedMember = data.find(
//       (mem) => mem.name.toLowerCase() === memName.toLowerCase()
//     );

//     setSingleMember(selectedMember);
//   };
//   console.log(singleMember);
//   const calcAge = (dateOfBirth) => {
//     const dob = new Date(dateOfBirth);
//     const diff_ms = Date.now() - dob.getTime();
//     const ageDt = new Date(diff_ms);

//     return Math.abs(ageDt.getUTCFullYear() - 1970);
//   };

//   const formatDate = (dob) => {
//     const dateDob = new Date(dob).toGMTString().substring(5, 16);
//     console.log(dateDob);
//     return dateDob;
//   };

//   useEffect(() => {
//     findMem(name);
//   }, [name]);
//   return (
//     <Wrapper>
//       <section>
//         <div className="img-container">
//           <img src={singleMember.img} alt="" className="mem-img" />
//         </div>
//         <div className="mem-info">
//           <h2>{singleMember.name.toUpperCase()}</h2>
//           <h4>{singleMember.fullnameEn.join(" ")}</h4>
//           <h4>Date of birth : {formatDate(singleMember.birthday)}</h4>
//           <h4>Age : {calcAge(singleMember.birthday)}</h4>
//         </div>
//       </section>
//       <h1>hello</h1>
//     </Wrapper>
//   );
// };

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data";
import styled from "styled-components";

const SingleMember = () => {
  const { name } = useParams();

  const [singleMember, setSingleMember] = useState([]);
  const findMem = (memName) => {
    const selectedMember = data.find(
      (mem) => mem.name.toLowerCase() === memName.toLowerCase()
    );

    let { fullnameEn, hobby } = selectedMember;
    const fullName = fullnameEn.join(" ");
    const hobbies = hobby.join(", ");

    setSingleMember({ ...selectedMember, fullName, hobby: hobbies });
    console.log(singleMember.fullName);
  };
  console.log(singleMember);

  const formatDate = (dob) => {
    const dateDob = new Date(dob).toGMTString().substring(5, 16);
    console.log(dateDob);
    return dateDob;
  };

  const calcAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const diff_ms = Date.now() - dob.getTime();
    const ageDt = new Date(diff_ms);
    console.log(ageDt.getUTCFullYear());
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
            <h3>Name : {singleMember.fullName}</h3>
            <h3>Date of Birth : {formatDate(singleMember.birthday)}</h3>
            <h3>Age : {calcAge(singleMember.birthday)}</h3>
            <h3>Hobbies : {singleMember.hobby}</h3>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .project-title {
    color: #ffffa3;
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
  }
  .to-home-link {
    cursor: pointer;
  }
`;
export default SingleMember;
