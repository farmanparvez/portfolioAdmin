import React, { Fragment } from "react";
import CustomTable from "../../CustomTable/CustomTable";
import { Row, Col, Button, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setModalState } from "../../../Redux/reducers/EducationReducer";
import { deleteEducation } from "../../../Redux/actions/educationActions";

const EducationTable = ({ education }) => {
  const { isLoading } = useSelector((state) => state.education);
console.log(education)
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Degree",
      dataIndex: "degree",
      key: "degree",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Institution",
      dataIndex: "institution",
      key: "institution",
    },
    {
      title: "To",
      dataIndex: "to",
      key: "to",
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Row gutter={16}>
            <Col>
              <Button
                onClick={() =>
                  dispatch(
                    setModalState({
                      visible: true,
                      type: "adminEducationModal",
                      details: record,
                    })
                  )
                }
              >
                Edit
              </Button>
            </Col>
            <Col>
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => dispatch( deleteEducation({id: record._id}))}
              >
                <Button>Delete</Button>
              </Popconfirm>
            </Col>
          </Row>
        </>
      ),
    },
  ];

  const header = (
    <Fragment>
      <Row justify="space-between">
        <Col>
          <h1>Education</h1>
        </Col>
        <Col>
          <Button
            onClick={() =>
              dispatch(setModalState({ visible: true, type: "adminEducationModal" }))
            }
          >
            Add
          </Button>
        </Col>
      </Row>
    </Fragment>
  );

  return (
    <div>
      <CustomTable
        title={() => header}
        columns={columns}
        dataSource={education}
        loading={isLoading}
      />
    </div>
  );
};

export default EducationTable;
