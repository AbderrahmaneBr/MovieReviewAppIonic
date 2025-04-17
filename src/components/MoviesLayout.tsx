import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./MoviesLayout.css";

interface PageProps {
  children: React.ReactNode;
  title: string;
}

const MoviesLayout: React.FC<PageProps> = ({ children, title }) => {
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <div className="grid-container">{children}</div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default MoviesLayout;
