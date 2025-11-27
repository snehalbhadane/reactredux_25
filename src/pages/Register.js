// src/pages/Register.js
//import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Card } from "react-bootstrap";

import { useNavigate } from 'react-router-dom';

export default function Register() {
  const { register, handleSubmit } = useForm();
  const navigate=useNavigate();

  const onSubmit = () =>{
    
    navigate("/")
  } 

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card style={{ width: "25rem", padding: "20px" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Register</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" {...register("name")} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" {...register("email")} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" {...register("password")} required />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}