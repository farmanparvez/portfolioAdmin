import React from "react";
import { Button, Form, Input } from "antd";
import { createWorkDetails, editWorkDetails } from "../../..//Redux/actions/workActions";
import { useDispatch, useSelector } from "react-redux";

const WorkModalForm = ({ details }) => {
  const { isLoading } = useSelector(
    (state) => state.work
  );
  const dispatch = useDispatch();

  const onFinish = (values) => {
    if (details) {
      dispatch(
        editWorkDetails({
          id: details?._id,
          name: values.name,
          repoLink: values.repoLink,
          websiteLink: values.websiteLink,
          details: values.detail,
        })
      );
    } else {
      dispatch(
        createWorkDetails({
          name: values.name,
          repoLink: values.repoLink,
          websiteLink: values.websiteLink,
          details: values.detail,
        })
      );
    }
    // console.log("Success:", values);
  };



  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      initialValues={{
        name: details?.name,
        repoLink: details?.repoLink,
        websiteLink: details?.websiteLink,
        detail: details?.details,
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
        label="repoLink"
        name="repoLink"
        rules={[
          {
            required: true,
            message: "Please input your repoLink!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="websiteLink"
        name="websiteLink"
        rules={[
          {
            required: true,
            message: "Please input your websiteLink!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="detail"
        name="detail"
        rules={[
          {
            required: true,
            message: "Please input your detail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button loading={isLoading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WorkModalForm;
