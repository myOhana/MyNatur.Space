import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
  IonButton,
} from "@ionic/react";
import "../Card/Card.css";

const NewsCard = ({ author, title, url, publishedAt, description }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>{author}</IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Date: {publishedAt}
        <br />
        {description}
      </IonCardContent>
      <IonButton
        className="button"
        color="success"
        fill="outline"
        target="_blank"
        href={url}
      >
        Visit Event
      </IonButton>
    </IonCard>
  );
};

export default NewsCard;
