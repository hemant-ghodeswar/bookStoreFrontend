import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Form, Input, Space, Button, Switch, Modal, Checkbox } from "antd";
import { Link, useLocation  } from "react-router-dom";
const { Search } = Input;

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
    const location = useLocation();
  useEffect(()=>{
   const savedTheme = localStorage.getItem("theme") || "light";
   setTheme(savedTheme);
   document.documentElement.setAttribute('data-theme', savedTheme);
  },[]);
  useEffect(()=>{
     if(location?.state?.openLogin){
      setIsModalOpen(true);
     }
  },[location])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme  = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem('theme', newTheme);
  }
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSearch = (value, _e, info) =>
    console.log(info === null || info === void 0 ? void 0 : info.source, value);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className={`navbar_container ${sticky ? "sticky-header" : ""} ${sticky && theme==="light" ? 'light-header' : sticky && theme === 'dark' ? "dark-header" : ""}`}>
      {/* #121212e0 */}
      <ul>
        <li className="company_heading">
          <p>Book Store</p>
        </li>
        

        <li className={`nav_item ${location.pathname === "/" ? "active" : ""} ${theme==="light" ? "light-nav" : "dark-nav" }`}>
        {/* <li className="nav_item"> */}
          <Link to="/"> Home</Link>
        </li>
       <li className={`nav_item ${location.pathname === "/course" ? "active" : ""} ${theme==="light" ? "light-nav" : "dark-nav" }`}>
          <Link to="/course"> Course</Link>
        </li>
       <li className={`nav_item ${theme==="light" ? "light-nav" : "dark-nav" }`}>Contact</li>
       <li className={`nav_item ${theme==="light" ? "light-nav" : "dark-nav" }`}>About</li>
        <li className="search_box">
          <Search
          className="custom-search"
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{ width: 200, outline: "none" }}
          />
        </li>
        <li className="nav_item">
          <Switch defaultChecked onChange={toggleTheme } />
        </li>
        <li className="login_btn">
          <Button
            color="default"
            variant="solid"
            type="primary"
            onClick={showModal}
            
          >
            Login
          </Button>
        </li>
      </ul>
      <Modal
        title="Login"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="login-modal"
      >
        <Form
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
    {
      required: true,
      message: "Please input your email!",
    },
    {
      type: "email",
      message: "Please enter a valid email address!",
    },
  ]}
            className="form_label"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
             className="form_label"
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label={null} className="form-last">
            <Button type="primary" htmlType="submit">
             Login
            </Button>
            <p>Not register? <Link to="/signup">Singnup</Link></p>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Navbar;
