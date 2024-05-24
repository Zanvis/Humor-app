import ExploreContainer from '../components/ExploreContainer';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonApp,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
  createAnimation,
  setupIonicReact
} from '@ionic/react';
import { happy, sad } from 'ionicons/icons';
import type { Animation } from '@ionic/react';

import { useEffect, useRef, useState } from 'react';
import './Tab1.css';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from './actions';
// const store = createStore((state = {}) => state);
const store = configureStore({
  reducer: (state = {}) => state,
});
// let ifH = false, ifS = false, ifP = false;

const Tab1: React.FC = () => {
  const [text, setText] = useState('');
  const [textValue, setTextValue] = useState('');
  const textRef = useRef<HTMLIonLabelElement>(null);
  const [h, setH] = useState(0);
  const [s, setS] = useState(0);
  const [p, setP] = useState(0);
  const [ifH, boolH] = useState(false);
  const [ifS, boolS] = useState(false);
  const [ifP, boolP] = useState(false);

  let a = new Date();
  let days = new Array(7);
  days[0] = "Niedziela";
  days[1] = "Poniedziałek";
  days[2] = "Wtorek";
  days[3] = "Środa";
  days[4] = "Czwartek";
  days[5] = "Piątek";
  days[6] = "Sobota";
  let day = days[a.getDay()];

  const dispatch = useDispatch();
  let random = 0;
  const data = useSelector((state: any) => state.data);
  const sadText = ["Jesteś smutny :(. Bardzo mi przykro, trzymaj się, nie jesteś sam!", "Choć czujesz smutek, to jesteś silny i przetrwasz to. Wokół ciebie są ludzie, którzy troszczą się o ciebie. Nie jesteś sam!", "Czasami życie bywa trudne, ale ważne jest, że masz przyjaciół, którzy zawsze cię wspierają. Razem jesteście silniejsi. Trzymaj się!", "Gdy czujesz smutek, pamiętaj, że każdy dzień przynosi nową szansę na uśmiech. Masz wsparcie na każdym kroku. Nie jesteś sam!"];
  const pokerText = ["Nie jest źle, ale mogło być lepiej, co nie? Głowa do góry, będzie lepiej!", "Nie jest źle, ale zawsze jest pole do poprawy, prawda? Nie trać nadziei, z czasem będzie tylko lepiej!", "Tak, mogło być lepiej, ale pamiętaj, że każdy dzień to nowa szansa na poprawę. Nie zrażaj się, przed tobą wiele pięknych chwil!", "Nie wszystko zawsze idzie po naszej myśli, ale to właśnie z takich doświadczeń czerpiemy naukę i siłę. Trzymaj głowę wysoko, lepsze dni nadchodzą!"];
  const happyText = ["Dobrze słyszeć, że ci się układa. Spędź miło ten czas i ciesz się chwilą!", "Dobre wieści zawsze cieszą! Teraz czas na relaks i pełne wykorzystanie tego dobrego momentu. Ciesz się!", "To naprawdę fajnie słyszeć, że masz dobre chwile. Warto docenić te momenty i cieszyć się nimi na maxa!", "Cieszę się, że twoje dni są tak udane. Teraz to doskonały moment, aby w pełni korzystać z tych sukcesów i cieszyć się każdą chwilą."];
  const notbadText = ["Jesteś na dobrej drodze, choć jeszcze trochę pracy przed tobą. Nie poddawaj się, bo widzę w tobie ogromny potencjał!", "Masz chwile, gdy idzie lepiej, ale też są wyzwania do pokonania. To okazja, aby się rozwijać i osiągać jeszcze więcej. Trzymaj się tego kierunku!", "Twoje starania przynoszą efekty, ale wciąż jest miejsce na rozwój. Warto być cierpliwym i dążyć do coraz większych sukcesów!", "Widzę, że dajesz z siebie dużo, ale czasem bywa trudno. To normalne, ale nie rezygnuj. Każdy dzień jest nową możliwością na poprawę."];
  const notgoodText = ["Mogło być lepiej, ale ważne, że nie poddajesz się. Trzymaj się, bo przeciwności kształtują naszą siłę i wytrwałość.", "Chociaż są trudności, wciąż masz w sobie siłę, aby przeciwdziałać przeciwnościom losu. Nie zapominaj, że z czasem sytuacja może się polepszyć.", "Wiem, że bywa trudno, ale masz w sobie potencjał do pokonywania trudności. Nie rezygnuj, bo każda porażka może być nauką na przyszłość.", "Czasem życie stawia nam trudności na drodze, ale jesteś wystarczająco silny, aby je pokonać. Trzymaj się i wierzę, że wyjdziesz z tego jeszcze silniejszy."];

  useEffect(() => {
    dispatch(setData(text));
  }, [text]);

  const animateText = async (message: string) => {
    if (textRef.current) {
      // Make the text invisible before animating it
      textRef.current.style.opacity = '0';
  
      const animation: Animation = createAnimation()
        .addElement(textRef.current)
        .duration(1000) // Adjust the duration as needed
        .fromTo('opacity', '0', '1')
        .beforeStyles({ opacity: '0' })
        .afterStyles({ opacity: '1' });
  
      await animation.play();
  
      // Update the text element's style to make it visible
      textRef.current.style.opacity = '1';
    }
  };

  const sad = () => {
    random = Math.floor(Math.random() * 4);
    setText(sadText[random]);

    setTextValue('sad')

    if (day=="Poniedziałek")
      localStorage.setItem('pon', 'sad');
    else if (day=="Wtorek")
      localStorage.setItem('wt', 'sad');
    else if (day=="Środa")
      localStorage.setItem('sr', 'sad');
    else if (day=="Czwartek")
      localStorage.setItem('czw', 'sad');
    else if (day=="Piątek")
      localStorage.setItem('pt', 'sad');
    else if (day=="Sobota")
      localStorage.setItem('sob', 'sad');
    else if (day=="Niedziela")
      localStorage.setItem('nd', 'sad');
    // Animate the text
    animateText(text);
  };

  const poker = () => {
    random = Math.floor(Math.random() * 4);
    setText(pokerText[random]);

    setTextValue('poker')

    if (day=="Poniedziałek")
      localStorage.setItem('pon', 'poker');
    else if (day=="Wtorek")
      localStorage.setItem('wt', 'poker');
    else if (day=="Środa")
      localStorage.setItem('sr', 'poker');
    else if (day=="Czwartek")
      localStorage.setItem('czw', 'poker');
    else if (day=="Piątek")
      localStorage.setItem('pt', 'poker');
    else if (day=="Sobota")
      localStorage.setItem('sob', 'poker');
    else if (day=="Niedziela")
      localStorage.setItem('nd', 'poker');
    // Animate the text
    animateText(text);
  };
  
  const happy = () => {
    random = Math.floor(Math.random() * 4);
    setText(happyText[random]);

    setTextValue('happy')

    if (day=="Poniedziałek")
      localStorage.setItem('pon', 'happy');
    else if (day=="Wtorek")
      localStorage.setItem('wt', 'happy');
    else if (day=="Środa")
      localStorage.setItem('sr', 'happy');
    else if (day=="Czwartek")
      localStorage.setItem('czw', 'happy');
    else if (day=="Piątek")
      localStorage.setItem('pt', 'happy');
    else if (day=="Sobota")
      localStorage.setItem('sob', 'happy');
    else if (day=="Niedziela")
      localStorage.setItem('nd', 'happy');
    // Animate the text
    animateText(text);
  };

  const notbad = () => {
    random = Math.floor(Math.random() * 4);
    setText(notbadText[random]);

    setTextValue('notbad')

    if (day=="Poniedziałek")
      localStorage.setItem('pon', 'notbad');
    else if (day=="Wtorek")
      localStorage.setItem('wt', 'notbad');
    else if (day=="Środa")
      localStorage.setItem('sr', 'notbad');
    else if (day=="Czwartek")
      localStorage.setItem('czw', 'notbad');
    else if (day=="Piątek")
      localStorage.setItem('pt', 'notbad');
    else if (day=="Sobota")
      localStorage.setItem('sob', 'notbad');
    else if (day=="Niedziela")
      localStorage.setItem('nd', 'notbad');
    // Animate the text
    animateText(text);
  };

  const notgood = () => {
    random = Math.floor(Math.random() * 4);
    setText(notgoodText[random]);

    setTextValue('notgood')

    if (day=="Poniedziałek")
      localStorage.setItem('pon', 'notgood');
    else if (day=="Wtorek")
      localStorage.setItem('wt', 'notgood');
    else if (day=="Środa")
      localStorage.setItem('sr', 'notgood');
    else if (day=="Czwartek")
      localStorage.setItem('czw', 'notgood');
    else if (day=="Piątek")
      localStorage.setItem('pt', 'notgood');
    else if (day=="Sobota")
      localStorage.setItem('sob', 'notgood');
    else if (day=="Niedziela")
      localStorage.setItem('nd', 'notgood');
    // Animate the text
    animateText(text);
  };
  
  useEffect(() => {
    dispatch(setData(textValue));
  }, [textValue]);

  return (
  <IonPage>
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size="12">
            <div className="ion-padding">
              {/* This empty div pushes content down */}
            </div>
            <div className="ion-padding">
              {/* This empty div pushes content down */}
            </div>
            <div className = "ion-text-center">
              <IonLabel style={{ color: '#333333', fontWeight: 'bold', fontSize: '36px' }} className="ion-text-wrap">Jaki masz dzisiaj humor?</IonLabel>
            </div>
          </IonCol>
        </IonRow>
        <IonRow className="ion-text-center">
          <IonCol size="12">
            <IonButton onClick={sad} size="large" aria-label="Favorite" style={{ marginRight: '30px' }}>
              <IonIcon aria-hidden="true" slot="icon-only" src="/assets/sad.svg"></IonIcon>
            </IonButton>
            <IonButton onClick={notgood} size="large" aria-label="Favorite">
              <IonIcon aria-hidden="true" slot="icon-only" src="/assets/sad-svgrepo-com.svg"></IonIcon>
            </IonButton>
            <IonButton onClick={poker} size="large" aria-label="Favorite" style={{ marginLeft: '30px' }}>
              <IonIcon aria-hidden="true" slot="icon-only" src="/assets/poker.svg"></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow className="ion-text-center">
          <IonCol size="12">
            <IonButton onClick={notbad} size="large" aria-label="Favorite" style={{marginRight: '15px'}}>
              <IonIcon aria-hidden="true" slot="icon-only" src="/assets/happy-1-svgrepo-com.svg"></IonIcon>
            </IonButton>
            <IonButton onClick={happy} size="large" aria-label="Favorite" style={{marginLeft: '15px'}}>
              <IonIcon aria-hidden="true" slot="icon-only" src="/assets/happy.svg"></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12">
          <div className = "ion-text-center">
              <IonLabel ref={textRef} style={{ color: '#333333', fontWeight: 'bold', fontSize: '29px'}} className="ion-text-wrap" >{text}</IonLabel>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
  );
};

export default Tab1;
