import React from "react";
import AboutModalForm from "./AboutModalForm";
import { setModalState } from "../../../Redux/reducers/aboutReducer";
import { useSelector, useDispatch } from "react-redux";
import CustomModal from "../../CustomModal/CustomModal";

const AboutModal = () => {
  const { isVisible } = useSelector((state) => state.about);
  const dispatch = useDispatch();
  console.log(isVisible)
  return (
    <CustomModal 
      visible={isVisible}
      onCancel={() => dispatch(setModalState(false))}
      title={"Create About details"}
      footer={false}
    >
      {isVisible.type === "adminAboutModal" && <AboutModalForm {...isVisible} />}
    </CustomModal>
  );
};

export default AboutModal;
