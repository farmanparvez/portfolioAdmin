import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { createHeroDetails } from "../../Redux/actions/heroAction";
import { useDispatch, useSelector } from "react-redux";
import { openNotificationWithIcon } from "../../utils/notification";
import { reset } from "../../Redux/reducers/heroReducer";

const CreateHeroForm = () => {
  const { isLoading, isSuccess, isError, isMessage } = useSelector(
    (state) => state.hero
  );
  const dispatch = useDispatch();
  console.log(isLoading, isSuccess, isError);
  const onFinish = (values) => {
    dispatch(createHeroDetails({ name: values.name, profileTitle: values.title,  profileType: values.profileType,  detail: values.detail, extra: values.extra  }));
    // console.log("Success:", values);
  };

  useEffect(() => {
    if (isSuccess) openNotificationWithIcon("success", "Success", isMessage);
    if (isError) openNotificationWithIcon("error", "Failed", isMessage);
    return () => dispatch(reset());
  }, [isSuccess, isError, isMessage, dispatch]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
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
        label="title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input your title!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="profileType"
        name="profileType"
        rules={[
          {
            required: true,
            message: "Please input your profileType!",
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
      <Form.Item
        label="extra"
        name="extra"
        rules={[
          {
            required: true,
            message: "Please input your extra!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button loading={isLoading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateHeroForm;
