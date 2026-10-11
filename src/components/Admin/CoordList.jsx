import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../Layout/PageLayout";
import { Button, Select, RegInput } from "../../App";

export default function List({ handleStateChange, state, lgas }) {
  const rows = [
    { id: 1, name: "Mohammed Adamu", phone: "09084849884", state: "Lagos", lga: "Eti-Osa", ward: "Ward 3" },
    { id: 2, name: "Fatima Bello", phone: "08023456789", state: "Kano", lga: "Dala", ward: "Ward 1" },
    { id: 3, name: "Chukwuemeka Obi", phone: "07012345678", state: "Enugu", lga: "Enugu North", ward: "Ward 5" },
    { id: 4, name: "Amina Yusuf", phone: "09098765432", state: "Katsina", lga: "Katsina", ward: "Ward 2" },
    { id: 5, name: "Tunde Adesanya", phone: "08134567890", state: "Oyo", lga: "Ibadan North", ward: "Ward 7" },
  ];

  return (
    <PageLayout>
      <div className="page-header">
        <h5 className="page-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#006e3d" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
          </svg>
          Coordinators
        </h5>
        <Link to="/CreateCoord">
          <Button>+ Add Coordinator</Button>
        </Link>
      </div>

      <div className="stat-cards">
        <div className="stat-card stat-coord">
          <div className="stat-label">Total Coordinators</div>
          <p className="stat-value">190</p>
        </div>
      </div>

      <div className="filter-bar">
        <Select onChange={handleStateChange} style={{ width: "160px" }}>
          <option value="">All States</option>
          {state.map((s, i) => <option key={i}>{s}</option>)}
        </Select>
        <Select style={{ width: "160px" }}>
          <option value="">All LGAs</option>
          {lgas.map((lga, i) => <option key={i}>{lga}</option>)}
        </Select>
        <RegInput placeholder="Search polling unit…" style={{ width: "180px" }} />
      </div>

      <div className="table-card">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Phone Number</th>
                <th>State</th>
                <th>LGA</th>
                <th>Ward</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td style={{ color: "#a0aec0", fontWeight: 600 }}>{r.id}</td>
                  <td style={{ fontWeight: 600 }}>{r.name}</td>
                  <td>{r.phone}</td>
                  <td>{r.state}</td>
                  <td>{r.lga}</td>
                  <td>{r.ward}</td>
                  <td>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button className="btn-action btn-edit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        </svg>
                        Edit
                      </button>
                      <button className="btn-action btn-delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}
