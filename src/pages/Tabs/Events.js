import React from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent
} from "@ionic/react";
import Cardlist from "../../components/CardList/Cardlist";
import { eventinformation } from '../../eventinformation';

const Events = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Cardlist eventinformation={eventinformation} />
      </IonContent>
    </IonPage>
  );
};

export default Events;
