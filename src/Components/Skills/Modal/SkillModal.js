import React from "react";
import { setModalState } from "../../../Redux/reducers/skillsReducer";
import { useSelector, useDispatch } from "react-redux";
import CustomModal from "../../CustomModal/CustomModal";
import SkillModalForm from "./SkillModalForm";

const WorkModal = () => {
  const { isVisible } = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  return (
    <CustomModal 
      visible={isVisible}
      onCancel={() => dispatch(setModalState(false))}
      title={"Create skill details"}
      footer={false}
    >
      {isVisible.type === "adminSkillModal" && <SkillModalForm {...isVisible} />}
    </CustomModal>
  );
};

export default WorkModal;
