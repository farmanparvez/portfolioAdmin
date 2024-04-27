import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../Layout/Container";
import SkillTable from "./Table/skillsTable";
import { getSkills } from "../../Redux/actions/skillsActions";
import { reset } from "../../Redux/reducers/skillsReducer";
import { openNotificationWithIcon } from "../../utils/notification";
import Modal from "./Modal/SkillModal"

const Skills = () => {
  const dispatch = useDispatch();
  const { skills, isSuccess, isError, isMessage, isVisible } = useSelector((state) => state.skills);

  useEffect(() => {
    dispatch(getSkills());
    return () => dispatch(reset());
  }, [dispatch]);

  
  useEffect(() => {
    if (isSuccess) openNotificationWithIcon("success","Success", isMessage);
    if(isError) openNotificationWithIcon('error', 'Failed', isMessage)
    return () => dispatch(reset())
  }, [isSuccess, isError, isMessage, dispatch]);

  return (
    <Container>
      {/* <h1>Skills</h1> */}
      <SkillTable skills={skills}/>
      {/* <CreateSkillsForm  /> */}
      {isVisible && <Modal />}
    </Container>
  );
};

export default Skills;
