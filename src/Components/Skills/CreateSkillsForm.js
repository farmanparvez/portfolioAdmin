// import React, { useEffect } from "react";
// import { Button, Form, Input } from "antd";
// import { createSkills } from "../../Redux/actions/skillsActions";
// import { useDispatch, useSelector } from "react-redux";
// import { openNotificationWithIcon } from "../../utils/notification";
// import { reset } from "../../Redux/reducers/skillsReducer"
// // import { notification } from "antd";

// const CreateSkillsForm = () => {
//   const { isLoading, isSuccess, isError, isMessage } = useSelector(
//     (state) => state.skills
//   );
//   const dispatch = useDispatch();
//   console.log(isLoading, isSuccess, isError)
//   const onFinish = (values) => {
//     dispatch(createSkills({ icon: values.icon, title: values.title }));
//     // console.log("Success:", values);
//   };


//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <Form
//       name="basic"
//       labelCol={{
//         span: 8,
//       }}
//       wrapperCol={{
//         span: 16,
//       }}
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//     >
//       <Form.Item
//         label="Title"
//         name="title"
//         rules={[
//           {
//             required: true,
//             message: "Please input your Title!",
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Icon"
//         name="icon"
//         rules={[
//           {
//             required: true,
//             message: "Please input your Icon!",
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
//       >
//         <Button loading={isLoading} type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default CreateSkillsForm;
