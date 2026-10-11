import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../Layout/PageLayout";
import { Button } from "../../App";

const votersData = [
  { id: 1, name: "Hauwa Musa", phone: "08084393***", state: "Kano", lga: "Dala", ward: "Ward 1", unit: "Sabuwar Kofa", date: "04/15/2026" },
  { id: 2, name: "Emeka Chukwu", phone: "09012345***", state: "Enugu", lga: "Enugu North", ward: "Ward 3", unit: "Achara Layout", date: "04/16/2026" },
  { id: 3, name: "Bisi Adeyemi", phone: "07098765***", state: "Oyo", lga: "Ibadan North", ward: "Ward 5", unit: "Agodi Gate", date: "04/17/2026" },
  { id: 4, name: "Zainab Aliyu", phone: "08123456***", state: "Kaduna", lga: "Zaria", ward: "Ward 2", unit: "Zaria Central", date: "04/18/2026" },
  { id: 5, name: "Ifeanyi Okafor", phone: "09087654***", state: "Anambra", lga: "Onitsha", ward: "Ward 4", unit: "Main Market", date: "04/19/2026" },
];

function VoterRow({ voter, handleVoteStatus }) {
  const [voted, setVoted] = useState(false);

  return (
    <tr>
      <td style={{ color: "#a0aec0", fontWeight: 600 }}>{voter.id}</td>
      <td style={{ fontWeight: 600 }}>{voter.name}</td>
      <td>{voter.phone}</td>
      <td>{voter.state}</td>
      <td>{voter.lga}</td>
      <td>{voter.ward}</td>
      <td>{voter.unit}</td>
      <td style={{ color: "#64748b" }}>{voter.date}</td>
      <td>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <button
            className={`btn-vote-yes${voted ? " active" : ""}`}
            onClick={() => setVoted(true)}
          >
            Yes
          </button>
          <button
            className={`btn-vote-no${!voted ? " active" : ""}`}
            onClick={() => setVoted(false)}
          >
            No
          </button>
          <Link to="/EditVoters">
            <button className="btn-action btn-edit" onClick={handleVoteStatus}>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              </svg>
              Edit
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default function VotersList({ handleVoteStatus }) {
  return (
    <PageLayout>
      <div className="page-header">
        <h5 className="page-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#006e3d" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          PVC Holders
        </h5>
        <Link to="/CreateVoters">
          <Button>+ Add Voter</Button>
        </Link>
      </div>

      <div className="stat-cards">
        <div className="stat-card stat-total">
          <div className="stat-label">Total Registered</div>
          <p className="stat-value">190</p>
        </div>
        <div className="stat-card stat-voted">
          <div className="stat-label">Voted</div>
          <p className="stat-value">1,190</p>
        </div>
      </div>

      <div className="table-card">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Full Name</th>
                <th>Phone</th>
                <th>State</th>
                <th>LGA</th>
                <th>Ward</th>
                <th>Polling Unit</th>
                <th>Registered</th>
                <th>Voted</th>
              </tr>
            </thead>
            <tbody>
              {votersData.map((voter) => (
                <VoterRow key={voter.id} voter={voter} handleVoteStatus={handleVoteStatus} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}
