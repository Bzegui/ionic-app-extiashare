import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Tab2.css';

const TestModale: React.FC = () => {

  // alert hooks :

  const [presentAlert] = useIonAlert();

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test modale</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Test modale</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton
          onClick={() =>
            presentAlert({
              header: 'Authentification',
              subHeader: 'Succès!',
              message: 'Bonjour username',
              buttons: [`retourner sur l'application`],
            })
          }
        >
          Click Me
        </IonButton>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default TestModale;
