import { useEffect } from "react";
import { getAbout } from "../../../Redux/actions/aboutAction";
import { reset } from "../../../Redux/reducers/aboutReducer";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

function About() {
  const dispatch = useDispatch();
  const { about } = useSelector((state) => state.about);
  console.log(about);

  useEffect(() => {
    dispatch(getAbout());
    return () => dispatch(reset());
  }, [dispatch]);

  return (
    <>
      <div className="about-container" id="about">
        <div className="mid-container">
          <div className="col-2">
            <img src="./images/man-2.png" alt="" />
          </div>
          <div className="col-2">
            <h1>About ME</h1>
            <h2 className="about-name">{about[0]?.name}</h2>
            <div>
              <p>{about[0]?.description}</p>
            </div>
            <h3>{about[0]?.phoneNumber}</h3>

            <div className="about-link-icon">
              {about[0]?.links?.map((el) => (
                <Row
                  gutter={[16, 24]}
                  align="middle"
                  style={{ marginTop: "15px", marginBotton: "15px" }}
                >
                  <Col>
                    <i className={el.icon}></i>
                  </Col>
                  <Col>
                    <Link to={`//${el.link}`} target="_blank">
                      {el.link}
                    </Link>
                  </Col>
                </Row>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
