import React from "react";
import {
  IonPage,
  IonContent,
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonLoading,
  IonText,
} from "@ionic/react";
import { toast } from "../../helpers/toast";
import useForm from "../../hooks/useForm";
import validateSignup from "../../validators/validateSignup";
import firebase from "../../firebase";
import NavHeader from "../Headers/NavHeader";
import "tachyons";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  treesPlanted: "",
  treesSaved: "",
  treesCut: "",
};

const Signup = (props) => {
  const { handleSubmit, handleChange, values, isSubmitting } = useForm(
    INITIAL_STATE,
    validateSignup,
    authenticateUser
  );
  const [busy, setBusy] = React.useState(false);

  async function authenticateUser() {
    setBusy(true);
    const {
      name,
      email,
      password,
    } = values;
    try {
      await firebase.register(
        name,
        email,
        password,
      );
      toast("You have signed up successfully!");
      props.history.push("/");
    } catch (err) {
      console.error("Authentication Error", err);
      toast(err.message);
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <IonLoading message={"Please wait..."} isOpen={busy} />

      <IonContent>
        <IonText color="medium" className="tc ma4">
          <h2> Welcome to MyNatur Space!</h2>
          <p className="pa3 tc">
            {" "}
            This Self-Assessment App helps in taking care of the environment.{" "}
            <br /> It affects each of us personally and helps us track the trees
            that have been cut or planted because of us.
            <br /> It also provides us with News of the Environment and
            different Tree Plantation Events.
          </p>
        </IonText>
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <NavHeader title="Sign Up" />
          <IonItem lines="full">
            <IonLabel position="floating">Username</IonLabel>
            <IonInput
              name="name"
              type="text"
              value={values.name}
              onIonChange={handleChange}
              required
            ></IonInput>
          </IonItem>

          <IonItem lines="full">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              name="email"
              type="text"
              value={values.email}
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

          {/*<IonItem lines="full">
        <IonLabel position="floating">Trees Planted</IonLabel>
        <IonInput
          name="treesPlanted"
          type="text"
          value={values.treesPlanted}
          onIonChange={handleChange}
          required
        ></IonInput>
      </IonItem>

          <IonItem lines="full">
            <IonLabel position="floating">Trees Saved</IonLabel>
            <IonInput
              name="treesSaved"
              type="text"
              value={values.treesSaved}
              onIonChange={handleChange}
              required
            ></IonInput>
          </IonItem>

          <IonItem lines="full">
            <IonLabel position="floating">Trees Cut</IonLabel>
            <IonInput
              name="treesCut"
              type="text"
              value={values.treesCut}
              onIonChange={handleChange}
              required
            ></IonInput>
  </IonItem>*/}

          <IonRow>
            <IonCol>
              <IonButton
                className="tc ma3"
                type="submit"
                color="secondary"
                expand="block"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                Sign Up
              </IonButton>
            </IonCol>
          </IonRow>
        </article>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
