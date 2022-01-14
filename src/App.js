import React, { useState } from "react";
import Teams from "./Components/Teams";
import MemberList from "./Components/MemberList";
import data from "./data";
import Navbar from "./Components/Navbar";
import SingleMember from "./pages/SingleMember";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const allTeams = ["All", ...new Set(data.map((item) => item.team))];
console.log(data[0]);
const App = () => {
  const [members, setMembers] = useState(data);
  const [teams, setTeams] = useState(allTeams);
  const [searchTerm, setSearchTerm] = useState("");
  const [all, setAll] = useState(true);

  const filterMem = (team) => {
    if (team === "All") {
      setMembers(data);
      setAll(true);
      return;
    }
    const filteredMem = data.filter((mem) => mem.team === team);
    setMembers(filteredMem);
    setAll(false);
    console.log(filteredMem);
  };

  return (
    <Router>
      <section>
        <Navbar
          members={members}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          data={data}
          setMembers={setMembers}
        />
        <div>
          <h2 className="title">BNK48 Members</h2>
          <Routes>
            <Route
              path="/"
              element={
                <MemberList
                  members={members}
                  filterMem={filterMem}
                  teams={teams}
                  all={all}
                />
              }
            />
            <Route path="/:name" element={<SingleMember />} />
          </Routes>
        </div>
      </section>
    </Router>
  );
};

export default App;
