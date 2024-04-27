import React from "react";
import EducationModalForm from "./EducationModalForm";
import { setModalState } from "../../../Redux/reducers/EducationReducer";
import { useSelector, useDispatch } from "react-redux";
import CustomModal from "../../CustomModal/CustomModal";

const WorkModal = () => {
  const { isVisible } = useSelector((state) => state.education);
  const dispatch = useDispatch();
  return (
    <CustomModal 
      visible={isVisible}
      onCancel={() => dispatch(setModalState(false))}
      title={"Create Education"}
      footer={false}
    >
      {isVisible.type === "adminEducationModal" && <EducationModalForm {...isVisible} />}
    </CustomModal>
  );
};

export default WorkModal;
