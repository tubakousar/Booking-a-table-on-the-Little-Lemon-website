import React from 'react';
import { Form, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';

function Suppliersignuppage() {
  const [form] = Form.useForm();
  const navigate = useNavigate()
    
  const submitSuppliersignup = (values) => {
    console.log("values: " ,values);
    form.resetFields();

    const existingsupplier = JSON.parse(localStorage.getItem("supplierdata")) || [];
    existingsupplier.push(values);
    
    localStorage.setItem("supplierdata" , JSON.stringify(existingsupplier));
    alert("your account is created")
    navigate("/supplierhome")

  };


  return (
    <div>
      <h3> supplier Signup</h3>
      <Form form={form} 
       onFinish={submitSuppliersignup}
       >
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

export default Suppliersignuppage;
