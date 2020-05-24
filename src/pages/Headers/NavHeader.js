import React from "react";
import {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton
} from "@ionic/react";
import '../../theme/variables.css';
import 'tachyons';

const NavHeader = ({ title }) => {
    return (
        <IonHeader className='br1'>
            <IonToolbar  className='br2' color="secondary">
                <IonButtons slot="start">
                    <IonBackButton className="pa3" defaultHref="/login" />
                    <IonTitle>{ title }</IonTitle>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
};

export default NavHeader;