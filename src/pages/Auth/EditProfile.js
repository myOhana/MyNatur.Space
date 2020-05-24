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
} from "@ionic/react";
import firebase from "../../firebase";
import useForm from "../../hooks/useForm";
import validateEditProfile from "../../validators/validateEditProfile";
import UserContext from "../../contexts/UserContext";
import { toast } from "../../helpers/toast";
import NavHeader from "../Headers/NavHeader";
import "../../theme/variables.css";

const EditProfile = (props) => {
    const { user, setUser } = React.useContext(UserContext);
    const INITIAL_STATE = {
        name: user && user.displayName,
        email: user && user.email,
        newPassword: "",
        currentPassword: "",
    };
    const {
        handleSubmit,
        handleChange,
        setValues,
        values,
        isSubmitting,
    } = useForm(INITIAL_STATE, validateEditProfile, authenticateUser);
    const [busy, setBusy] = React.useState(false);

    async function reauthenticate(email, password) {
        const credential = firebase.app.auth.EmailAuthProvider.credential(
            email,
            password
        );
        try {
            await user.reauthenticateWithCredential(credential);
            console.log("Reauthentication Successful");
        } catch (err) {
            console.error("Profile Update Error", err);
            toast(err.message);
        }
    }

    async function updateProfileItems(name, email, password) {
        await user.updateProfile({
            displayName: name,
        });
        await user.updateEmail(email);
        if (password) {
            await user.updatePassword(password);
        }
    }

    async function authenticateUser() {
        setBusy(true);
        const { name, email, currentPassword, newPassword } = values;
        try {
            await reauthenticate(user.email, currentPassword);
            await updateProfileItems(name, email, newPassword);
            const result = await firebase.login(
                email,
                newPassword || currentPassword
            );
            setValues({
                name: user && user.displayName,
                email: user && user.email,
                newPassword: "",
                currentPassword: "",
            });
            setUser(result.user);
            toast("You have updated your profile successfully.");
            props.history.push("/profile");
        } catch (err) {
            console.error("Profile Update Error", err);
            toast(err.message);
        }
        setBusy(false);
    }

    return (
        <IonPage>
            <NavHeader title="Edit Profile" />
            <IonLoading message={"Please wait..."} isOpen={busy} />
            <IonContent>
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
                    <IonLabel position="floating">New Password</IonLabel>
                    <IonInput
                        name="newPassword"
                        type="password"
                        value={values.newPassword}
                        onIonChange={handleChange}
                    ></IonInput>
                </IonItem>

                <IonItem lines="full">
                    <IonLabel position="floating">Current Password</IonLabel>
                    <IonInput
                        name="currentPassword"
                        type="password"
                        value={values.currentPassword}
                        onIonChange={handleChange}
                        required
                    ></IonInput>
                </IonItem>

                <IonRow>
                    <IonCol>
                        <IonButton
                            type="submit"
                            color="primary"
                            expand="block"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            Save
            </IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default EditProfile;

// import React from "react";
// import {
//     IonContent,
//     IonPage,
//     IonItem,
//     IonLabel,
//     IonInput,
//     IonRow,
//     IonCol,
//     IonButton,
// } from "@ionic/react";
// import useForm from "../../hooks/useForm";
// import firebase from "../../firebase";
// import UserContext from "../../contexts/UserContext";
// import NavHeader from "../Headers/NavHeader";
// import validateCreateData from "../../validators/validateCreateData";

// const INITIAL_STATE = {
//     treesPlanted: "",
//     treesSaved: "",
//     treesCut: "",
// };

// const EditProfile = (props) => {
//     const { user } = React.useContext(UserContext);
//     const { handleSubmit, handleChange, values } = useForm(
//         INITIAL_STATE,
//         validateCreateData,
//         handleCreateInfo
//     );

//     function handleCreateInfo() {
//         if (!user) {
//             props.history.push("/login");
//         } else {
//             const { treesPlanted, treesSaved, treesCut } = values;
//             const newData = {
//                 treesPlanted,
//                 treesSaved,
//                 treesCut,
//             };
//             firebase.db.collection("treesData").add(newData);
//             props.history.push("/profile");
//         }
//     }




//     return (
//         <IonPage>
//             <IonContent>
//                 <NavHeader title="Edit Profile" />
//                 <IonItem lines="full">
//                     <IonLabel position="floating">Trees Planted</IonLabel>
//                     <IonInput
//                         name="treesPlanted"
//                         value={values.treesPlanted}
//                         type="text"
//                         onIonChange={handleChange}
//                         required
//                     ></IonInput>
//                 </IonItem>

//                 <IonItem lines="full">
//                     <IonLabel position="floating">Trees Saved</IonLabel>
//                     <IonInput
//                         name="treesSaved"
//                         type="text"
//                         value={values.treesSaved}
//                         onIonChange={handleChange}
//                         required
//                     ></IonInput>
//                 </IonItem>

//                 <IonItem lines="full">
//                     <IonLabel position="floating">Trees Cut</IonLabel>
//                     <IonInput
//                         name="treesCut"
//                         type="text"
//                         value={values.treesCut}
//                         onIonChange={handleChange}
//                         required
//                     ></IonInput>
//                 </IonItem>

//                 <IonRow>
//                     <IonCol>
//                         <IonButton
//                             type="submit"
//                             color="primary"
//                             expand="block"
//                             onClick={handleSubmit}
//                         >
//                             Submit
//             </IonButton>
//                     </IonCol>
//                 </IonRow>
//             </IonContent>
//         </IonPage>
//     );
// };

// export default EditProfile;