import React, { useContext, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { size, values } from "lodash";

import { isEmailValid } from "../../../utils/validations";

import "./SingInForm.scss";
import { setTokenApi, signInApi } from "../../../api/auth";
import { AuthContext } from "../../../context/contexts";

const initialValues = {
  email: "",
  password: "",
};

function SingInForm() {
  const [formData, setFormData] = useState(initialValues);
  const [signUpLoading, setSignUpLoading] = useState(false);

  const { setRefreshCheckLogin } = useContext(AuthContext);

  /*This only work with input forms. If we have a select, checkbox, etc. We need an onChange on every field */
  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleOnSubmit = e => {
    e.preventDefault();
    
    let validCount = 0;

    values(formData).some(value => {
      value && validCount++;
      return null;
    });

    console.log(validCount);

    if (validCount !== size(formData)) {
      toast.warn(`Fill all fields (${validCount}/${size(formData)})`);
    } else {
      if (!isEmailValid(formData.email)) {
        toast.warn("Invalid email");
      } else if (size(formData.password) < 6) {
        toast.warn("Password must be at least 6 characters");
      } else {
        setSignUpLoading(true);
        toast.success("Login...!");
        signInApi(formData)
          .then(response => {
            if (response.code) {
              toast.warn(response.message);
            } else {
              toast.success("Logged");
              setTokenApi(response.token)
              console.log(response);
              setFormData(initialValues);
              setRefreshCheckLogin(true)
            }
          })
          .catch(() => {
            toast.error("Server error. Try again later");
          })
          .finally(() => {
            setSignUpLoading(false);
          });
      }
    }
  };

  return (
    <div className="sign-in-form">
      <h2>Login</h2>
      <Form onSubmit={handleOnSubmit} onChange={handleOnChange}>
        <Form.Group>
          <Form.Control type="email" name="email" placeholder="Email" defaultValue={formData.email}/>
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" name="password" placeholder="Password" defaultValue={formData.password} />
        </Form.Group>
        <Button variant="primary" type="submit">
          {!signUpLoading ? "Login" : <Spinner animation="border" />}
        </Button>
      </Form>
    </div>
  );
}

export default SingInForm;