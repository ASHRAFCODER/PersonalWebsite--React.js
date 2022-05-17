import "./about.css";
import Award from "../../img/award.png";
import Mypersonal from "../../img/Mypersonal.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Mypersonal}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        Most users see a computer at the front and use the graphical user interfaces. 
        The first time I used a computer, it intrigued me to know how these interfaces work
        ,the theory behind computers and the methodology of how they work 
        I started learning how to code to create web pages in 2018, and since then I have continued to develop my abilities until I reached a good stage.
        </p>
        
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title"> The best web desine 2020 </h4>
            <p className="a-award-desc">
            In 2020, I won the best web project desine in college
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;