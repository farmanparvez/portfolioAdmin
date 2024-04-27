import React from "react";
import { Button, Form, Input } from "antd";
import {
  createEducation,
  editEducationDetails,
} from "../../../Redux/actions/educationActions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const EducationModalForm = ({ details }) => {
  const { isLoading } = useSelector((state) => state.work);
  const dispatch = useDispatch();
  // console.log(details);
  const onFinish = (values) => {
    console.group(values);

    const rangeValue = values["rangepicker"];

    if (details) {
      dispatch(
        editEducationDetails({
          id: details?._id,
          degree: values.degree,
          institution: values.institution,
          from: rangeValue[0].format("MM-DD-YYYY"),
          to: rangeValue[1].format("MM-DD-YYYY"),
        })
      );
    } else {
      dispatch(
        createEducation({
          degree: values.degree,
          institution: values.institution,
          from: rangeValue[0].format("MM-DD-YYYY"),
          to: rangeValue[1].format("MM-DD-YYYY"),
        })
      );
    }
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const rangeConfig = {
    rules: [
      {
        type: "array",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  return (
    <Form
      name="basic"
      initialValues={{
        degree: details?.degree,
        institution: details?.institution,
        // from: details?.from,
        // to: details?.to,
        rangepicker: [moment(details?.from), moment(details?.to)],
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
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
      <Form.Item name="rangepicker" label="RangePicker" {...rangeConfig}>
        <RangePicker />
      </Form.Item>
      <Form.Item>
        <Button loading={isLoading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EducationModalForm;
