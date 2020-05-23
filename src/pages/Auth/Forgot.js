import React from "react";
import {
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonRow,
    IonCol,
    IonButton,
    IonLoading
} from "@ionic/react";
import NavHeader from "../Headers/NavHeader";

const Forgot = () => {

    return (
        <IonPage>
            <NavHeader title="Password Reset" />
            <IonLoading message={"Please wait..."} />
            <IonContent>
                <IonItem lines="full">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput
                        name="email"
                        type="text"
                        required
                    ></IonInput>
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonButton
                            type="submit"
                            color="primary"
                            expand="block"
                        >
                            Get Reset Link
            </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Forgot;