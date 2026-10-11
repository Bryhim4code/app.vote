import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../Layout/PageLayout";
import { Button, Select, RegInput } from "../../App";

export default function EditVoters({
  handleStateChange,
  handleVotersChange,
  voters,
  lgas,
  state,
}) {
  return (
    <PageLayout>
      <div className="page-header">
        <Link className="back-link" to="/VotersList">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
          Back
        </Link>
        <h5 className="page-title">Edit Voter</h5>
        <div />
      </div>

      <form className="form-card">
        <div className="form-grid">
          <div>
            <div className="form-section-title">Voter Information</div>
            <div className="form-field">
              <label>Full Name</label>
              <RegInput type="text" placeholder="Enter full name" />
            </div>
            <div className="form-field">
              <label>Phone Number</label>
              <RegInput type="tel" placeholder="080-0000-0000" />
            </div>
            <div className="form-field">
              <label>State</label>
              <Select onChange={handleStateChange}>
                <option value="">Select state…</option>
                {state.map((s, i) => <option key={i}>{s}</option>)}
              </Select>
            </div>
            <div className="form-field">
              <label>LGA</label>
              <Select>
                <option value="">Select LGA…</option>
                {lgas.map((lga, i) => <option key={i}>{lga}</option>)}
              </Select>
            </div>
            <div className="form-field">
              <label>Ward</label>
              <RegInput type="text" placeholder="Ward name" />
            </div>
            <div className="form-field">
              <label>Polling Unit</label>
              <RegInput type="text" placeholder="Polling unit name" />
            </div>
          </div>

          <div>
            <div className="form-section-title">Voter Card (PVC)</div>
            <div>
              <div className="upload-label">Voter Image</div>
              <div className="upload-zone" style={{ width: "160px", height: "160px" }}>
                <input type="file" accept="image/*" onChange={handleVotersChange} />
                {voters
                  ? <img src={voters} alt="Voter" className="upload-preview" />
                  : (
                    <div className="upload-placeholder">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#a0aec0" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                      </svg>
                      Upload photo
                    </div>
                  )
                }
              </div>
            </div>

            <div style={{ marginTop: "32px" }}>
              <Button type="submit">Save Changes</Button>
            </div>
          </div>
        </div>
      </form>
    </PageLayout>
  );
}
