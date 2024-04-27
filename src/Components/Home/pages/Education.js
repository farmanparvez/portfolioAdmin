import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEducation } from "../../../Redux/actions/educationActions";
import { Row, Col } from "antd";
import moment from "moment";

function Education() {
  const dispatch = useDispatch();
  const { education } = useSelector(
    (state) => state.education
  );
  // console.log(education);
  useEffect(() => {
    dispatch(getEducation());
  }, [dispatch]);
  return (
    <>
      <div className="about-container" id="education">
        <div className="mid-container">
          <div className="col-2">
            <img src="./images/man-2.png" alt="" />
          </div>
          <div className="col-2">
            <h1>Educaton</h1>
            <h2>Hello I`m Mohd Farman Parvez</h2>
            {/* <div className="para">
              <h2>Degree</h2>
            </div> */}
            {/* 
            <div>btech</div>
            <div>institution</div>
            <div>aktu</div>
            <div style={{display: 'flex'}}>
            <div>from : </div>
            <div style={{paddingRight: '30px'}}> 01-02-2015</div>
            <div>to: </div>
            <div>01-02-2015</div>
            </div> */}
            <Row gutter={[16, 24]}>
              {education.map((edu) => (
                  <Col key={edu._id} span={24}>
                    <Row>
                      <Col span={24}>{edu.degree}</Col>
                      <Col span={24}>{edu.institution}</Col>
                      <Col span={24}>{moment(edu.to).format("YYYY")}</Col>
                    </Row>
                  </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;
