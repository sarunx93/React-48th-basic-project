import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data";
const SingleMember = () => {
  const { name } = useParams();

  const [singleMember, setSingleMember] = useState([]);
  const findMem = (memName) => {
    const selectedMember = data.find(
      (mem) => mem.name.toLowerCase() === memName.toLowerCase()
    );

    setSingleMember(selectedMember);
  };
  console.log(singleMember);

  const calcAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const diff_ms = Date.now() - dob.getTime();
    const ageDt = new Date(diff_ms);
    console.log(ageDt.getUTCFullYear());
    return Math.abs(ageDt.getUTCFullYear() - 1970);
  };

  useEffect(() => {
    findMem(name);
  }, []);
  return (
    <section>
      <img src={singleMember.img} alt="" />
      <h1>Age : {calcAge(singleMember.birthday)}</h1>
    </section>
  );
};
export default SingleMember;
