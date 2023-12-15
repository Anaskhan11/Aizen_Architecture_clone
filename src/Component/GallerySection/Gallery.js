// GalleryApp.js
import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import img1 from "../../styles/news-1.jpg";
import img2 from "../../styles/news-2.jpg";
import img3 from "../../styles/news-3.jpg";
import img4 from "../../styles/news-4.jpg";
import { Link } from "react-router-dom";

const GalleryApp = () => {
  return (
    <section style={{ marginTop: "5rem" }}>
      <div className="page-wrapper">
        <div className="container mt-3">
          <div className="sec-title style-two centered">
            <h2>
              <span>Gallery</span>
            </h2>
            <Row style={{ marginTop: "5rem" }}>
              <Col md={8}>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=oyA7Ucnmje4&t=72s"
                  controls={true}
                  playing
                  loop
                  muted
                  width={"100%"}
                  height={"396px"}
                />
              </Col>

              <Col md={4}>
                <Row className="mb-3">
                  <Col md={6} style={{ padding: "2px" }}>
                    <Image src={img1} alt="Image1" rounded />
                  </Col>

                  <Col md={6} style={{ padding: "2px" }}>
                    <Image src={img2} alt="Image 2" rounded />
                  </Col>
                </Row>

                <Row>
                  <Col md={6} style={{ padding: "2px" }}>
                    <Image src={img3} alt="Image 3" rounded />
                  </Col>

                  <Col md={6} style={{ padding: "2px" }}>
                    <Image src={img4} alt="Image 4" rounded />
                  </Col>
                </Row>
                <Row>
                  <Col md={6} style={{ padding: "2px" }}>
                    <Image src={img3} alt="Image 3" rounded />
                  </Col>

                  <Col md={6} style={{ padding: "2px" }}>
                    <Image src={img4} alt="Image 4" rounded />
                  </Col>
                </Row>

                <Row className="mt-3" style={{ marginTop: "2rem" }}>
                  <Col md={12}>
                    <Link to="/gallery">
                      <Button
                        variant="primary"
                        style={{
                          width: "37rem",
                          color: "black",
                          backgroundColor: "yellow",
                        }}
                      >
                        More
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryApp;
