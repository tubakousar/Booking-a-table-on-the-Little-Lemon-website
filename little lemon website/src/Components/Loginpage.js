import { Input, Form, Button, Select } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const submithandlelogin = (values) => {
    console.log("login values: ", values);

    const { email, password, role } = values;

    let userlist = [];
    if (role === "admin")
      userlist = JSON.parse(localStorage.getItem("admindata"));

    if (role === "customer")
      userlist = JSON.parse(localStorage.getItem("customerdata"));
    if (role === "supplier")
      userlist = JSON.parse(localStorage.getItem("supplierdata"));

    const existinguser = userlist.find(
      (user) => user.email === email && user.password === password
    );

    if (existinguser) {
      const loginuser = { email: existinguser.email, role };
      localStorage.setItem("login", JSON.stringify(loginuser));

      alert(`loggedin successfully as ${role}`);
      if (role === "admin") navigate("/homepage");
      else if (role === "customer") navigate("/customerhome");
      else if (role === "supplier") navigate("/supplierhome");
    } else {
      console.error("invalid email or pssword");
      setError("invalid email or pssword");
    }

    form.resetFields();
    // localStorage.setItem("login" ,JSON.stringify(role))
  };

  return (
    <div>
      <p style={{ color: "red" }}>{error}</p>
      <h3> Login page</h3>
      <Form form={form} onFinish={submithandlelogin}>
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

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: "true", message: "please select your role" }]}
        >
          <Select
            // value={role} onChange={(values)=>setRole(values)}
            placeholder="Please select your role"
          >
            <Option value="admin">Admin</Option>
            <Option value="customer">Customer</Option>
            <Option value="supplier">Supplier</Option>
          </Select>
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

export default Loginpage;
