import React from "react";
import WorkModalForm from "./WorkModalForm";
import { setModalState } from "../../../Redux/reducers/workReducer";
import { useSelector, useDispatch } from "react-redux";
import CustomModal from "../../CustomModal/CustomModal";

const WorkModal = () => {
  const { isVisible } = useSelector((state) => state.work);
  const dispatch = useDispatch();
  return (
    <CustomModal 
      visible={isVisible}
      onCancel={() => dispatch(setModalState(false))}
      title={"Create Work details"}
      footer={false}
    >
      {isVisible.type === "adminWorkModal" && <WorkModalForm {...isVisible} />}
    </CustomModal>
  );
};

export default WorkModal;
