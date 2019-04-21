import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import posed from "react-pose";
import SplitText from "react-pose-text";

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  }
});

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 90
  }
};

const Sidebar = posed.div({
  open: {
    delay: 100,

    delayChildren: 50,
    staggerChildren: 50
  }
});

const Item = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 0, opacity: 0 }
});

class Home extends React.Component {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;

    return (
      <div className="home-page">
        <Sidebar className="sidebar" pose={isOpen ? "open" : "closed"}>
          <div className="home-nav">
            <SplitText
              initialPose="exit"
              pose="enter"
              charPoses={charPoses}
              className="home-p"
            >
              New Collection
            </SplitText>

            <Item>
              <div>
                <Link to="../men" className="home-btn">
                  <p className="link-p">View Collection</p>
                </Link>
              </div>
            </Item>
          </div>
        </Sidebar>
        <div className="home-mid-nav">
          <Box>
            <div className="mid-img-1">
              <Link to="../men">
                <p className="home-img-text">Men</p>
              </Link>
            </div>
          </Box>
          <Box>
            <div className="mid-img-2" />
          </Box>
          <Box>
            <div className="mid-img-3">
              <Link to="../women">
                <p className="home-img-text">Women</p>
              </Link>
            </div>
          </Box>
        </div>
        <div className="home-bot-nav">
          <p className="nike">NIKE</p>
          <p className="armani">ARMANI</p>
          <p className="doice">DOICE</p>
          <p className="adidas"> ADIDAS</p>
        </div>
      </div>
    );
  }
}
export default Home;
