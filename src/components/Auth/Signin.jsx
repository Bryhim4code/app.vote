import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/pic.jpeg";
import WomanImg from "../../assets/img/woman.jpg";

export default function Signin({ Button, RegInput }) {
  return (
    <div className="auth-page">
      <div
        className="auth-image-panel fade-in"
        style={{ backgroundImage: `url(${WomanImg})` }}
      >
        <div className="auth-image-text">
          <h2>Coordinator Portal</h2>
          <p>Sign in to manage your assigned voters and polling units.</p>
        </div>
      </div>

      <div className="auth-form-panel">
        <div className="auth-form-inner fade-in">
          <div className="auth-logo">
            <img src={Logo} alt="NaijaVote Logo" width={52} />
          </div>

          <h3 className="auth-title">Sign In</h3>
          <p className="auth-subtitle">Access your coordinator account.</p>

          <form>
            <div className="auth-field">
              <label className="auth-label">Email Address</label>
              <RegInput
                type="email"
                placeholder="coordinator@naijavote.org"
                autoComplete="email"
              />
            </div>

            <div className="auth-field">
              <label className="auth-label">Password</label>
              <RegInput
                type="password"
                placeholder="Enter your password"
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
