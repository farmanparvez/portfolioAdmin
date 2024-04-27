import { useEffect } from "react";
// import CreateWorkForm from "./CreateWorkForm";
import Container from "../Layout/Container";
import AboutTable from "./Table/AboutTable";
import { useDispatch, useSelector } from "react-redux";
import { getAbout } from "../../Redux/actions/aboutAction";
import { reset } from "../../Redux/reducers/aboutReducer";
import Modal from "./Modal/AboutModal"
import { openNotificationWithIcon } from "../../utils/notification";

const About = () => {
  const dispatch = useDispatch();
  const { about, isVisible, isSuccess, isError, isMessage } = useSelector((state) => state.about);
  console.log(isSuccess, isError, isMessage)
  useEffect(() => {
    dispatch(getAbout());
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
      <AboutTable aboutDetails={about}/>
      {/* <CreateWorkForm /> */}
      {isVisible && <Modal />}

    </Container>
  );
};

export default About;
