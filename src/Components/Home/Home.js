import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from '../../image/admin.jpg';
import img2 from '../../image/maxresdefault.jpg';
import img3 from '../../image/re.png';
import img4 from '../../image/socks.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './Home.css';

const Home = () => {
  return (
    <>
    <div className="heading">
      <Container className="heading-box">
        <div>
        <h1>Welcome To CpaWorkTools</h1>
        <h4>We're Here To Fulfill Your Needs With Online Marketing Tools.</h4>
        <p>Quick Support 100% Safe & Secure Ours Service.</p>
        <div className="d-flex">
          <div className="col-md-3 sm-12 linkButton">
            <div><AiOutlineArrowRight/>
            <Link className="links" to="/link"> social network</Link>
            </div>
            <div><AiOutlineArrowRight/>
            <Link className="links" to="/link"> social network</Link>
            </div>
            <div><AiOutlineArrowRight/>
            <Link className="links" to="/link"> social network</Link>
            </div>
            <div><AiOutlineArrowRight/>
            <Link className="links" to="/link"> social network</Link>
            </div>
            
          </div>
          <div className="col-md-3 sm-12">
          <div><AiOutlineArrowRight/>
            <Link className="links" to="/link"> social network</Link>
            </div>
            <div><AiOutlineArrowRight/>
            <Link className="links" to="/link"> social network</Link>
            </div>
            <div><AiOutlineArrowRight/>
            <Link className="links" to="/link"> social network</Link>
            </div>
            <div><AiOutlineArrowRight/>
            <Link className="links" to="/link"> social network</Link>
            </div>
          </div>
        </div>
        </div>
        
      </Container>
    </div>
    <div style={{marginTop:'2em'}}>
        <Container className="d-flex">
      <div className="col-md-4"></div>
      <div className="col-md-8 d-flex">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img4}/>
          <Card.Body>
            <Card.Title>SocksEscort</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
           <Link to={'/pricing'}><Button variant="primary">View Price Details</Button></Link> 
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img4}/>
          <Card.Body>
            <Card.Title>SocksEscort</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
           <Link to={'/pricing'}><Button variant="primary">View Price Details</Button></Link> 
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img4}/>
          <Card.Body>
            <Card.Title>SocksEscort</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
           <Link to={'/pricing'}><Button variant="primary">View Price Details</Button></Link> 
          </Card.Body>
        </Card>
      </div>
      </Container>
    </div>
    </>
  );
};

export default Home;
