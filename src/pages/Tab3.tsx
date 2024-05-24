import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCheckbox, IonLabel, IonList, IonItem, CheckboxChangeEventDetail, IonButton, IonGrid, IonRow, IonCol, IonInfiniteScrollContent, IonInfiniteScroll } from '@ionic/react';
import './Tab3.css';
import { useEffect, useState } from 'react';

const Tab3: React.FC = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);
  const [isChecked9, setIsChecked9] = useState(false);
  const [isChecked10, setIsChecked10] = useState(false);
  const [isChecked11, setIsChecked11] = useState(false);

  const [isDisabled1, setIsDisabled1] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(false);
  const [isDisabled3, setIsDisabled3] = useState(false);
  const [isDisabled4, setIsDisabled4] = useState(false);
  const [isDisabled5, setIsDisabled5] = useState(false);
  const [isDisabled6, setIsDisabled6] = useState(false);
  const [isDisabled7, setIsDisabled7] = useState(false);
  const [isDisabled8, setIsDisabled8] = useState(false);
  const [isDisabled9, setIsDisabled9] = useState(false);
  const [isDisabled10, setIsDisabled10] = useState(false);
  const [isDisabled11, setIsDisabled11] = useState(false);

  const handleCheckboxChange1 = (event: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked1(event.detail.checked);
  };

  const handleCheckboxChange2 = (event: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked2(event.detail.checked);
  };

  const handleCheckboxChange3 = (event: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked3(event.detail.checked);
  };

  const handleCheckboxChange4 = (event: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked4(event.detail.checked);
  };

  const handleCheckboxChange5 = (event: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked5(event.detail.checked);
  };

  const handleCheckboxChange6 = (event: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked6(event.detail.checked);
  };

  const handleCheckboxChange7 = (event: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked7(event.detail.checked);
  };

  const handleCheckboxChange8 = (event: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked8(event.detail.checked);
  };

  const handleCheckboxChange9 = (event: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked9(event.detail.checked);
  };
  
  const handleCheckboxChange10 = (event: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked10(event.detail.checked);
  };

  const handleCheckboxChange11 = (event: { detail: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked11(event.detail.checked);
  };

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
  const [DayLabel, setDayLabel] = useState(day);

  // wcześniej to wszystko było po prostu w if (day=="Poniedziałek") to usuń te rzeczy i tyle, bez useEffect czy coś
  const clearLocalStorageData = () => {
    localStorage.removeItem('strach1');
    localStorage.removeItem('strach2');
    localStorage.removeItem('strach3');
    localStorage.removeItem('strach4');
    localStorage.removeItem('strach5');
    localStorage.removeItem('strach6');
    localStorage.removeItem('strach7');
    localStorage.removeItem('sen1');
    localStorage.removeItem('sen2');
    localStorage.removeItem('sen3');
    localStorage.removeItem('sen4');
    localStorage.removeItem('sen5');
    localStorage.removeItem('sen6');
    localStorage.removeItem('sen7');
    localStorage.removeItem('apetyt1');
    localStorage.removeItem('apetyt2');
    localStorage.removeItem('apetyt3');
    localStorage.removeItem('apetyt4');
    localStorage.removeItem('apetyt5');
    localStorage.removeItem('apetyt6');
    localStorage.removeItem('apetyt7');
    localStorage.removeItem('wymiot1');
    localStorage.removeItem('wymiot2');
    localStorage.removeItem('wymiot3');
    localStorage.removeItem('wymiot4');
    localStorage.removeItem('wymiot5');
    localStorage.removeItem('wymiot6');
    localStorage.removeItem('wymiot7');
    localStorage.removeItem('glowa1');
    localStorage.removeItem('glowa2');
    localStorage.removeItem('glowa3');
    localStorage.removeItem('glowa4');
    localStorage.removeItem('glowa5');
    localStorage.removeItem('glowa6');
    localStorage.removeItem('glowa7');
    localStorage.removeItem('samopoczucie1');
    localStorage.removeItem('samopoczucie2');
    localStorage.removeItem('samopoczucie3');
    localStorage.removeItem('samopoczucie4');
    localStorage.removeItem('samopoczucie5');
    localStorage.removeItem('samopoczucie6');
    localStorage.removeItem('samopoczucie7');
    localStorage.removeItem('mysli1');
    localStorage.removeItem('mysli2');
    localStorage.removeItem('mysli3');
    localStorage.removeItem('mysli4');
    localStorage.removeItem('mysli5');
    localStorage.removeItem('mysli6');
    localStorage.removeItem('mysli7');
    localStorage.removeItem('mysli7');
    localStorage.removeItem('zlosc1');
    localStorage.removeItem('zlosc2');
    localStorage.removeItem('zlosc3');
    localStorage.removeItem('zlosc4');
    localStorage.removeItem('zlosc5');
    localStorage.removeItem('zlosc6');
    localStorage.removeItem('zlosc7');
    localStorage.removeItem('brakpanowania1');
    localStorage.removeItem('brakpanowania2');
    localStorage.removeItem('brakpanowania3');
    localStorage.removeItem('brakpanowania4');
    localStorage.removeItem('brakpanowania5');
    localStorage.removeItem('brakpanowania6');
    localStorage.removeItem('brakpanowania7');
    localStorage.removeItem('placz1');
    localStorage.removeItem('placz2');
    localStorage.removeItem('placz3');
    localStorage.removeItem('placz4');
    localStorage.removeItem('placz5');
    localStorage.removeItem('placz6');
    localStorage.removeItem('placz7');
    localStorage.removeItem('samotnosc1');
    localStorage.removeItem('samotnosc2');
    localStorage.removeItem('samotnosc3');
    localStorage.removeItem('samotnosc4');
    localStorage.removeItem('samotnosc5');
    localStorage.removeItem('samotnosc6');
    localStorage.removeItem('samotnosc7');
    localStorage.setItem('strach1', 'false');
    localStorage.setItem('strach2', 'false');
    localStorage.setItem('strach3', 'false');
    localStorage.setItem('strach4', 'false');
    localStorage.setItem('strach5', 'false');
    localStorage.setItem('strach6', 'false');
    localStorage.setItem('strach7', 'false');
    localStorage.setItem('sen1', 'false');
    localStorage.setItem('sen2', 'false');
    localStorage.setItem('sen3', 'false');
    localStorage.setItem('sen4', 'false');
    localStorage.setItem('sen5', 'false');
    localStorage.setItem('sen6', 'false');
    localStorage.setItem('sen7', 'false');
    localStorage.setItem('apetyt1', 'false');
    localStorage.setItem('apetyt2', 'false');
    localStorage.setItem('apetyt3', 'false');
    localStorage.setItem('apetyt4', 'false');
    localStorage.setItem('apetyt5', 'false');
    localStorage.setItem('apetyt6', 'false');
    localStorage.setItem('apetyt7', 'false');
    localStorage.setItem('wymiot1', 'false');
    localStorage.setItem('wymiot2', 'false');
    localStorage.setItem('wymiot3', 'false');
    localStorage.setItem('wymiot4', 'false');
    localStorage.setItem('wymiot5', 'false');
    localStorage.setItem('wymiot6', 'false');
    localStorage.setItem('wymiot7', 'false');
    localStorage.setItem('glowa1', 'false');
    localStorage.setItem('glowa2', 'false');
    localStorage.setItem('glowa3', 'false');
    localStorage.setItem('glowa4', 'false');
    localStorage.setItem('glowa5', 'false');
    localStorage.setItem('glowa6', 'false');
    localStorage.setItem('glowa7', 'false');
    localStorage.setItem('samopoczucie1', 'false');
    localStorage.setItem('samopoczucie2', 'false');
    localStorage.setItem('samopoczucie3', 'false');
    localStorage.setItem('samopoczucie4', 'false');
    localStorage.setItem('samopoczucie5', 'false');
    localStorage.setItem('samopoczucie6', 'false');
    localStorage.setItem('samopoczucie7', 'false');
    localStorage.setItem('mysli1', 'false');
    localStorage.setItem('mysli2', 'false');
    localStorage.setItem('mysli3', 'false');
    localStorage.setItem('mysli4', 'false');
    localStorage.setItem('mysli5', 'false');
    localStorage.setItem('mysli6', 'false');
    localStorage.setItem('mysli7', 'false');
    localStorage.setItem('zlosc1', 'false');
    localStorage.setItem('zlosc2', 'false');
    localStorage.setItem('zlosc3', 'false');
    localStorage.setItem('zlosc4', 'false');
    localStorage.setItem('zlosc5', 'false');
    localStorage.setItem('zlosc6', 'false');
    localStorage.setItem('zlosc7', 'false');
    localStorage.setItem('brakpanowania1', 'false');
    localStorage.setItem('brakpanowania2', 'false');
    localStorage.setItem('brakpanowania3', 'false');
    localStorage.setItem('brakpanowania4', 'false');
    localStorage.setItem('brakpanowania5', 'false');
    localStorage.setItem('brakpanowania6', 'false');
    localStorage.setItem('brakpanowania7', 'false');
    localStorage.setItem('placz1', 'false');
    localStorage.setItem('placz2', 'false');
    localStorage.setItem('placz3', 'false');
    localStorage.setItem('placz4', 'false');
    localStorage.setItem('placz5', 'false');
    localStorage.setItem('placz6', 'false');
    localStorage.setItem('placz7', 'false')
    localStorage.setItem('samotnosc1', 'false');
    localStorage.setItem('samotnosc2', 'false');
    localStorage.setItem('samotnosc3', 'false');
    localStorage.setItem('samotnosc4', 'false');
    localStorage.setItem('samotnosc5', 'false');
    localStorage.setItem('samotnosc6', 'false');
    localStorage.setItem('samotnosc7', 'false');
    localStorage.setItem('clearedToday', 'true');
  }
  
  const hasClearedToday = localStorage.getItem('clearedToday');

  if (day === 'Poniedziałek') {
    if (hasClearedToday !== 'true') {
      clearLocalStorageData();
    }
  } else if (day === 'Niedziela') {
    // Reset clearedToday to false at the beginning of a new week
    localStorage.setItem('clearedToday', 'false');
  }

  useEffect(() => {
    if (day === 'Poniedziałek') {
      if (localStorage.getItem('strach1') === 'true') {
        setIsChecked1(true);
      }
      if (localStorage.getItem('sen1') === 'true') {
        setIsChecked2(true);
      }
      if (localStorage.getItem('apetyt1') === 'true') {
        setIsChecked3(true);
      }
      if (localStorage.getItem('wymiot1') === 'true') {
        setIsChecked4(true);
      }
      if (localStorage.getItem('glowa1') === 'true') {
        setIsChecked5(true);
      }
      if (localStorage.getItem('samopoczucie1') === 'true') {
        setIsChecked6(true);
      }
      if (localStorage.getItem('mysli1') === 'true') {
        setIsChecked7(true);
      }
      if (localStorage.getItem('zlosc1') === 'true') {
        setIsChecked8(true);
      }
      if (localStorage.getItem('brakpanowania1') === 'true') {
        setIsChecked9(true);
      }
      if (localStorage.getItem('placz1') === 'true') {
        setIsChecked10(true);
      }
      if (localStorage.getItem('samotnosc1') === 'true') {
        setIsChecked11(true);
      }
    }
    else if (day === 'Wtorek') {
      if (localStorage.getItem('strach2') === 'true') {
        setIsChecked1(true);
      }
      if (localStorage.getItem('sen2') === 'true') {
        setIsChecked2(true);
      }
      if (localStorage.getItem('apetyt2') === 'true') {
        setIsChecked3(true);
      }
      if (localStorage.getItem('wymiot2') === 'true') {
        setIsChecked4(true);
      }
      if (localStorage.getItem('glowa2') === 'true') {
        setIsChecked5(true);
      }
      if (localStorage.getItem('samopoczucie2') === 'true') {
        setIsChecked6(true);
      }
      if (localStorage.getItem('mysli2') === 'true') {
        setIsChecked7(true);
      }
      if (localStorage.getItem('zlosc2') === 'true') {
        setIsChecked8(true);
      }
      if (localStorage.getItem('brakpanowania2') === 'true') {
        setIsChecked9(true);
      }
      if (localStorage.getItem('placz2') === 'true') {
        setIsChecked10(true);
      }
      if (localStorage.getItem('samotnosc2') === 'true') {
        setIsChecked11(true);
      }
    }
    else if (day === 'Środa') {
      if (localStorage.getItem('strach3') === 'true') {
        setIsChecked1(true);
      }
      if (localStorage.getItem('sen3') === 'true') {
        setIsChecked2(true);
      }
      if (localStorage.getItem('apetyt3') === 'true') {
        setIsChecked3(true);
      }
      if (localStorage.getItem('wymiot3') === 'true') {
        setIsChecked4(true);
      }
      if (localStorage.getItem('glowa3') === 'true') {
        setIsChecked5(true);
      }
      if (localStorage.getItem('samopoczucie3') === 'true') {
        setIsChecked6(true);
      }
      if (localStorage.getItem('mysli3') === 'true') {
        setIsChecked7(true);
      }
      if (localStorage.getItem('zlosc3') === 'true') {
        setIsChecked8(true);
      }
      if (localStorage.getItem('brakpanowania3') === 'true') {
        setIsChecked9(true);
      }
      if (localStorage.getItem('placz3') === 'true') {
        setIsChecked10(true);
      }
      if (localStorage.getItem('samotnosc3') === 'true') {
        setIsChecked11(true);
      }
    }    
    else if (day === 'Czwartek') {
      if (localStorage.getItem('strach4') === 'true') {
        setIsChecked1(true);
      }
      if (localStorage.getItem('sen4') === 'true') {
        setIsChecked2(true);
      }
      if (localStorage.getItem('apetyt4') === 'true') {
        setIsChecked3(true);
      }
      if (localStorage.getItem('wymiot4') === 'true') {
        setIsChecked4(true);
      }
      if (localStorage.getItem('glowa4') === 'true') {
        setIsChecked5(true);
      }
      if (localStorage.getItem('samopoczucie4') === 'true') {
        setIsChecked6(true);
      }
      if (localStorage.getItem('mysli4') === 'true') {
        setIsChecked7(true);
      }
      if (localStorage.getItem('zlosc4') === 'true') {
        setIsChecked8(true);
      }
      if (localStorage.getItem('brakpanowania4') === 'true') {
        setIsChecked9(true);
      }
      if (localStorage.getItem('placz4') === 'true') {
        setIsChecked10(true);
      }
      if (localStorage.getItem('samotnosc4') === 'true') {
        setIsChecked11(true);
      }
    }
    else if (day === 'Piątek') {
      if (localStorage.getItem('strach5') === 'true') {
        setIsChecked1(true);
      }
      if (localStorage.getItem('sen5') === 'true') {
        setIsChecked2(true);
      }
      if (localStorage.getItem('apetyt5') === 'true') {
        setIsChecked3(true);
      }
      if (localStorage.getItem('wymiot5') === 'true') {
        setIsChecked4(true);
      }
      if (localStorage.getItem('glowa5') === 'true') {
        setIsChecked5(true);
      }
      if (localStorage.getItem('samopoczucie5') === 'true') {
        setIsChecked6(true);
      }
      if (localStorage.getItem('mysli5') === 'true') {
        setIsChecked7(true);
      }
      if (localStorage.getItem('zlosc5') === 'true') {
        setIsChecked8(true);
      }
      if (localStorage.getItem('brakpanowania5') === 'true') {
        setIsChecked9(true);
      }
      if (localStorage.getItem('placz5') === 'true') {
        setIsChecked10(true);
      }
      if (localStorage.getItem('samotnosc5') === 'true') {
        setIsChecked11(true);
      }
    }
    else if (day === 'Sobota') {
      if (localStorage.getItem('strach6') === 'true') {
        setIsChecked1(true);
      }
      if (localStorage.getItem('sen6') === 'true') {
        setIsChecked2(true);
      }
      if (localStorage.getItem('apetyt6') === 'true') {
        setIsChecked3(true);
      }
      if (localStorage.getItem('wymiot6') === 'true') {
        setIsChecked4(true);
      }
      if (localStorage.getItem('glowa6') === 'true') {
        setIsChecked5(true);
      }
      if (localStorage.getItem('samopoczucie6') === 'true') {
        setIsChecked6(true);
      }
      if (localStorage.getItem('mysli6') === 'true') {
        setIsChecked7(true);
      }
      if (localStorage.getItem('zlosc6') === 'true') {
        setIsChecked8(true);
      }
      if (localStorage.getItem('brakpanowania6') === 'true') {
        setIsChecked9(true);
      }
      if (localStorage.getItem('placz6') === 'true') {
        setIsChecked10(true);
      }
      if (localStorage.getItem('samotnosc6') === 'true') {
        setIsChecked11(true);
      }
    }
    else if (day === 'Niedziela') {
      if (localStorage.getItem('strach7') === 'true') {
        setIsChecked1(true);
      }
      if (localStorage.getItem('sen7') === 'true') {
        setIsChecked2(true);
      }
      if (localStorage.getItem('apetyt7') === 'true') {
        setIsChecked3(true);
      }
      if (localStorage.getItem('wymiot7') === 'true') {
        setIsChecked4(true);
      }
      if (localStorage.getItem('glowa7') === 'true') {
        setIsChecked5(true);
      }
      if (localStorage.getItem('samopoczucie7') === 'true') {
        setIsChecked6(true);
      }
      if (localStorage.getItem('mysli7') === 'true') {
        setIsChecked7(true);
      }
      if (localStorage.getItem('zlosc7') === 'true') {
        setIsChecked8(true);
      }
      if (localStorage.getItem('brakpanowania7') === 'true') {
        setIsChecked9(true);
      }
      if (localStorage.getItem('placz7') === 'true') {
        setIsChecked10(true);
      }
      if (localStorage.getItem('samotnosc7') === 'true') {
        setIsChecked11(true);
      }
    }
  }, []);

  //nie działa
  // useEffect(()=>{
  //   if(day=="Poniedziałek"){
  //     objawyWt();
  //     objawySr();
  //     objawyCzw();
  //     objawyPt();
  //     objawySob();
  //     objawyNd();
  //   }
  // }, []);

  useEffect(() => {
    if(day == "Poniedziałek"){
      if(isChecked1)
        localStorage.setItem('strach1', 'true');
      else
        localStorage.setItem('strach1', 'false');

      if(isChecked2)
        localStorage.setItem('sen1', 'true');
      else
        localStorage.setItem('sen1', 'false');

      if(isChecked3)
        localStorage.setItem('apetyt1', 'true');
      else
        localStorage.setItem('apetyt1', 'false');

      if(isChecked4)
        localStorage.setItem('wymiot1', 'true');
      else
        localStorage.setItem('wymiot1', 'false');

      if(isChecked5)
        localStorage.setItem('glowa1', 'true');
      else
        localStorage.setItem('glowa1', 'false');

      if(isChecked6)
        localStorage.setItem('samopoczucie1', 'true');
      else
        localStorage.setItem('samopoczucie1', 'false');

      if(isChecked7)
        localStorage.setItem('mysli1', 'true');
      else
        localStorage.setItem('mysli1', 'false');

      if(isChecked8)
        localStorage.setItem('zlosc1', 'true');
      else
        localStorage.setItem('zlosc1', 'false');

      if(isChecked9)
        localStorage.setItem('brakpanowania1', 'true');
      else
        localStorage.setItem('brakpanowania1', 'false');

      if(isChecked10)
        localStorage.setItem('placz1', 'true');
      else
        localStorage.setItem('placz1', 'false');

      if(isChecked11)
        localStorage.setItem('samotnosc1', 'true');
      else
        localStorage.setItem('samotnosc1', 'false');
    }
    else if(day == "Wtorek"){
      if(isChecked1)
        localStorage.setItem('strach2', 'true');
      else
        localStorage.setItem('strach2', 'false');

      if(isChecked2)
        localStorage.setItem('sen2', 'true');
      else
        localStorage.setItem('sen2', 'false');

      if(isChecked3)
        localStorage.setItem('apetyt2', 'true');
      else
        localStorage.setItem('apetyt2', 'false');

      if(isChecked4)
        localStorage.setItem('wymiot2', 'true');
      else
        localStorage.setItem('wymiot2', 'false');

      if(isChecked5)
        localStorage.setItem('glowa2', 'true');
      else
        localStorage.setItem('glowa2', 'false');

      if(isChecked6)
        localStorage.setItem('samopoczucie2', 'true');
      else
        localStorage.setItem('samopoczucie2', 'false');

      if(isChecked7)
        localStorage.setItem('mysli2', 'true');
      else
        localStorage.setItem('mysli2', 'false');

      if(isChecked8)
        localStorage.setItem('zlosc2', 'true');
      else
        localStorage.setItem('zlosc2', 'false');

      if(isChecked9)
        localStorage.setItem('brakpanowania2', 'true');
      else
        localStorage.setItem('brakpanowania2', 'false');

      if(isChecked10)
        localStorage.setItem('placz2', 'true');
      else
        localStorage.setItem('placz2', 'false');

      if(isChecked11)
        localStorage.setItem('samotnosc2', 'true');
      else
        localStorage.setItem('samotnosc2', 'false');
    }
    else if(day == "Środa"){
      if(isChecked1)
        localStorage.setItem('strach3', 'true');
      else
        localStorage.setItem('strach3', 'false');

      if(isChecked2)
        localStorage.setItem('sen3', 'true');
      else
        localStorage.setItem('sen3', 'false');

      if(isChecked3)
        localStorage.setItem('apetyt3', 'true');
      else
        localStorage.setItem('apetyt3', 'false');

      if(isChecked4)
        localStorage.setItem('wymiot3', 'true');
      else
        localStorage.setItem('wymiot3', 'false');

      if(isChecked5)
        localStorage.setItem('glowa3', 'true');
      else
        localStorage.setItem('glowa3', 'false');

      if(isChecked6)
        localStorage.setItem('samopoczucie3', 'true');
      else
        localStorage.setItem('samopoczucie3', 'false');

      if(isChecked7)
        localStorage.setItem('mysli3', 'true');
      else
        localStorage.setItem('mysli3', 'false');

      if(isChecked8)
        localStorage.setItem('zlosc3', 'true');
      else
        localStorage.setItem('zlosc3', 'false');

      if(isChecked9)
        localStorage.setItem('brakpanowania3', 'true');
      else
        localStorage.setItem('brakpanowania3', 'false');

      if(isChecked10)
        localStorage.setItem('placz3', 'true');
      else
        localStorage.setItem('placz3', 'false');

      if(isChecked11)
        localStorage.setItem('samotnosc3', 'true');
      else
        localStorage.setItem('samotnosc3', 'false');
    }
    else if(day == "Czwartek"){
      if(isChecked1)
        localStorage.setItem('strach4', 'true');
      else
        localStorage.setItem('strach4', 'false');

      if(isChecked2)
        localStorage.setItem('sen4', 'true');
      else
        localStorage.setItem('sen4', 'false');

      if(isChecked3)
        localStorage.setItem('apetyt4', 'true');
      else
        localStorage.setItem('apetyt4', 'false');

      if(isChecked4)
        localStorage.setItem('wymiot4', 'true');
      else
        localStorage.setItem('wymiot4', 'false');

      if(isChecked5)
        localStorage.setItem('glowa4', 'true');
      else
        localStorage.setItem('glowa4', 'false');

      if(isChecked6)
        localStorage.setItem('samopoczucie4', 'true');
      else
        localStorage.setItem('samopoczucie4', 'false');

      if(isChecked7)
        localStorage.setItem('mysli4', 'true');
      else
        localStorage.setItem('mysli4', 'false');

      if(isChecked8)
        localStorage.setItem('zlosc4', 'true');
      else
        localStorage.setItem('zlosc4', 'false');

      if(isChecked9)
        localStorage.setItem('brakpanowania4', 'true');
      else
        localStorage.setItem('brakpanowania4', 'false');

      if(isChecked10)
        localStorage.setItem('placz4', 'true');
      else
        localStorage.setItem('placz4', 'false');

      if(isChecked11)
        localStorage.setItem('samotnosc4', 'true');
      else
        localStorage.setItem('samotnosc4', 'false');
    }
    else if(day == "Piątek"){
      if(isChecked1)
        localStorage.setItem('strach5', 'true');
      else
        localStorage.setItem('strach5', 'false');

      if(isChecked2)
        localStorage.setItem('sen5', 'true');
      else
        localStorage.setItem('sen5', 'false');

      if(isChecked3)
        localStorage.setItem('apetyt5', 'true');
      else
        localStorage.setItem('apetyt5', 'false');

      if(isChecked4)
        localStorage.setItem('wymiot5', 'true');
      else
        localStorage.setItem('wymiot5', 'false');

      if(isChecked5)
        localStorage.setItem('glowa5', 'true');
      else
        localStorage.setItem('glowa5', 'false');

      if(isChecked6)
        localStorage.setItem('samopoczucie5', 'true');
      else
        localStorage.setItem('samopoczucie5', 'false');

      if(isChecked7)
        localStorage.setItem('mysli5', 'true');
      else
        localStorage.setItem('mysli5', 'false');

      if(isChecked8)
        localStorage.setItem('zlosc5', 'true');
      else
        localStorage.setItem('zlosc5', 'false');

      if(isChecked9)
        localStorage.setItem('brakpanowania5', 'true');
      else
        localStorage.setItem('brakpanowania5', 'false');

      if(isChecked10)
        localStorage.setItem('placz5', 'true');
      else
        localStorage.setItem('placz5', 'false');

      if(isChecked11)
        localStorage.setItem('samotnosc5', 'true');
      else
        localStorage.setItem('samotnosc5', 'false');
    }
    else if(day == "Sobota"){
      if(isChecked1)
        localStorage.setItem('strach6', 'true');
      else
        localStorage.setItem('strach6', 'false');

      if(isChecked2)
        localStorage.setItem('sen6', 'true');
      else
        localStorage.setItem('sen6', 'false');

      if(isChecked3)
        localStorage.setItem('apetyt6', 'true');
      else
        localStorage.setItem('apetyt6', 'false');

      if(isChecked4)
        localStorage.setItem('wymiot6', 'true');
      else
        localStorage.setItem('wymiot6', 'false');

      if(isChecked5)
        localStorage.setItem('glowa6', 'true');
      else
        localStorage.setItem('glowa6', 'false');

      if(isChecked6)
        localStorage.setItem('samopoczucie6', 'true');
      else
        localStorage.setItem('samopoczucie6', 'false');

      if(isChecked7)
        localStorage.setItem('mysli6', 'true');
      else
        localStorage.setItem('mysli6', 'false');

      if(isChecked8)
        localStorage.setItem('zlosc6', 'true');
      else
        localStorage.setItem('zlosc6', 'false');

      if(isChecked9)
        localStorage.setItem('brakpanowania6', 'true');
      else
        localStorage.setItem('brakpanowania6', 'false');

      if(isChecked10)
        localStorage.setItem('placz6', 'true');
      else
        localStorage.setItem('placz6', 'false');

      if(isChecked11)
        localStorage.setItem('samotnosc6', 'true');
      else
        localStorage.setItem('samotnosc6', 'false');
    }
    else if(day == "Niedziela"){
      if(isChecked1)
        localStorage.setItem('strach7', 'true');
      else
        localStorage.setItem('strach7', 'false');

      if(isChecked2)
        localStorage.setItem('sen7', 'true');
      else
        localStorage.setItem('sen7', 'false');

      if(isChecked3)
        localStorage.setItem('apetyt7', 'true');
      else
        localStorage.setItem('apetyt7', 'false');

      if(isChecked4)
        localStorage.setItem('wymiot7', 'true');
      else
        localStorage.setItem('wymiot7', 'false');

      if(isChecked5)
        localStorage.setItem('glowa7', 'true');
      else
        localStorage.setItem('glowa7', 'false');

      if(isChecked6)
        localStorage.setItem('samopoczucie7', 'true');
      else
        localStorage.setItem('samopoczucie7', 'false');

      if(isChecked7)
        localStorage.setItem('mysli7', 'true');
      else
        localStorage.setItem('mysli7', 'false');

      if(isChecked8)
        localStorage.setItem('zlosc7', 'true');
      else
        localStorage.setItem('zlosc7', 'false');

      if(isChecked9)
        localStorage.setItem('brakpanowania7', 'true');
      else
        localStorage.setItem('brakpanowania7', 'false');

      if(isChecked10)
        localStorage.setItem('placz7', 'true');
      else
        localStorage.setItem('placz7', 'false');

      if(isChecked11)
        localStorage.setItem('samotnosc7', 'true');
      else
        localStorage.setItem('samotnosc7', 'false');
    }
  }, [isChecked1, isChecked2, isChecked3, isChecked4, isChecked5, isChecked6, isChecked7, isChecked8, isChecked9, isChecked10, isChecked11])

  //jeden konkretny za pomocą id:
  // const checkbox = document.getElementById('myCheckbox');
  // checkbox.checked = false;

  //wszystkie:
  // const checkboxes = document.querySelectorAll('ion-checkbox');
  // checkboxes.forEach((checkbox) => {
  // checkbox.checked = false;
  // });

  const objawyPon = () =>{
    setDayLabel('Poniedziałek');
    const checkboxes = document.querySelectorAll('ion-checkbox');
    if(day != "Poniedziałek"){
      setIsDisabled1(true);
      setIsDisabled2(true);
      setIsDisabled3(true);
      setIsDisabled4(true);
      setIsDisabled5(true);
      setIsDisabled6(true);
      setIsDisabled7(true);
      setIsDisabled8(true);
      setIsDisabled9(true);
      setIsDisabled10(true);
      setIsDisabled11(true);
    }
    else{
      setIsDisabled1(false);
      setIsDisabled2(false);
      setIsDisabled3(false);
      setIsDisabled4(false);
      setIsDisabled5(false);
      setIsDisabled6(false);
      setIsDisabled7(false);
      setIsDisabled8(false);
      setIsDisabled9(false);
      setIsDisabled10(false);
      setIsDisabled11(false);
    }

    if(localStorage.getItem('strach1') == 'true')
      checkboxes[0].checked = true;
    else
      checkboxes[0].checked = false;

    if(localStorage.getItem('sen1') == 'true')
      checkboxes[1].checked = true;
    else
      checkboxes[1].checked = false;

    if(localStorage.getItem('apetyt1') == 'true')
      checkboxes[2].checked = true;
    else
      checkboxes[2].checked = false;

    if(localStorage.getItem('wymiot1') == 'true')
      checkboxes[3].checked = true;
    else
      checkboxes[3].checked = false;

    if(localStorage.getItem('glowa1') == 'true')
      checkboxes[4].checked = true;
    else
      checkboxes[4].checked = false;

    if(localStorage.getItem('samopoczucie1') == 'true')
      checkboxes[5].checked = true;
    else
      checkboxes[5].checked = false;

    if(localStorage.getItem('mysli1') == 'true')
      checkboxes[6].checked = true;
    else
      checkboxes[6].checked = false;

    if(localStorage.getItem('zlosc1') == 'true')
      checkboxes[7].checked = true;
    else
      checkboxes[7].checked = false;

    if(localStorage.getItem('brakpanowania1') == 'true')
      checkboxes[8].checked = true;
    else
      checkboxes[8].checked = false;

    if(localStorage.getItem('placz1') == 'true')
      checkboxes[9].checked = true;
    else
      checkboxes[9].checked = false;

    if(localStorage.getItem('samotnosc1') == 'true')
      checkboxes[10].checked = true;
    else
      checkboxes[10].checked = false;
    // console.log('--------------------');
    // console.log('Poniedziałek');
    // console.log('Strach: ' + localStorage.getItem('strach1'));
    // console.log('Brak snu: ' + localStorage.getItem('sen1'));
    // console.log('Brak apetytu: ' + localStorage.getItem('apetyt1'));
    // console.log('Chęć wymiotowania: ' + localStorage.getItem('wymiot1'));
    // console.log('Ból głowy: ' + localStorage.getItem('glowa1'));
    // console.log('Złe samopoczucie: ' + localStorage.getItem('samopoczucie1'));
    // console.log('Męczące myśli: ' + localStorage.getItem('mysli1'));
  }

  const objawyWt = () =>{
    setDayLabel('Wtorek');
    const checkboxes = document.querySelectorAll('ion-checkbox');
    
    if(day != "Wtorek"){
      setIsDisabled1(true);
      setIsDisabled2(true);
      setIsDisabled3(true);
      setIsDisabled4(true);
      setIsDisabled5(true);
      setIsDisabled6(true);
      setIsDisabled7(true);
      setIsDisabled8(true);
      setIsDisabled9(true);
      setIsDisabled10(true);
      setIsDisabled11(true);
    }
    else{
      setIsDisabled1(false);
      setIsDisabled2(false);
      setIsDisabled3(false);
      setIsDisabled4(false);
      setIsDisabled5(false);
      setIsDisabled6(false);
      setIsDisabled7(false);
      setIsDisabled8(false);
      setIsDisabled9(false);
      setIsDisabled10(false);
      setIsDisabled11(false);
    }

    if(localStorage.getItem('strach2') == 'true')
      checkboxes[0].checked = true;
    else
      checkboxes[0].checked = false;

    if(localStorage.getItem('sen2') == 'true')
      checkboxes[1].checked = true;
    else
      checkboxes[1].checked = false;

    if(localStorage.getItem('apetyt2') == 'true')
      checkboxes[2].checked = true;
    else
      checkboxes[2].checked = false;

    if(localStorage.getItem('wymiot2') == 'true')
      checkboxes[3].checked = true;
    else
      checkboxes[3].checked = false;

    if(localStorage.getItem('glowa2') == 'true')
      checkboxes[4].checked = true;
    else
      checkboxes[4].checked = false;

    if(localStorage.getItem('samopoczucie2') == 'true')
      checkboxes[5].checked = true;
    else
      checkboxes[5].checked = false;

    if(localStorage.getItem('mysli2') == 'true')
      checkboxes[6].checked = true;
    else
      checkboxes[6].checked = false;

    if(localStorage.getItem('zlosc2') == 'true')
      checkboxes[7].checked = true;
    else
      checkboxes[7].checked = false;

    if(localStorage.getItem('brakpanowania2') == 'true')
      checkboxes[8].checked = true;
    else
      checkboxes[8].checked = false;
  
    if(localStorage.getItem('placz2') == 'true')
      checkboxes[9].checked = true;
    else
      checkboxes[9].checked = false;

    if(localStorage.getItem('samotnosc2') == 'true')
      checkboxes[10].checked = true;
    else
      checkboxes[10].checked = false;
    // console.log('--------------------');
    // console.log('Wtorek');
    // console.log('Strach: ' + localStorage.getItem('strach2'));
    // console.log('Brak snu: ' + localStorage.getItem('sen2'));
    // console.log('Brak apetytu: ' + localStorage.getItem('apetyt2'));
    // console.log('Chęć wymiotowania: ' + localStorage.getItem('wymiot2'));
    // console.log('Ból głowy: ' + localStorage.getItem('glowa2'));
    // console.log('Złe samopoczucie: ' + localStorage.getItem('samopoczucie2'));
    // console.log('Męczące myśli: ' + localStorage.getItem('mysli2'));
  }

  const objawySr = () =>{
    setDayLabel('Środa');
    const checkboxes = document.querySelectorAll('ion-checkbox');
    
    if(day != "Środa"){
      setIsDisabled1(true);
      setIsDisabled2(true);
      setIsDisabled3(true);
      setIsDisabled4(true);
      setIsDisabled5(true);
      setIsDisabled6(true);
      setIsDisabled7(true);
      setIsDisabled8(true);
      setIsDisabled9(true);
      setIsDisabled10(true);
      setIsDisabled11(true);
    }
    else{
      setIsDisabled1(false);
      setIsDisabled2(false);
      setIsDisabled3(false);
      setIsDisabled4(false);
      setIsDisabled5(false);
      setIsDisabled6(false);
      setIsDisabled7(false);
      setIsDisabled8(false);
      setIsDisabled9(false);
      setIsDisabled10(false);
      setIsDisabled11(false);
    }

    if(localStorage.getItem('strach3') == 'true')
      checkboxes[0].checked = true;
    else
      checkboxes[0].checked = false;

    if(localStorage.getItem('sen3') == 'true')
      checkboxes[1].checked = true;
    else
      checkboxes[1].checked = false;

    if(localStorage.getItem('apetyt3') == 'true')
      checkboxes[2].checked = true;
    else
      checkboxes[2].checked = false;

    if(localStorage.getItem('wymiot3') == 'true')
      checkboxes[3].checked = true;
    else
      checkboxes[3].checked = false;

    if(localStorage.getItem('glowa3') == 'true')
      checkboxes[4].checked = true;
    else
      checkboxes[4].checked = false;

    if(localStorage.getItem('samopoczucie3') == 'true')
      checkboxes[5].checked = true;
    else
      checkboxes[5].checked = false;

    if(localStorage.getItem('mysli3') == 'true')
      checkboxes[6].checked = true;
    else
      checkboxes[6].checked = false;

    if(localStorage.getItem('zlosc3') == 'true')
      checkboxes[7].checked = true;
    else
      checkboxes[7].checked = false;

    if(localStorage.getItem('brakpanowania3') == 'true')
      checkboxes[8].checked = true;
    else
      checkboxes[8].checked = false;

    if(localStorage.getItem('placz3') == 'true')
      checkboxes[9].checked = true;
    else
      checkboxes[9].checked = false;

    if(localStorage.getItem('samotnosc3') == 'true')
      checkboxes[10].checked = true;
    else
      checkboxes[10].checked = false;
    // console.log('--------------------');
    // console.log('Wtorek');
    // console.log('Strach: ' + localStorage.getItem('strach2'));
    // console.log('Brak snu: ' + localStorage.getItem('sen2'));
    // console.log('Brak apetytu: ' + localStorage.getItem('apetyt2'));
    // console.log('Chęć wymiotowania: ' + localStorage.getItem('wymiot2'));
    // console.log('Ból głowy: ' + localStorage.getItem('glowa2'));
    // console.log('Złe samopoczucie: ' + localStorage.getItem('samopoczucie2'));
    // console.log('Męczące myśli: ' + localStorage.getItem('mysli2'));
  }

  const objawyCzw = () =>{
    setDayLabel('Czwartek');
    const checkboxes = document.querySelectorAll('ion-checkbox');
    
    if(day != "Czwartek"){
      setIsDisabled1(true);
      setIsDisabled2(true);
      setIsDisabled3(true);
      setIsDisabled4(true);
      setIsDisabled5(true);
      setIsDisabled6(true);
      setIsDisabled7(true);
      setIsDisabled8(true);
      setIsDisabled9(true);
      setIsDisabled10(true);
      setIsDisabled11(true);
    }
    else{
      setIsDisabled1(false);
      setIsDisabled2(false);
      setIsDisabled3(false);
      setIsDisabled4(false);
      setIsDisabled5(false);
      setIsDisabled6(false);
      setIsDisabled7(false);
      setIsDisabled8(false);
      setIsDisabled9(false);
      setIsDisabled10(false);
      setIsDisabled11(false);
    }

    if(localStorage.getItem('strach4') == 'true')
      checkboxes[0].checked = true;
    else
      checkboxes[0].checked = false;

    if(localStorage.getItem('sen4') == 'true')
      checkboxes[1].checked = true;
    else
      checkboxes[1].checked = false;

    if(localStorage.getItem('apetyt4') == 'true')
      checkboxes[2].checked = true;
    else
      checkboxes[2].checked = false;

    if(localStorage.getItem('wymiot4') == 'true')
      checkboxes[3].checked = true;
    else
      checkboxes[3].checked = false;

    if(localStorage.getItem('glowa4') == 'true')
      checkboxes[4].checked = true;
    else
      checkboxes[4].checked = false;

    if(localStorage.getItem('samopoczucie4') == 'true')
      checkboxes[5].checked = true;
    else
      checkboxes[5].checked = false;

    if(localStorage.getItem('mysli4') == 'true')
      checkboxes[6].checked = true;
    else
      checkboxes[6].checked = false;

    if(localStorage.getItem('zlosc4') == 'true')
      checkboxes[7].checked = true;
    else
      checkboxes[7].checked = false;

    if(localStorage.getItem('brakpanowania4') == 'true')
      checkboxes[8].checked = true;
    else
      checkboxes[8].checked = false;

    if(localStorage.getItem('placz4') == 'true')
      checkboxes[9].checked = true;
    else
      checkboxes[9].checked = false;

    if(localStorage.getItem('samotnosc4') == 'true')
      checkboxes[10].checked = true;
    else
      checkboxes[10].checked = false;
    // console.log('--------------------');
    // console.log('Wtorek');
    // console.log('Strach: ' + localStorage.getItem('strach2'));
    // console.log('Brak snu: ' + localStorage.getItem('sen2'));
    // console.log('Brak apetytu: ' + localStorage.getItem('apetyt2'));
    // console.log('Chęć wymiotowania: ' + localStorage.getItem('wymiot2'));
    // console.log('Ból głowy: ' + localStorage.getItem('glowa2'));
    // console.log('Złe samopoczucie: ' + localStorage.getItem('samopoczucie2'));
    // console.log('Męczące myśli: ' + localStorage.getItem('mysli2'));
  }

  const objawyPt = () =>{
    setDayLabel('Piątek');
    const checkboxes = document.querySelectorAll('ion-checkbox');
    
    if(day != "Piątek"){
      setIsDisabled1(true);
      setIsDisabled2(true);
      setIsDisabled3(true);
      setIsDisabled4(true);
      setIsDisabled5(true);
      setIsDisabled6(true);
      setIsDisabled7(true);
      setIsDisabled8(true);
      setIsDisabled9(true);
      setIsDisabled10(true);
      setIsDisabled11(true);
    }
    else{
      setIsDisabled1(false);
      setIsDisabled2(false);
      setIsDisabled3(false);
      setIsDisabled4(false);
      setIsDisabled5(false);
      setIsDisabled6(false);
      setIsDisabled7(false);
      setIsDisabled8(false);
      setIsDisabled9(false);
      setIsDisabled10(false);
      setIsDisabled11(false);
    }

    if(localStorage.getItem('strach5') == 'true')
      checkboxes[0].checked = true;
    else
      checkboxes[0].checked = false;

    if(localStorage.getItem('sen5') == 'true')
      checkboxes[1].checked = true;
    else
      checkboxes[1].checked = false;

    if(localStorage.getItem('apetyt5') == 'true')
      checkboxes[2].checked = true;
    else
      checkboxes[2].checked = false;

    if(localStorage.getItem('wymiot5') == 'true')
      checkboxes[3].checked = true;
    else
      checkboxes[3].checked = false;

    if(localStorage.getItem('glowa5') == 'true')
      checkboxes[4].checked = true;
    else
      checkboxes[4].checked = false;

    if(localStorage.getItem('samopoczucie5') == 'true')
      checkboxes[5].checked = true;
    else
      checkboxes[5].checked = false;

    if(localStorage.getItem('mysli5') == 'true')
      checkboxes[6].checked = true;
    else
      checkboxes[6].checked = false;

    if(localStorage.getItem('zlosc5') == 'true')
      checkboxes[7].checked = true;
    else
      checkboxes[7].checked = false;

    if(localStorage.getItem('brakpanowania5') == 'true')
      checkboxes[8].checked = true;
    else
      checkboxes[8].checked = false;

    if(localStorage.getItem('placz5') == 'true')
      checkboxes[9].checked = true;
    else
      checkboxes[9].checked = false;

    if(localStorage.getItem('samotnosc5') == 'true')
      checkboxes[10].checked = true;
    else
      checkboxes[10].checked = false;
    // console.log('--------------------');
    // console.log('Wtorek');
    // console.log('Strach: ' + localStorage.getItem('strach2'));
    // console.log('Brak snu: ' + localStorage.getItem('sen2'));
    // console.log('Brak apetytu: ' + localStorage.getItem('apetyt2'));
    // console.log('Chęć wymiotowania: ' + localStorage.getItem('wymiot2'));
    // console.log('Ból głowy: ' + localStorage.getItem('glowa2'));
    // console.log('Złe samopoczucie: ' + localStorage.getItem('samopoczucie2'));
    // console.log('Męczące myśli: ' + localStorage.getItem('mysli2'));
  }

  const objawySob = () =>{
    setDayLabel('Sobota');
    const checkboxes = document.querySelectorAll('ion-checkbox');
    
    if(day != "Sobota"){
      setIsDisabled1(true);
      setIsDisabled2(true);
      setIsDisabled3(true);
      setIsDisabled4(true);
      setIsDisabled5(true);
      setIsDisabled6(true);
      setIsDisabled7(true);
      setIsDisabled8(true);
      setIsDisabled9(true);
      setIsDisabled10(true);
      setIsDisabled11(true);
    }
    else{
      setIsDisabled1(false);
      setIsDisabled2(false);
      setIsDisabled3(false);
      setIsDisabled4(false);
      setIsDisabled5(false);
      setIsDisabled6(false);
      setIsDisabled7(false);
      setIsDisabled8(false);
      setIsDisabled9(false);
      setIsDisabled10(false);
      setIsDisabled11(false);
    }

    if(localStorage.getItem('strach6') == 'true')
      checkboxes[0].checked = true;
    else
      checkboxes[0].checked = false;

    if(localStorage.getItem('sen6') == 'true')
      checkboxes[1].checked = true;
    else
      checkboxes[1].checked = false;

    if(localStorage.getItem('apetyt6') == 'true')
      checkboxes[2].checked = true;
    else
      checkboxes[2].checked = false;

    if(localStorage.getItem('wymiot6') == 'true')
      checkboxes[3].checked = true;
    else
      checkboxes[3].checked = false;

    if(localStorage.getItem('glowa6') == 'true')
      checkboxes[4].checked = true;
    else
      checkboxes[4].checked = false;

    if(localStorage.getItem('samopoczucie6') == 'true')
      checkboxes[5].checked = true;
    else
      checkboxes[5].checked = false;

    if(localStorage.getItem('mysli6') == 'true')
      checkboxes[6].checked = true;
    else
      checkboxes[6].checked = false;

    if(localStorage.getItem('zlosc6') == 'true')
      checkboxes[7].checked = true;
    else
      checkboxes[7].checked = false;

    if(localStorage.getItem('brakpanowania6') == 'true')
      checkboxes[8].checked = true;
    else
      checkboxes[8].checked = false;

    if(localStorage.getItem('placz6') == 'true')
      checkboxes[9].checked = true;
    else
      checkboxes[9].checked = false;

    if(localStorage.getItem('samotnosc6') == 'true')
      checkboxes[10].checked = true;
    else
      checkboxes[10].checked = false;
    // console.log('--------------------');
    // console.log('Wtorek');
    // console.log('Strach: ' + localStorage.getItem('strach2'));
    // console.log('Brak snu: ' + localStorage.getItem('sen2'));
    // console.log('Brak apetytu: ' + localStorage.getItem('apetyt2'));
    // console.log('Chęć wymiotowania: ' + localStorage.getItem('wymiot2'));
    // console.log('Ból głowy: ' + localStorage.getItem('glowa2'));
    // console.log('Złe samopoczucie: ' + localStorage.getItem('samopoczucie2'));
    // console.log('Męczące myśli: ' + localStorage.getItem('mysli2'));
  }

  const objawyNd = () =>{
    setDayLabel('Niedziela');
    const checkboxes = document.querySelectorAll('ion-checkbox');
    
    if(day != "Niedziela"){
      setIsDisabled1(true);
      setIsDisabled2(true);
      setIsDisabled3(true);
      setIsDisabled4(true);
      setIsDisabled5(true);
      setIsDisabled6(true);
      setIsDisabled7(true);
      setIsDisabled8(true);
      setIsDisabled9(true);
      setIsDisabled10(true);
      setIsDisabled11(true);
    }
    else{
      setIsDisabled1(false);
      setIsDisabled2(false);
      setIsDisabled3(false);
      setIsDisabled4(false);
      setIsDisabled5(false);
      setIsDisabled6(false);
      setIsDisabled7(false);
      setIsDisabled8(false);
      setIsDisabled9(false);
      setIsDisabled10(false);
      setIsDisabled11(false);
    }

    if(localStorage.getItem('strach7') == 'true')
      checkboxes[0].checked = true;
    else
      checkboxes[0].checked = false;

    if(localStorage.getItem('sen7') == 'true')
      checkboxes[1].checked = true;
    else
      checkboxes[1].checked = false;

    if(localStorage.getItem('apetyt7') == 'true')
      checkboxes[2].checked = true;
    else
      checkboxes[2].checked = false;

    if(localStorage.getItem('wymiot7') == 'true')
      checkboxes[3].checked = true;
    else
      checkboxes[3].checked = false;

    if(localStorage.getItem('glowa7') == 'true')
      checkboxes[4].checked = true;
    else
      checkboxes[4].checked = false;

    if(localStorage.getItem('samopoczucie7') == 'true')
      checkboxes[5].checked = true;
    else
      checkboxes[5].checked = false;

    if(localStorage.getItem('mysli7') == 'true')
      checkboxes[6].checked = true;
    else
      checkboxes[6].checked = false;

    if(localStorage.getItem('zlosc7') == 'true')
      checkboxes[7].checked = true;
    else
      checkboxes[7].checked = false;

    if(localStorage.getItem('brakpanowania7') == 'true')
      checkboxes[8].checked = true;
    else
      checkboxes[8].checked = false;

    if(localStorage.getItem('placz7') == 'true')
      checkboxes[9].checked = true;
    else
      checkboxes[9].checked = false;

    if(localStorage.getItem('samotnosc7') == 'true')
      checkboxes[10].checked = true;
    else
      checkboxes[10].checked = false;
    // console.log('--------------------');
    // console.log('Wtorek');
    // console.log('Strach: ' + localStorage.getItem('strach2'));
    // console.log('Brak snu: ' + localStorage.getItem('sen2'));
    // console.log('Brak apetytu: ' + localStorage.getItem('apetyt2'));
    // console.log('Chęć wymiotowania: ' + localStorage.getItem('wymiot2'));
    // console.log('Ból głowy: ' + localStorage.getItem('glowa2'));
    // console.log('Złe samopoczucie: ' + localStorage.getItem('samopoczucie2'));
    // console.log('Męczące myśli: ' + localStorage.getItem('mysli2'));
  }

  useEffect(()=>{
    if(DayLabel == 'Poniedziałek')
      objawyPon();
    else if(DayLabel == 'Wtorek')
      objawyWt();
    else if(DayLabel == 'Środa')
      objawySr();
    else if(DayLabel == 'Czwartek')
      objawyCzw();
    else if(DayLabel == 'Piątek')
      objawyPt();
    else if(DayLabel == 'Sobota')
      objawySob();
    else if(DayLabel == 'Niedziela')
      objawyNd();
  });

  return (
    <IonPage>
      <IonContent fullscreen>
        <div style={{marginTop: '6px'}}></div>
        <IonGrid>
          <div className='ion-text-center'>
            <IonLabel style={{ color: '#333333', fontWeight: 'bold', fontSize: '26px' }} className="ion-text-wrap">Dzień: {DayLabel}</IonLabel>
          </div>
          <IonRow style={{ display: 'flex', justifyContent: 'center' }}>
            <IonButton style={{ width: '150px', height: '45px', fontWeight: 'bold' }} onClick={objawyPon}>Poniedziałek</IonButton>
            <IonButton style={{ width: '150px', height: '45px', fontWeight: 'bold' }} onClick={objawyWt}>Wtorek</IonButton>
            <IonButton style={{ width: '150px', height: '45px', fontWeight: 'bold' }} onClick={objawySr}>Środa</IonButton>
            <IonButton style={{ width: '150px', height: '45px', fontWeight: 'bold' }} onClick={objawyCzw}>Czwartek</IonButton>
            <IonButton style={{ width: '150px', height: '45px', fontWeight: 'bold' }} onClick={objawyPt}>Piątek</IonButton>
            <IonButton style={{ width: '150px', height: '45px', fontWeight: 'bold' }} onClick={objawySob}>Sobota</IonButton>
            <IonButton style={{ width: '150px', height: '45px', fontWeight: 'bold' }} onClick={objawyNd}>Niedziela</IonButton>
          </IonRow>
        </IonGrid>
        <div className='ion-text-center'>
          <IonLabel style={{ color: '#333333', fontWeight: 'bold', fontSize: '26px' }} className="ion-text-wrap">Co ci się dzieje?</IonLabel>
        </div>
        <IonList>
          <IonItem>
            <IonCheckbox disabled = {isDisabled1} checked={isChecked1} onIonChange={handleCheckboxChange1}>Strach</IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox disabled = {isDisabled2} checked={isChecked2} onIonChange={handleCheckboxChange2}>Brak snu</IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox disabled = {isDisabled3} checked={isChecked3} onIonChange={handleCheckboxChange3}>Brak apetytu</IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox disabled = {isDisabled4} checked={isChecked4}  onIonChange={handleCheckboxChange4}>Chęć wymiotowania</IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox disabled = {isDisabled5} checked={isChecked5}  onIonChange={handleCheckboxChange5}>Ból głowy</IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox disabled = {isDisabled6} checked={isChecked6}  onIonChange={handleCheckboxChange6}>Złe samopoczucie</IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox disabled = {isDisabled7} checked={isChecked7}  onIonChange={handleCheckboxChange7}>Męczące myśli</IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox disabled = {isDisabled8} checked={isChecked8}  onIonChange={handleCheckboxChange8}>Złość</IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox disabled = {isDisabled9} checked={isChecked9}  onIonChange={handleCheckboxChange9}>Brak panowania nad emocjami</IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox disabled = {isDisabled10} checked={isChecked10}  onIonChange={handleCheckboxChange10}>Płacz</IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox disabled = {isDisabled11} checked={isChecked11}  onIonChange={handleCheckboxChange11}>Samotność</IonCheckbox>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
