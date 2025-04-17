import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

interface PageProps {
  src: string;
  title: string;
  subtitle: string;
  //   caption: string;
}

const MovieCard = ({ src, title, subtitle }: PageProps) => {
  return (
    <IonCard>
      <img alt="cover" src={src} />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{subtitle}</IonCardSubtitle>
      </IonCardHeader>

      {/* <IonCardContent>{caption}</IonCardContent> */}
    </IonCard>
  );
};

export default MovieCard;
