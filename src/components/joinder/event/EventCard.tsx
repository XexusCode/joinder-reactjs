import React from "react";
import "./EventCard.scss";
import { EventObject } from "../../../models/models";
import moment from "moment";
import {Badge} from "react-bootstrap";
import {
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share'
import {TwitterShareButton} from "react-share/es";
import { Link } from "react-router-dom";

interface EventCardParams {
  handleActiveEvent: (event: EventObject) => void;
  event: EventObject;
}

export const EventCard = ({
  event,
  handleActiveEvent,
}: EventCardParams): JSX.Element => {
  return (
      <Link
          onClick={() => {
            handleActiveEvent(event)

          }}
          style={{ color: 'inherit', textDecoration: 'inherit'}}
          to={`./evento/${event.id}`}>
      <div className="container-fluid pt-4 ">
        <div >
          <div style={{padding:'0px 0px 0px 0px'}} className="animate__animated animate__fadeInLeft  [ col-xs-12 col-sm-offset-2 col-sm-8 ]  grayscale container-fluid ">
            <ul className="event-list " >

              <li>

                <img  alt={event.title} src={event.img}/>
                <div className="info">
                  <h2 className="title">{event.title}</h2>
                  <p className="desc">{event.location}</p>
                  <ul>
                    <li style={{width:'33%'}}> <Badge variant="success">
                      {moment(parseInt(event.startDate)).format(
                          "DD/MM/YYYY [a las] h:mm:ss  "
                      )}
                    </Badge>

                    </li>
                    <li style={{width:'34%'}}><Badge variant="danger">
                      {moment(parseInt(event.endDate)).format(
                          "DD/MM/YYYY [a las] h:mm:ss"
                      )}
                    </Badge></li>
                    <li style={{width:'33%'}}>  {event.nmax > event.userEvents.length ? (
                        <span style={{ color: "green" }}>
                          {event.userEvents.length}/{event.nmax}{" "}
                        </span>
                    ) : (
                        <span style={{ color: "red" }}>
                          {event.userEvents.length}/{event.nmax}{" "}
                        </span>
                    )} <span className="fa fa-users"/></li>
                  </ul>
                </div>
                <div className="social">
                  <ul >
                    <li className='pb-2'>
                    <TwitterShareButton
                        url={`www.joinder.com`}
                        title={`¿QUIERES UNIRTE A MI EVENTO ??? ${event.title}  CODIGO:  ${event.id}  Contraseña:  ${event.password}`}
                        className="Demo__some-network__share-button">
                      <TwitterIcon
                          size={32}
                          round />
                    </TwitterShareButton>
                    </li>
                    <li className='pb-2'>

                    <WhatsappShareButton
                        url={`www.joinder.com`}
                        title={'¿QUIERES UNIRTE A MI EVENTO ??? '}
                        className="Demo__some-network__share-button">
                      <WhatsappIcon
                          size={32}
                          round />
                    </WhatsappShareButton>
                    </li>
                    <li className='pb-2'>

                    <TelegramShareButton
                        url={`www.joinder.com`}
                        title={'¿QUIERES UNIRTE A MI EVENTO ??? '}
                        className="Demo__some-network__share-button">
                      <TelegramIcon
                          size={32}
                          round />
                    </TelegramShareButton>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Link>
  );
};
