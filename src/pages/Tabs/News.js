import React from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
} from "@ionic/react";
import Newslist from "../../components/Newslist/Newslist";
import {newsinfo} from '../../newsinfo';

const News = () => {
 return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>News</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <Newslist newsinfo={newsinfo} />
        </IonContent>
      </IonPage>
    );
  }


export default News;
