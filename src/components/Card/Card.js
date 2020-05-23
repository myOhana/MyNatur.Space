import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
  IonButton,
} from "@ionic/react";
import "./Card.css";
import 'tachyons';

const Card = ({ id, organization, location, day, date, details }) => {
  return (
    <IonCard className='grow ma4 bordercolor'>
      <IonCardHeader>
        <IonCardSubtitle>{organization}</IonCardSubtitle>
        <IonCardTitle>{location}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Day: {day}
        <br />
        Date: {date}
        <br />
        {details}
      </IonCardContent>
      <IonButton className="button" color='success' fill='outline' target='_blank' >Visit Event</IonButton>
    </IonCard>
  );
};

export default Card;
