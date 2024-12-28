import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Signuppage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const submithandlesignup = (values) => {
    form.resetFields();
    console.log("values: ",values);

    const existingadmin = JSON.parse(localStorage.getItem("admindata")) || [];
    existingadmin.push(values);

    localStorage.setItem("admindata" , JSON.stringify( existingadmin));
    alert("Admin signup successfully")
    navigate("/loginpage")
  };


  return (
    <div>
      <p style={{ color: "red" }}></p>
      <h3>Signup</h3>
      <Form form={form} className="form" onFinish={submithandlesignup}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "please enter email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>
        <Form.Item>
          <Button className="btn" type="primary" htmlType="submit">
            Signup
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Signuppage;
