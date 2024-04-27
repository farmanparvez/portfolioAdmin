import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { createEducation } from "../../Redux/actions/educationActions";
import { useDispatch, useSelector } from "react-redux";
import { openNotificationWithIcon } from "../../utils/notification";
import {educationActions} from "../../Redux/reducers/EducationReducer"

import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const CreateEducationForm = () => {
  const { isLoading, isSuccess, isError, isMessage } = useSelector(
    (state) => state.education
  );
  const dispatch = useDispatch();
  console.log(isLoading, isSuccess, isError)
  const onFinish = (values) => {
    const rangeValue = values['range-picker'];
    // dispatch(createSkills({ icon: values.icon, title: values.title }));
    // console.log("Success:", values);
    // // // console.log([rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')])
    const data = {
      degree: values.degree,
      institution: values.institution,
      from: rangeValue[0].format('MM-DD-YYYY'),
      to:  rangeValue[1].format('MM-DD-YYYY')
      
    }
    // const dta = {
    //   degree: "hight school1dfs2233",
    //   institution: "cbsce",
    //   from: "2-02-2018",
    //   to: "2-02-2021"
    // }
    dispatch(createEducation(data))
  };

  useEffect(() => {
    if (isSuccess) openNotificationWithIcon("success","Success","Education created succesfully");
    if(isError) openNotificationWithIcon('error', 'Failed', isMessage)
    return () => dispatch(educationActions.reset())
  }, [isSuccess, isError, isMessage]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const rangeConfig = {
    rules: [
      {
        type: 'array',
        required: true,
        message: 'Please select time!',
      },
    ],
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
        label="degree"
        name="degree"
        rules={[
          {
            required: true,
            message: "Please input your degree!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="institution"
        name="institution"
        rules={[
          {
            required: true,
            message: "Please input your Icon!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
        <RangePicker />
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

export default CreateEducationForm;
