import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHeroDetails } from "../../../Redux/actions/heroAction"; 
import { reset } from "../../../Redux/reducers/heroReducer";
import template from "./Mohd Farman Parvez.pdf"

function Header() {
  const dispatch = useDispatch();
  const { heroDetails  } = useSelector((state) => state.hero);
  // console.log(heroDetails);

  useEffect(() => {
    dispatch(getHeroDetails());
    return () => dispatch(reset());
  }, [dispatch]);

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(template)
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'templete.pdf';
    link.click();
  };

  return (
    <>
      <div className="container" id='home'>
        <div className="row">
          <div className="col-1">
            {/* <img src="./images/man.png" alt="" /> */}
          </div>
          <div className="col-1">
            <div className="hero-heading">
              <h4>{heroDetails?.name}</h4>
              {/* <h4>Mohd Farman Parvez</h4> */}
              <h1 style={{color: '#fff'}}>
              {heroDetails.profileTitle}
                {/* I`m a Creative <br /> <span> Web Developer</span> */}
              </h1>
              <p>
               {heroDetails?.detail}
              </p>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                voluptatem nostrum quaerat repellendus facere tenetur? Ipsam
                facilis dolorum repudiandae cumque illum tenetur nemo dolores.
                Ea nostrum aliquid aut porro saepe!
              </p> */}
              <a href={template} className="btn" >
                Download Cv
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
