import { useState ,useContext} from "react";
import React from "react";
import "./insta.css";
import { Link, TextField } from "@mui/material";
import { UserContext  } from "./userContext";
import {useNavigate}from "react-router-dom"


function Instagram() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const { addUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on input
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.email) {
      tempErrors.email = "Email or phone is required";
    }

    if (!formData.fullName || formData.fullName.length < 3) {
      tempErrors.fullName = "Full Name must be at least 3 characters";
    }

    if (!formData.username) {
      tempErrors.username = "Username is required";
    }

    if (!formData.password || formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0; // true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Submitted", formData);
      alert("Signup successful!");
      addUser(formData);
      setFormData({
        email: "",
        fullName: "",
        username: "",
        password: "",
      });
      navigate("/users"); 
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1 className="logo">Instagram</h1>
        <p className="sub-text">
          Sign up to see photos and videos from your friends.
        </p>

        <form className="form-fields" onSubmit={handleSubmit}>
          <TextField
            label="Enter Number or Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={Boolean(errors.fullName)}
            helperText={errors.fullName}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={Boolean(errors.username)}
            helperText={errors.username}
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
            autoComplete="current-password"
            variant="outlined"
            fullWidth
          /> 
          <button type="submit"  >Sign up</button>
         
        </form>
        
        <p className="terms">
          By signing up, you agree to our <strong>Terms</strong>,{" "}
          <strong>Data Policy</strong> and <strong>Cookies Policy</strong>.
        </p>
      </div>

      <div className="form-box">
        <p>
          Have an account? <a href="#">Log in</a>
        </p>
      </div>
      <Link to="/userTable">Go to table</Link>
    </div>
  );
}

export default Instagram;
