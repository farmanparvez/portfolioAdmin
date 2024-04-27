import React from "react";
import { Button, Form, Input } from "antd";
import {
  createSkills,
  editSkillDetails,
} from "../../..//Redux/actions/skillsActions";
import { useDispatch, useSelector } from "react-redux";

const SkillModalForm = ({ details }) => {
  const { isLoading } = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    if (details) {
      dispatch(
        editSkillDetails({
          id: details?._id,
          icon: values.icon,
          title: values.title,
          description: values.description,
        })
      );
    } else {
      dispatch(
        createSkills({
          icon: values.icon,
          title: values.title,
          description: values.description,
        })
      );
    }
    // console.log("Success:", values);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        icon: details?.icon,
        title: details?.title,
        description: details?.description,
      }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input your Title!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Icon"
        name="icon"
        rules={[
          {
            required: true,
            message: "Please input your Icon!",
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
            message: "Please input your Icon!",
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

export default SkillModalForm;
