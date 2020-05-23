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
import 'tachyons';
import '../../theme/variables.css';

const NewsCard = ({ author, title, url, publishedAt, description }) => {
  return (
    <IonCard className='ma4 bordercolorn' >
      <IonCardHeader>
        <IonCardSubtitle>{author}</IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Published on: {publishedAt}
        <br />
        {description}
      </IonCardContent>
      <IonButton
        className="button"
        color="newsheadline"
        fill="outline"
        target="_blank"
        href={url}
      >
        Visit Article
      </IonButton>
    </IonCard>
  );
};

export default NewsCard;
