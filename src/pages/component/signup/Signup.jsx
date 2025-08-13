import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";

const Signup = () => {
    const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
  return (
    <div className="signup-container">
      <div className="signup-div">
        <h3>Signup</h3>
        <Form
          name="basic"
         labelCol={{ span: 24 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 800, minWidth: 400 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="signup-form"
        >
              <Form.Item
            label="Name"
            name="Name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

         

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <p>
          Already have an account{" "}
          <span style={{ marginLeft: "6px" }}>
            <Link to="/" state={{ openLogin: true }}>
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
