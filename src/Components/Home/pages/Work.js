import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorkDetails } from "../../../Redux/actions/workActions";
import { reset, setModalState } from "../../../Redux/reducers/workReducer";
import { Row, Col, Button } from "antd";
import Modal from "./Modal";

function Work() {
  const dispatch = useDispatch();
  const { workDetails, isVisible } = useSelector((state) => state.work);
  // console.log(workDetails);

  useEffect(() => {
    dispatch(getWorkDetails());
    return () => dispatch(reset());
  }, [dispatch]);

  return (
    <>
      <div className="work-container" id="work">
        <h1>Our Works</h1>
        <div className="small-container">
          {workDetails?.map((val) => (
            <div key={val._id} className="box work-box">
              <Row gutter={[16, 24]} justify="center">
                <Col>
                  <p className="work-heading-detail">{val.name}</p>
                </Col>
                <Col span={24}>
                  <Button
                    onClick={() =>
                      dispatch(
                        setModalState({
                          visible: true,
                          type: "workModal",
                          details: val,
                        })
                      )
                    }
                  >
                    Click to get details
                  </Button>
                </Col>
              </Row>
              {/* <div className="inner-box">
                    <i class="fab fa-html5"></i>
                    </div> */}
            </div>
          ))}
          {/* <div className="box workbox">
            <div className="inner-box">
              <i class="fab fa-css3"></i>
            </div>
          </div>
          <div className="box">
            <div className="inner-box">
              <i class="fab fa-js-square"></i>
            </div>
          </div> */}
        </div>
      </div>
      {isVisible && <Modal />}
    </>
  );
}
export default Work;
