import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/adc-logo.png";
import BgImg from "../../assets/img/bg.jpg";

export default function Signup({ Button, RegInput }) {
  return (
    <div className="auth-page">
      <div
        className="auth-image-panel fade-in"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="auth-image-text">
          <h2>Join NaijaVote</h2>
          <p>Create your admin account and start managing your electoral district.</p>
        </div>
      </div>

      <div className="auth-form-panel">
        <div className="auth-form-inner fade-in">
          <div className="auth-logo">
            <img src={Logo} alt="NaijaVote Logo" width={52} />
          </div>

          <h3 className="auth-title">Create Account</h3>
          <p className="auth-subtitle">
            Register as an <strong style={{ color: "#006e3d" }}>Admin</strong>
          </p>

          <form>
            <div className="auth-field">
              <label className="auth-label">Full Name</label>
              <RegInput type="text" placeholder="Mohammed Adamu" autoComplete="name" />
            </div>

            <div className="auth-field">
              <label className="auth-label">Email Address</label>
              <RegInput
                type="email"
                placeholder="admin@naijavote.org"
                autoComplete="email"
              />
            </div>

            <div className="auth-field">
              <label className="auth-label">Password</label>
              <RegInput
                type="password"
                placeholder="Create a password"
                autoComplete="new-password"
              />
            </div>

            <div className="auth-field">
              <label className="auth-label">Confirm Password</label>
              <RegInput
                type="password"
                placeholder="Repeat your password"
                autoComplete="new-password"
              />
            </div>

            <div style={{ marginTop: "24px" }}>
              <Button type="button" style={{ width: "100%", padding: "12px" }}>
                Sign Up
              </Button>
            </div>
          </form>

          <div className="auth-footer">
            Already have an account?{" "}
            <Link to="/">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
