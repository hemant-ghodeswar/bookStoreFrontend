import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { Button, Form, Input, message, notification } from "antd";
import axios from "axios";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, mess, description) => {
    api[type]({
      //   message: 'Signup successful! You can now log in.',
      // description:
      //   'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      message: mess,
      description: description,
    });
  };
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const payload = {
        fullName: values.fullName,
        email_id: values.email_id,
        password: values.password,
      };
      const res = await axios.post(
        "http://localhost:4001/user/signup",
        payload
      );
      if (res.status === 201) {
        openNotificationWithIcon(
          "success",
          "Signup successful!",
          "You can now log in."
        );
        form.resetFields();
      }
    } catch (error) {
    //   openNotificationWithIcon("error", "Error message", error);
    openNotificationWithIcon('error', 'Signup failed', error?.response?.data?.message || 'Something went wrong.');

    } finally {
      setLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="signup-container">
        {contextHolder}
      <div className="signup-div">
        <h3>Signup</h3>
        <Form
          form={form}
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
            name="fullName"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="email_id"
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
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading}
            >
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
