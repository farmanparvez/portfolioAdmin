import React from "react";
import { Button, Form, Input, Space } from "antd";
import {
  createAbout,
  editAboutDetails,
} from "../../..//Redux/actions/aboutAction";
import { useDispatch, useSelector } from "react-redux";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const AboutModalForm = ({ details }) => {
  const { isLoading } = useSelector((state) => state.about);
  const dispatch = useDispatch();
// console.log(isLoading + "loading")
  const onFinish = (values) => {
    if (details) {
      dispatch(
        editAboutDetails({
          id: details?._id,
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber,
          description: values.description,
          links: values.links,
        })
      );
    } else {
      dispatch(
        createAbout({
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber,
          description: values.description,
          links: values.links,
        })
      );
    }
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      initialValues={{
        name: details?.name,
        email: details?.email,
        phoneNumber: details?.phoneNumber,
        description: details?.description,
        links: details?.links,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mobile"
        name="phoneNumber"
        rules={[
          {
            // required: true,
            message: "Please input your Phone Number!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Please input your description!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.List name="links">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: "flex",
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "icon"]}
                  rules={[
                    {
                      required: true,
                      message: "Missing icon",
                    },
                  ]}
                >
                  <Input placeholder="icon" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "link"]}
                  rules={[
                    {
                      required: true,
                      message: "Missing link",
                    },
                  ]}
                >
                  <Input placeholder="link" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button loading={isLoading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AboutModalForm;
