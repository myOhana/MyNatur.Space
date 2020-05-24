import React from "react";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  IonAvatar,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonButton,
} from "@ionic/react";
import "../../theme/variables.css";
import "../../theme/profilepage.css";
import UserContext from "../../contexts/UserContext";
import firebase from "../../firebase";
import { toast } from "../../helpers/toast";

function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}


const Profile = (props) => {
  const { user } = React.useContext(UserContext);

  async function logoutUser() {
    try {
      await firebase.logout();
      props.history.push("/profile");
      toast("You have logged out successfully.");
    } catch (err) {
      console.error("Logout Error", err);
      toast(err.message);
    }
  }

  const [plantedcount, setCountPlanted] = useStickyState(0, "plantedcount");
  const [savedcount, setCountSaved] = useStickyState(0, "savedcount");
  const [cutcount, setCountCut] = useStickyState(0, "countcut");

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar color="profileheadline">
            <IonTitle>MyNatur Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        {user ? (
          <>
            <IonGrid>
              <IonRow>
                <IonCol className="avatar-col" size="auto">
                  <IonAvatar className="avataar-image box">
                    <img
                      src="https://image.flaticon.com/icons/svg/2911/2911573.svg"
                      alt="avataar"
                    />
                  </IonAvatar>
                  <IonText>
                    <h5>Hi, {user.displayName}</h5>
                  </IonText>
                </IonCol>
                <IonCol size="12">
                  <IonItem lines="none">
                    <IonLabel className="trees-planted">
                      <h2> Trees Planted: {plantedcount}</h2>
                    </IonLabel>
                    <IonButton
                      onClick={() => setCountPlanted(plantedcount + 1)}
                    > click me </IonButton>
                  </IonItem>
                  <IonItem lines="none">
                    <IonLabel className="trees-saved">
                      <h2> Trees Saved: {savedcount}</h2>
                    </IonLabel>
                    <IonButton
                      onClick={() => setCountSaved(savedcount + 1)}
                    > click me </IonButton>
                  </IonItem>
                  <IonItem lines="none">
                    <IonLabel className="trees-cut" color="profileheadline">
                      <h2> Trees Cut: {cutcount}</h2>
                    </IonLabel>
                    <IonButton
                    onClick={() => setCountCut(cutcount + 1)}
                  > click me </IonButton>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton
                    expand="block"
                    routerLink={`/edit-profile`}
                    color="primary"
                    fill="outline"
                  >
                    Edit Profile
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton
                    expand="block"
                    color="primary"
                    onClick={logoutUser}
                  >
                    Log Out
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </>
        ) : (
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink={`/register`}
                  color="primary"
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
                  color="primary"
                  fill="outline"
                >
                  Log In
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Profile;
