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
      to={`./evento/${event.idevent}`}
    >
      <Col className="animate__animated animate__fadeInLeft">
        <hr style={{ border: "none" }} />
        <Row>
          <Container
            className={` ${event.end_date < Date.now() ? "eventold" : "event"}`}
          >
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
                    <Badge variant="success">
                      {moment(event.start_date).format(
                        "DD/MM/YYYY [a las] h:mm:ss  "
                      )}
                    </Badge>{" "}
                    <hr />
                    <Badge variant="danger">
                      {moment(event.end_date).format(
                        "DD/MM/YYYY [a las] h:mm:ss  "
                      )}
                    </Badge>
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
