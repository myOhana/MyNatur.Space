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
  IonLoading,
} from "@ionic/react";
import firebase from "../../firebase";
import { toast } from "../../helpers/toast";
import useForm from "../../hooks/useForm";
import validatePasswordReset from "../../validators/validatePasswordReset";
import NavHeader from "../Headers/NavHeader";
import "tachyons";

const INITIAL_STATE = {
  email: "",
};

const Forgot = (props) => {
  const { handleSubmit, handleChange, values, isSubmitting } = useForm(
    INITIAL_STATE,
    validatePasswordReset,
    handleResetPassword
  );

  const [busy, setBusy] = React.useState(false);

  async function handleResetPassword() {
    setBusy(true);
    const { email } = values;
    try {
      await firebase.resetPassword(email);
      toast("Check your email to reset your password.");
      props.history.push("/login");
    } catch (err) {
      console.error("Password Reset Error", err);
      toast(err.message);
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <IonContent>
        <article className="br3 ba b--black-10 mv6 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <NavHeader title="Password Reset" />
          <IonLoading message={"Please wait..."} isOpen={busy} />

          <IonItem lines="full">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              name="email"
              value={values.email}
              type="text"
              onIonChange={handleChange}
              required
            ></IonInput>
          </IonItem>
          <IonRow>
            <IonCol>
              <IonButton
                type="submit"
                color="secondary"
                className='tc ma3'
                expand="block"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                Get Reset Link
              </IonButton>
            </IonCol>
          </IonRow>
        </article>
      </IonContent>
    </IonPage>
  );
};

export default Forgot;
