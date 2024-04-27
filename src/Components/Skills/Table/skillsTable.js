import React, { Fragment } from "react";
import CustomTable from "../../CustomTable/CustomTable";
import { Row, Col, Button, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setModalState } from "../../../Redux/reducers/skillsReducer";
import { deleteskill } from "../../../Redux/actions/skillsActions";

const SkillTable = ({ skills }) => {
  const { isLoading } = useSelector((state) => state.skills);
console.log(skills)
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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
                      type: "adminSkillModal",
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
                onConfirm={() => dispatch( deleteskill({id: record._id}))}
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
          <h1>Skills</h1>
        </Col>
        <Col>
          {" "}
          <Button
            onClick={() =>
              dispatch(setModalState({ visible: true, type: "adminSkillModal" }))
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
        dataSource={skills}
        loading={isLoading}
      />
    </div>
  );
};

export default SkillTable;
