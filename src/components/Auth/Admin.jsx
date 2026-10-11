import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/adc-logo.png";
import ManImg from "../../assets/img/man.jpg";

export default function Admin({ Button, RegInput }) {
  return (
    <div className="auth-page">
      <div
        className="auth-image-panel fade-in"
        style={{ backgroundImage: `url(${ManImg})` }}
      >
        <div className="auth-image-text">
          <h2>NaijaVote Admin</h2>
          <p>Manage coordinators, voters, and monitor election activity across all states.</p>
        </div>
      </div>

      <div className="auth-form-panel">
        <div className="auth-form-inner fade-in">
          <div className="auth-logo">
            <img src={Logo} alt="NaijaVote Logo" width={52} />
          </div>

          <h3 className="auth-title">Welcome back</h3>
          <p className="auth-subtitle">
            Sign in to your <strong style={{ color: "#006e3d" }}>Admin</strong> account to continue.
          </p>

          <form>
            <div className="auth-field">
              <label className="auth-label">Email Address</label>
              <RegInput
                type="email"
                defaultValue="admin@naijavote.org"
                autoComplete="email"
              />
            </div>

            <div className="auth-field">
              <label className="auth-label">Password</label>
              <RegInput
                type="password"
                defaultValue="Getstarted26"
                autoComplete="current-password"
              />
            </div>

            <div style={{ marginTop: "28px" }}>
              <Link to="/Dashboard" style={{ display: "block" }}>
                <Button type="button" style={{ width: "100%", padding: "12px" }}>
                  Sign In
                </Button>
              </Link>
            </div>
          </form>

          <div className="auth-footer">
            Don&apos;t have an account?{" "}
            <Link to="/Signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
