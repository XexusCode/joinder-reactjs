import React from "react";
import "./EventCard.scss";
import { Badge, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EventObject } from "../../../interfaces/interfaces";
export const EventCard = (event: EventObject) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`./evento/${event.idevent}`}>
      <Col>
        <hr />
        <Row>
          <Container className="fondo event rounded ">
            <Col>
              <Row>
                <Col md={5}>
                  <div className="card-body  ">
                    <Image
                      src="http://placeimg.com/100/100/food"
                      roundedCircle
                    />
                  </div>
                </Col>
                <Col md={5}>
                  <div className="card-title  ">
                    <h3>{event.name}</h3>
                    <h6>Localizacion: {event.location}</h6>
                  </div>
                  <Row>
                    <hr />{" "}
                  </Row>
                  <Row md={10}>
                    <Badge variant="success">{event.start_date}</Badge> <hr />
                    <Badge variant="danger">{event.end_date}</Badge>
                  </Row>
                </Col>
                <Col md={1}>
                  <Row md={2}>
                    <div className="nmax">
                      {event.nmax >= event.users.length ? (
                        <h5 style={{ color: "green" }}>
                          {event.users.length}/{event.nmax}{" "}
                        </h5>
                      ) : (
                        <h5 style={{ color: "red" }}>
                          {event.users.length}/{event.nmax}{" "}
                        </h5>
                      )}
                    </div>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Container>
        </Row>
      </Col>
    </Link>
  );
};
