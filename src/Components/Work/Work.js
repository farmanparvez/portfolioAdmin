import { useEffect } from "react";
// import CreateWorkForm from "./CreateWorkForm";
import Container from "../Layout/Container";
import WorkTable from "./Table/WorkTable";
import { useDispatch, useSelector } from "react-redux";
import { getWorkDetails } from "../../Redux/actions/workActions";
import { reset } from "../../Redux/reducers/workReducer";
import Modal from "./Modal/WorkModal"
import { openNotificationWithIcon } from "../../utils/notification";

const Work = () => {
  const dispatch = useDispatch();
  const { workDetails, isVisible, isSuccess, isError, isMessage } = useSelector((state) => state.work);

  useEffect(() => {
    dispatch(getWorkDetails());
    return () => dispatch(reset());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) openNotificationWithIcon("success", "Success", isMessage);
    if (isError) openNotificationWithIcon("error", "Failed", isMessage);
    return () => dispatch(reset());
  }, [isSuccess, isError, isMessage, dispatch]);

  return (
    <Container>
      {/* <h1>Work</h1> */}
      <WorkTable workDetails={workDetails}/>
      {/* <CreateWorkForm /> */}
      {isVisible && <Modal />}

    </Container>
  );
};

export default Work;
