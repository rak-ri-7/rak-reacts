import React from 'react';
import {Carousel, Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className='homebody'>
    
        <Carousel>
          <Carousel.Item className="carousel">
            <img
              className="d-block w-100 carouselimg"
              src="https://img.freepik.com/free-vector/white-technology-background_23-2148390335.jpg?w=2000"
              alt="First slide"
            />
            {/* <Carousel.Caption className="carcapt">
              <h3>Technology provider</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carouselimg"
              src="https://img.freepik.com/free-photo/flat-lay-office-desk-table-modern-workplace-with-laptop-white-background-top-view_11358-1693.jpg?w=2000"
              alt="Second slide"
            />
            {/* <Carousel.Caption className="carcapt">
            <Button href="/about">Read more</Button>
              <h3>Networking</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
        <div className='overcont container rounded p-4'>
            <div className='overlay'>
              <div className="overlaytxt">
                <h2 className='lineUp'>Welcome to Technovalley</h2>
              </div>
         
              <p>jWe are dedicated to provide the latest cutting edge technology solutions to our Clients and Organizations Across varied Industry domains.</p>
              <button className="btn btn-success">More details</button>
            </div>
        </div>

    </div>
  )
}

export default Home;