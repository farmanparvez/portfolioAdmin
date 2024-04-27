import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSkills } from "../../../Redux/actions/skillsActions";
import { reset } from "../../../Redux/reducers/skillsReducer";

function Skills() {
  const dispatch = useDispatch();
  const { skills } = useSelector((state) => state.skills);
  // console.log(skills);

  useEffect(() => {
    dispatch(getSkills());
    return () => dispatch(reset());
  }, [dispatch]);
  // const data = [
  //   {
  //     icon: "fab fa-html5",
  //     title: "HTML",
  //     desc: "HTML is a hyperteck markup language",
  //   },
  //   {
  //     icon: "fab fa-css3",
  //     title: "CSS",
  //     desc: "CSS",
  //   },
  //   {
  //     icon: "fab fa-js-square",
  //     title: "JAVASCRIPT",
  //     desc: "",
  //   },
  //   {
  //     icon: "fab fa-react",
  //     title: "React",
  //     desc: "",
  //   },
  //   {
  //     icon: "fab fa-sass",
  //     title: "SASS",
  //     desc: "",
  //   },
  //   {
  //     icon: "fas fa-store",
  //     title: "REDUX",
  //     desc: "",
  //   },
  // ];
  return (
    <>
      <div className="shills-container" id="skills">
        <h1>Skills</h1>
        <div className="small-container">
          {skills?.map((del, index) => (
            <div key={del._id} className="box">
              {/* <div className="inner-box">
                <p className="skills-heading-detail">{del.title}</p>
              </div> */}
              <div className="detail">
                <i className={del.icon}></i>
                <p className="skills-heading-detail">{del.title}</p>
                <p>{del.desc}</p>
              </div>
            </div>
          ))}
          {/* <div className="box">
                    <div className="inner-box">
                    <i class="fab fa-css3"></i>
                    </div>
                </div>
                <div className="box">
                    <div className="inner-box">
                    <i class="fab fa-js-square"></i>
                    </div>
                </div>
                <div className="box">
                    <div className="inner-box">
                    <i class="fab fa-react"></i>
                    </div>
                </div>
                <div className="box">
                    <div className="inner-box">
                    <i class="fab fa-java"></i>
                    </div>
                </div>
                <div className="box">
                    <div className="inner-box">
                    <i class="fab fa-python"></i>
                    </div>
                </div> */}
        </div>
      </div>
    </>
  );
}
export default Skills;
