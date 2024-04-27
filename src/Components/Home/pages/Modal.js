import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomModal from "../../CustomModal/CustomModal";
import { setModalState } from "../../../Redux/reducers/workReducer";
import WorkModalDetails from "./WorkModalDetails";

const Modal = () => {
  const { isVisible } = useSelector((state) => state.work);
  const dispatch = useDispatch();
  return (
    <CustomModal
      visible={isVisible}
      onCancel={() => dispatch(setModalState(false))}
      title={"Proshop"}
    >
      {isVisible.type === "workModal" && <WorkModalDetails {...isVisible} />}
    </CustomModal>
  );
};

export default Modal;
