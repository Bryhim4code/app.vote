import "./App.css";
import "./main.scss";

import List from "./components/Admin/CoordList";
import CRCoord from "./components/Admin/CreateCoord";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import naijaStateLocalGovernment from "naija-state-local-government";

import styled from "styled-components";
import { useState } from "react";
import CreateVoters from "./components/Admin/CreateVoters";
import EditVoters from "./components/Admin/EditVoters";
import VotersList from "./components/Admin/VotersList";
import Admin from "./components/Auth/Admin";

export const RegInput = styled.input`
  padding: 10px 14px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  width: 100%;
  font-size: 0.9rem;
  font-family: "Gilroy-Regular", sans-serif;
  color: #1a202c;
  background: #fafafa;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder { color: #a0aec0; }
  &:focus {
    border-color: #006e3d;
    background: white;
    box-shadow: 0 0 0 3px rgba(0, 110, 61, 0.1);
  }
`;

export const Select = styled.select`
  padding: 10px 14px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  width: 100%;
  font-size: 0.9rem;
  font-family: "Gilroy-Regular", sans-serif;
  color: #1a202c;
  background: #fafafa;
  appearance: auto;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #006e3d;
    background: white;
    box-shadow: 0 0 0 3px rgba(0, 110, 61, 0.1);
  }
`;

export const Button = styled.button`
  padding: 10px 28px;
  background: #006e3d;
  border: none;
  border-radius: 8px;
  color: white;
  font-family: "Gilroy-Bold", sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 110, 61, 0.25);

  &:hover {
    background: #005530;
    box-shadow: 0 4px 12px rgba(0, 110, 61, 0.35);
  }
  &:active { transform: scale(0.98); }
`;

const stateData = naijaStateLocalGovernment.states();

function App() {
  const [voteStatus, setVoteStatus] = useState(false);
  const [voters, setVoters] = useState(null);
  const [frontPvc, setFrontPvc] = useState(null);
  const [backPvc, setBackPvc] = useState(null);
  const [profPic, setProfpic] = useState(null);
  const [coordinator, setCordinators] = useState([]);
  const [lgas, setLgas] = useState([]);

  const handleStateChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      const data = naijaStateLocalGovernment.lgas(selectedValue);
      setLgas(data ? data.lgas : []);
    } else {
      setLgas([]);
    }
  };

  const handleVoteStatus = () => setVoteStatus((prev) => !prev);

  const handleFrontPvcChange = (e) => {
    if (e.target.files?.[0]) {
      if (frontPvc) URL.revokeObjectURL(frontPvc);
      setFrontPvc(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleBackPvcChange = (e) => {
    if (e.target.files?.[0]) {
      if (backPvc) URL.revokeObjectURL(backPvc);
      setBackPvc(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleProfileChange = (e) => {
    if (e.target.files?.[0]) {
      if (profPic) URL.revokeObjectURL(profPic);
      setProfpic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleVotersChange = (e) => {
    if (e.target.files?.[0]) {
      if (voters) URL.revokeObjectURL(voters);
      setVoters(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin Button={Button} RegInput={RegInput} />} />
        <Route path="/Admin" element={<Admin Button={Button} RegInput={RegInput} />} />
        <Route path="/Signin" element={<Signin Button={Button} RegInput={RegInput} />} />
        <Route path="/Signup" element={<Signup Button={Button} RegInput={RegInput} />} />
        <Route
          path="/Dashboard"
          element={
            <List
              state={stateData}
              lgas={lgas}
              handleStateChange={handleStateChange}
            />
          }
        />
        <Route
          path="/CreateCoord"
          element={
            <CRCoord
              coordinator={coordinator}
              setCordinators={setCordinators}
              state={stateData}
              lgas={lgas}
              handleStateChange={handleStateChange}
              frontPvc={frontPvc}
              handleFrontPvcChange={handleFrontPvcChange}
              backPvc={backPvc}
              handleBackPvcChange={handleBackPvcChange}
              handleProfileChange={handleProfileChange}
              profPic={profPic}
            />
          }
        />
        <Route
          path="/CreateVoters"
          element={
            <CreateVoters
              state={stateData}
              lgas={lgas}
              handleStateChange={handleStateChange}
              frontPvc={frontPvc}
              handleFrontPvcChange={handleFrontPvcChange}
              backPvc={backPvc}
              handleBackPvcChange={handleBackPvcChange}
              handleProfileChange={handleProfileChange}
              profPic={profPic}
            />
          }
        />
        <Route
          path="/VotersList"
          element={
            <VotersList
              handleVoteStatus={handleVoteStatus}
              voteStatus={voteStatus}
            />
          }
        />
        <Route
          path="/EditVoters"
          element={
            <EditVoters
              state={stateData}
              lgas={lgas}
              handleVotersChange={handleVotersChange}
              voters={voters}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
