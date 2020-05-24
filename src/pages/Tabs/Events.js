import React from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonText
} from "@ionic/react";
import Cardlist from "../../components/CardList/Cardlist";
import { eventinformation } from '../../eventinformation';
import '../../theme/variables.css';
import UserContext from "../../contexts/UserContext";
// import firebase from "../../firebase";
// import { toast } from "../../helpers/toast";


const Events = (props) => {
  const { user } = React.useContext(UserContext);
  // eslint-disable-next-line
  // async function logoutUser() {
  //   try {
  //       await firebase.logout();
  //       props.history.push("/profile");
  //       toast("You have logged out successfully.");
  //   } catch (err) {
  //       console.error("Logout Error", err);
  //       toast(err.message);
  //   }


  return (
    <IonPage>
    <IonContent fullscreen>
      <IonHeader>
        <IonToolbar color="headline">
          <IonTitle>MyNatur Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      {user ? (
        <Cardlist eventinformation={eventinformation} />
      ) : (
        <>
        <IonText color='medium'>
        <h1 className='tc'>Please Login to view this page</h1></IonText>
        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonButton
                                        expand="block"
                                        routerLink={`/register`}
                                        color="secondary"
                                    >
                                        Sign Up
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonButton
                                        expand="block"
                                        routerLink={`/login`}
                                        color="tertiary"
                                        fill="outline"
                                    >
                                        Log In
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        </>
                   
      )}
      </IonContent>
      </IonPage>
  );
};

export default Events;
