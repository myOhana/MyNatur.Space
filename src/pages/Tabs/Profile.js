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
} from "@ionic/react";
import '../../theme/variables.css';
import '../../theme/profilepage.css';

const Profile = () => {
    return (
        <IonPage>
            <IonContent>
                <IonHeader className="profile-headline">
                    <IonToolbar color="headline">
                        <IonTitle>My Nature Profile</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol size="auto">
                            <IonAvatar className="avataar-image box">
                                <img src="https://image.flaticon.com/icons/svg/145/145852.svg" alt="avataar" />
                            </IonAvatar>
                        </IonCol>
                        <IonCol size="6">
                            <IonItem lines="none">
                                <IonLabel className="trees-planted">
                                    <h2> Trees Planted: </h2>
                                </IonLabel>
                            </IonItem>
                            <IonItem lines="none">
                                <IonLabel className="trees-saved">
                                    <h2> Trees Saved: </h2>
                                </IonLabel>
                            </IonItem>
                            <IonItem lines="none">
                                <IonLabel className="trees-cut">
                                    <h2> Trees Cut: </h2>
                                </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Profile;