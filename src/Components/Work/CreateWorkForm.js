// import React, { useEffect } from "react";
// import { Button, Form, Input } from "antd";
// import { createWorkDetails } from "../../Redux/actions/workActions";
// import { useDispatch, useSelector } from "react-redux";
// import { openNotificationWithIcon } from "../../utils/notification";
// import { reset } from "../../Redux/reducers/workReducer";

// const CreateWorkForm = () => {
//   const { isLoading, isSuccess, isError, isMessage } = useSelector(
//     (state) => state.work
//   );
//   const dispatch = useDispatch();
//   console.log(isLoading, isSuccess, isError);
//   const onFinish = (values) => {
//     dispatch(createWorkDetails({ name: values.name, repoLink: values.repoLink,  websiteLink: values.websiteLink,  details: values.detail }));
//     // console.log("Success:", values);
//   };

//   useEffect(() => {
//     if (isSuccess) openNotificationWithIcon("success", "Success", isMessage);
//     if (isError) openNotificationWithIcon("error", "Failed", isMessage);
//     return () => dispatch(reset());
//   }, [isSuccess, isError, isMessage]);

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
//         label="Name"
//         name="name"
//         rules={[
//           {
//             required: true,
//             message: "Please input your name!",
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="repoLink"
//         name="repoLink"
//         rules={[
//           {
//             required: true,
//             message: "Please input your repoLink!",
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         label="websiteLink"
//         name="websiteLink"
//         rules={[
//           {
//             required: true,
//             message: "Please input your websiteLink!",
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         label="detail"
//         name="detail"
//         rules={[
//           {
//             required: true,
//             message: "Please input your detail!",
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

// export default CreateWorkForm;
