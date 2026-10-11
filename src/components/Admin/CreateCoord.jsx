import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../Layout/PageLayout";
import { Button, Select, RegInput } from "../../App";

export default function CreateCoord({
  handleBackPvcChange,
  handleFrontPvcChange,
  profPic,
  handleStateChange,
  handleProfileChange,
  frontPvc,
  backPvc,
  lgas,
  state,
}) {
  return (
    <PageLayout>
      <div className="page-header">
        <Link className="back-link" to="/Dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
          Back
        </Link>
        <h5 className="page-title">Add Coordinator</h5>
        <div />
      </div>

      <form className="form-card">
        <div className="form-grid">
          <div>
            <div className="form-section-title">Personal Information</div>
            <div className="form-field">
              <label>Full Name</label>
              <RegInput type="text" placeholder="Thomas John" />
            </div>
            <div className="form-field">
              <label>Phone Number</label>
              <RegInput type="tel" placeholder="090-4894-8394" />
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
              <RegInput type="text" placeholder="Kebbi Ward" />
            </div>
            <div className="form-field">
              <label>Polling Unit</label>
              <RegInput type="text" placeholder="Kebbi Market" />
            </div>
          </div>

          <div>
            <div className="form-section-title">Bank Details</div>
            <div className="form-field">
              <label>Bank Name</label>
              <RegInput type="text" placeholder="Kuda Microfinance Bank" />
            </div>
            <div className="form-field">
              <label>Account Number</label>
              <RegInput type="number" placeholder="2700475784" />
            </div>

            <div className="form-section-title" style={{ marginTop: "24px" }}>Documents & Photo</div>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <div>
                <div className="upload-label">Profile Picture</div>
                <div className="upload-zone">
                  <input type="file" accept="image/*" onChange={handleProfileChange} />
                  {profPic
                    ? <img src={profPic} alt="Profile" className="upload-preview" />
                    : (
                      <div className="upload-placeholder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#a0aec0" viewBox="0 0 16 16">
                          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                          <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                        </svg>
                        Photo
                      </div>
                    )
                  }
                </div>
              </div>

              <div>
                <div className="upload-label">PVC Front</div>
                <div className="upload-zone">
                  <input type="file" accept="image/*" onChange={handleFrontPvcChange} />
                  {frontPvc
                    ? <img src={frontPvc} alt="PVC Front" className="upload-preview" />
                    : (
                      <div className="upload-placeholder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#a0aec0" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2z" />
                          <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                        </svg>
                        Front
                      </div>
                    )
                  }
                </div>
              </div>

              <div>
                <div className="upload-label">PVC Back</div>
                <div className="upload-zone">
                  <input type="file" accept="image/*" onChange={handleBackPvcChange} />
                  {backPvc
                    ? <img src={backPvc} alt="PVC Back" className="upload-preview" />
                    : (
                      <div className="upload-placeholder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#a0aec0" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2z" />
                          <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                        </svg>
                        Back
                      </div>
                    )
                  }
                </div>
              </div>
            </div>

            <div style={{ marginTop: "32px" }}>
              <Button type="submit">Create Coordinator</Button>
            </div>
          </div>
        </div>
      </form>
    </PageLayout>
  );
}
