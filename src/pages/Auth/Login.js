import React from "react";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonInput,
  IonLabel,
  IonRouterLink,
  IonLoading,
} from "@ionic/react";
import { toast } from "../../helpers/toast";
import useForm from "../../hooks/useForm";
import validateLogin from "../../validators/validateLogin";
import firebase from "../../firebase";
import NavHeader from "../Headers/NavHeader";
import "tachyons";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login = (props) => {
  const { handleSubmit, handleChange, values, isSubmitting } = useForm(
    INITIAL_STATE,
    validateLogin,
    authenticateUser
  );
  const [busy, setBusy] = React.useState(false);

  async function authenticateUser() {
    setBusy(true);
    const { email, password } = values;
    try {
      await firebase.login(email, password);
      toast("You have logged in successfully!");
      props.history.push("/");
    } catch (err) {
      console.error("Authentication Error", err);
      toast(err.message);
    }
    setBusy(false);
  }

  return (
    <IonPage>
    <IonContent>
    <article className="br3 ba b--black-10 mv6 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <NavHeader title="Log In" />
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
        <IonItem lines="full">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            name="password"
            type="password"
            value={values.password}
            onIonChange={handleChange}
            required
          ></IonInput>
        </IonItem>

        <IonRow>
          <IonCol>
            <IonButton
              type="submit"
              color="secondary"
              expand="block"
              className='tc ma3'
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Log In
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="tc ion-padding-vertical">
            <IonRouterLink routerLink={`/register`}>
              Sign Up
            </IonRouterLink>
          </IonCol>
          <IonCol className="ion-padding-vertical">
            <IonRouterLink routerLink={`/forgot`}>
              Forgot Password?
            </IonRouterLink>
          </IonCol>
        </IonRow>
     
      </article>
      </IonContent>
    </IonPage>
  );
};

export default Login;
