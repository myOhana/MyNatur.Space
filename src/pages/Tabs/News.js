import React from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
} from "@ionic/react";
import Newslist from "../../components/Newslist/Newslist";
import { newsinfo } from '../../newsinfo';
import '../../theme/variables.css';

const News = () => {
 return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="newsheadline">
            <IonTitle>MyNatur News</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <Newslist newsinfo={newsinfo} />
        </IonContent>
      </IonPage>
    );
  }


export default News;
