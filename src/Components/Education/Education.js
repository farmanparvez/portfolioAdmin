import { useEffect } from "react";
import Container from "../Layout/Container";
// import CreateEducationForm from "./EducationForm";
import { useDispatch, useSelector } from "react-redux";
import { getEducation } from "../../Redux/actions/educationActions";
import { reset } from "../../Redux/reducers/EducationReducer";
import Modal from "./Modal/EducationModal"
import { openNotificationWithIcon } from "../../utils/notification";
import EducationTable from "./Table/EducationTable";


const Education = () => {
  const dispatch = useDispatch();
  const { education, isVisible, isSuccess, isError, isMessage } = useSelector((state) => state.education);

  useEffect(() => {
    dispatch(getEducation());
    return () => dispatch(reset());
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) openNotificationWithIcon("success", "Success", isMessage);
    if (isError) openNotificationWithIcon("error", "Failed", isMessage);
    return () => dispatch(reset());
  }, [isSuccess, isError, isMessage, dispatch]);

  return (
    <Container>
        <h1>Educaction</h1>
      {/* <CreateEducationForm /> */}
      <EducationTable education={education}/>
      {/* <CreateWorkForm /> */}
      {isVisible && <Modal />}
    </Container>
  );
};

export default Education;
