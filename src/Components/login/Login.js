import React, { Fragment, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { login } from "../../Redux/actions/authActions";
import { reset } from "../../Redux/reducers/authReducer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openNotificationWithIcon } from "../../utils/notification";
import "./styles.css";

const Login = () => {

  const { isLoading, isSuccess, isError, isMessage, user} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(isSuccess || user) navigate('/adminskills')
    if(isError) openNotificationWithIcon('error', 'Failed', isMessage)
    // dispatch(reset())
    return () => dispatch(reset())
  },[isSuccess, isError, isMessage, user, dispatch, navigate])

  const onFinish = (values: any) => {
    console.log("Success:", values);
    const data = {
      email: values.email,
      password: values.password
    }
    dispatch(login(data))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Fragment>
      <div className="login-container">
        <div className="left-box"></div>
        <div className="right-box">
          <div style={{ width: "90%", margin: "0 auto" }}>
            <Form
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              // autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button loading={isLoading} type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
