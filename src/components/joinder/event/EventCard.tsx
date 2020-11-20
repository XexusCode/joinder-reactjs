import React from "react";
import "./EventCard.scss";
import { Badge, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EventObject } from "../../../models/models";
import moment from "moment";
interface EventCardParams {
  handleActiveEvent: (event: EventObject) => void;
  event: EventObject;
}

export const EventCard = ({ event, handleActiveEvent }: EventCardParams) => {
  return (
    <Link
      onClick={() => {
        handleActiveEvent(event);
      }}
      style={{ textDecoration: "none" }}
      to={`./evento/${event.id}`}
    >
      <Col className="animate__animated animate__fadeInLeft">
        <hr style={{ border: "none" }} />
        <Row>
          <Container
            className={` ${
              parseInt(event.endDate) < Date.now() ? "eventold" : "event"
            }`}
          >
            <Col>
              <Row>
                <Col md={5}>
                  <div className="card-body  ">
                    <Image src={event.img} roundedCircle />
                  </div>
                </Col>
                <Col md={5}>
                  <div className="card-title  ">
                    <h3>{event.title}</h3>
                    <h6>Localizacion: {event.location}</h6>
                  </div>
                  <Row>
                    <hr />{" "}
                  </Row>
                  <Row md={10}>
                    <Badge variant="success">
                      {moment(parseInt(event.startDate)).format(
                        "DD/MM/YYYY [a las] h:mm:ss  "
                      )}
                    </Badge>{" "}
                    <hr />
                    <Badge variant="danger">
                      {moment(parseInt(event.endDate)).format(
                        "DD/MM/YYYY [a las] h:mm:ss  "
                      )}
                    </Badge>
                  </Row>
                </Col>
                <Col md={1}>
                  <Row md={2}>
                    <div className="nmax">
                      {event.nmax >= event.userEvents.length ? (
                        <h5 style={{ color: "green" }}>
                          {event.userEvents.length}/{event.nmax}{" "}
                        </h5>
                      ) : (
                        <h5 style={{ color: "red" }}>
                          {event.userEvents.length}/{event.nmax}{" "}
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
