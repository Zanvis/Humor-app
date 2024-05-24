import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import React, { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { 
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement, Tooltip, Legend
} from 'chart.js';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)
import { getData } from './actions';

ChartJS.register(ArcElement, Tooltip, Legend);

const Tab2: React.FC = () => {
  const dataValue = useSelector((state: any) => state.data);
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [value7, setValue7] = useState(0);

  const [sad1, setsad1] = useState(0);
  const [sad2, setsad2] = useState(0);
  const [sad3, setsad3] = useState(0);
  const [sad4, setsad4] = useState(0);
  const [sad5, setsad5] = useState(0);
  const [sad6, setsad6] = useState(0);
  const [sad7, setsad7] = useState(0);

  const [pok1, setpok1] = useState(0);
  const [pok2, setpok2] = useState(0);
  const [pok3, setpok3] = useState(0);
  const [pok4, setpok4] = useState(0);
  const [pok5, setpok5] = useState(0);
  const [pok6, setpok6] = useState(0);
  const [pok7, setpok7] = useState(0);

  const [hap1, sethap1] = useState(0);
  const [hap2, sethap2] = useState(0);
  const [hap3, sethap3] = useState(0);
  const [hap4, sethap4] = useState(0);
  const [hap5, sethap5] = useState(0);
  const [hap6, sethap6] = useState(0);
  const [hap7, sethap7] = useState(0);

  const [notb1, setnotb1] = useState(0);
  const [notb2, setnotb2] = useState(0);
  const [notb3, setnotb3] = useState(0);
  const [notb4, setnotb4] = useState(0);
  const [notb5, setnotb5] = useState(0);
  const [notb6, setnotb6] = useState(0);
  const [notb7, setnotb7] = useState(0);

  const [notg1, setnotg1] = useState(0);
  const [notg2, setnotg2] = useState(0);
  const [notg3, setnotg3] = useState(0);
  const [notg4, setnotg4] = useState(0);
  const [notg5, setnotg5] = useState(0);
  const [notg6, setnotg6] = useState(0);
  const [notg7, setnotg7] = useState(0);

  const [sadCount, setsadCount] = useState(0);
  const [pokCount, setpokCount] = useState(0);
  const [hapCount, sethapCount] = useState(0);
  const [notbCount, setnotbCount] = useState(0);
  const [notgCount, setnotgCount] = useState(0);

  const [enableAnimation, setEnableAnimation] = useState(false);

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
  // console.log(day);

  const clearLocalStorageData = () => {
    // localStorage.removeItem('pon');
    localStorage.removeItem('wt');
    localStorage.removeItem('sr');
    localStorage.removeItem('czw');
    localStorage.removeItem('pt');
    localStorage.removeItem('sob');
    localStorage.removeItem('nd');
  };

  if(day == "Poniedziałek"){
    useEffect(() => {
      clearLocalStorageData();
    }, []);
  }

  const pon = localStorage.getItem('pon');
  const wt = localStorage.getItem('wt');
  const sr = localStorage.getItem('sr');
  const czw = localStorage.getItem('czw');
  const pt = localStorage.getItem('pt');
  const sob = localStorage.getItem('sob');
  const nd = localStorage.getItem('nd');

  useEffect(() => {
    // console.log(dataValue);
    if(day == "Poniedziałek"){
      setValue2(0);
      setValue3(0);
      setValue4(0);
      setValue5(0);
      setValue6(0);
      setValue7(0);
      setsad1(0);
      setpok1(0);
      sethap1(0);
      setsad2(0);
      setpok2(0);
      sethap2(0);
      setsad3(0);
      setpok3(0);
      sethap3(0);
      setsad4(0);
      setpok4(0);
      sethap4(0);
      setsad5(0);
      setpok5(0);
      sethap5(0);
      setsad6(0);
      setpok6(0);
      sethap6(0);
      setsad7(0);
      setpok7(0);
      sethap7(0);
      setnotb1(0);
      setnotb2(0);
      setnotb3(0);
      setnotb4(0);
      setnotb5(0);
      setnotb6(0);
      setnotb7(0);
      setnotg1(0);
      setnotg2(0);
      setnotg3(0);
      setnotg4(0);
      setnotg5(0);
      setnotg6(0);
      setnotg7(0);
    }
    if (pon == 'sad'){
      setValue(0);
      setsad1(1);
      setpok1(0);
      sethap1(0);
      setnotb1(0);
      setnotg1(0);
    }
    else if(pon == 'poker'){
      // console.log('poker')
      setValue(5);
      setsad1(0);
      setpok1(1);
      sethap1(0);
      setnotb1(0);
      setnotg1(0);
    }
    else if(pon == 'happy'){
      // console.log('poker')
      setValue(10);
      setsad1(0);
      setpok1(0);
      sethap1(1);
      setnotb1(0);
      setnotg1(0);
    }
    else if(pon == 'notbad'){
      setValue(7.5);
      setsad1(0);
      setpok1(0);
      sethap1(0);
      setnotb1(1);
      setnotg1(0);
    }
    else if(pon == 'notgood'){
      setValue(2.5);
      setsad1(0);
      setpok1(0);
      sethap1(0);
      setnotb1(0);
      setnotg1(1);
    }
    else {
      setValue(0);
      setsad1(0);
      setpok1(0);
      sethap1(0);
      setnotb1(0);
      setnotg1(0);
    }
    if (wt == 'sad'){
      setValue2(0);
      setsad2(1);
      setpok2(0);
      sethap2(0);
      setnotb2(0);
      setnotg2(0);
    }
    else if(wt == 'poker'){
      // console.log('poker')
      setValue2(5);
      setsad2(0);
      setpok2(1);
      sethap2(0);
      setnotb2(0);
      setnotg2(0);
    }
    else if(wt == 'happy'){
      // console.log('poker')
      setValue2(10);
      setsad2(0);
      setpok2(0);
      sethap2(1);
      setnotb2(0);
      setnotg2(0);
    }
    else if(wt == 'notbad'){
      setValue2(7.5);
      setsad2(0);
      setpok2(0);
      sethap2(0);
      setnotb2(1);
      setnotg2(0);
    }
    else if(wt == 'notgood'){
      setValue2(2.5);
      setsad2(0);
      setpok2(0);
      sethap2(0);
      setnotb2(0);
      setnotg2(1);
    }
    else {
      setValue2(0);
      setsad2(0);
      setpok2(0);
      sethap2(0);
      setnotb2(0);
      setnotg2(0);
    }
    if (sr == 'sad'){
      setValue3(0);
      setsad3(1);
      setpok3(0);
      sethap3(0);
      setnotb3(0);
      setnotg3(0);
    }
    else if(sr == 'poker'){
      // console.log('poker')
      setValue3(5);
      setsad3(0);
      setpok3(1);
      sethap3(0);
      setnotb3(0);
      setnotg3(0);
    }
    else if(sr == 'happy'){
      // console.log('poker')
      setValue3(10);
      setsad3(0);
      setpok3(0);
      sethap3(1);
      setnotb3(0);
      setnotg3(0);
    }
    else if(sr == 'notbad'){
      setValue3(7.5);
      setsad3(0);
      setpok3(0);
      sethap3(0);
      setnotb3(1);
      setnotg3(0);
    }
    else if(sr == 'notgood'){
      setValue3(2.5);
      setsad3(0);
      setpok3(0);
      sethap3(0);
      setnotb3(0);
      setnotg3(1);
    }
    else {
      setValue3(0);
      setsad3(0);
      setpok3(0);
      sethap3(0);
      setnotb3(0);
      setnotg3(0);
    }
    if (czw == 'sad'){
      setValue4(0);
      setsad4(1);
      setpok4(0);
      sethap4(0);
      setnotb4(0);
      setnotg4(0);
    }
    else if(czw == 'poker'){
      // console.log('poker')
      setValue4(5);
      setsad4(0);
      setpok4(1);
      sethap4(0);
      setnotb4(0);
      setnotg4(0);
    }
    else if(czw == 'happy'){
      // console.log('poker')
      setValue4(10);
      setsad4(0);
      setpok4(0);
      sethap4(1);
      setnotb4(0);
      setnotg4(0);
    }
    else if(czw == 'notbad'){
      setValue4(7.5);
      setsad4(0);
      setpok4(0);
      sethap4(0);
      setnotb4(1);
      setnotg4(0);
    }
    else if(czw == 'notgood'){
      setValue4(2.5);
      setsad4(0);
      setpok4(0);
      sethap4(0);
      setnotb4(0);
      setnotg4(1);
    }
    else {
      setValue4(0);
      setsad4(0);
      setpok4(0);
      sethap4(0);
      setnotb4(0);
      setnotg4(0);
    }
    if (pt == 'sad'){
      setValue5(0);
      setsad5(1);
      setpok5(0);
      sethap5(0);
      setnotb5(0);
      setnotg5(0);
    }
    else if(pt == 'poker'){
      // console.log('poker')
      setValue5(5);
      setsad5(0);
      setpok5(1);
      sethap5(0);
      setnotb5(0);
      setnotg5(0);
    }
    else if(pt == 'happy'){
      // console.log('poker')
      setValue5(10);
      setsad5(0);
      setpok5(0);
      sethap5(1);
      setnotb5(0);
      setnotg5(0);
    }
    else if(pt == 'notbad'){
      setValue5(7.5);
      setsad5(0);
      setpok5(0);
      sethap5(0);
      setnotb5(1);
      setnotg5(0);
    }
    else if(pt == 'notgood'){
      setValue5(2.5);
      setsad5(0);
      setpok5(0);
      sethap5(0);
      setnotb5(0);
      setnotg5(1);
    }
    else {
      setValue5(0);
      setsad5(0);
      setpok5(0);
      sethap5(0);
      setnotb5(0);
      setnotg5(0);
    }
    if (sob == 'sad'){
      setValue6(0);
      setsad6(1);
      setpok6(0);
      sethap6(0);
      setnotb6(0);
      setnotg6(0);
    }
    else if(sob == 'poker'){
      // console.log('poker')
      setValue6(5);
      setsad6(0);
      setpok6(1);
      sethap6(0);
      setnotb6(0);
      setnotg6(0);
    }
    else if(sob == 'happy'){
      // console.log('poker')
      setValue6(10);
      setsad6(0);
      setpok6(0);
      sethap6(1);
      setnotb6(0);
      setnotg6(0);
    }
    else if(sob == 'notbad'){
      setValue6(7.5);
      setsad6(0);
      setpok6(0);
      sethap6(0);
      setnotb6(1);
      setnotg6(0);
    }
    else if(sob == 'notgood'){
      setValue6(2.5);
      setsad6(0);
      setpok6(0);
      sethap6(0);
      setnotb6(0);
      setnotg6(1);
    }
    else {
      setValue6(0);
      setsad6(0);
      setpok6(0);
      sethap6(0);
      setnotb6(0);
      setnotg6(0);
    }
    if (nd == 'sad'){
      setValue7(0);
      setsad7(1);
      setpok7(0);
      sethap7(0);
      setnotb7(0);
      setnotg7(0);
    }
    else if(nd == 'poker'){
      // console.log('poker')
      setValue7(5);
      setsad7(0);
      setpok7(1);
      sethap7(0);
      setnotb7(0);
      setnotg7(0);
    }
    else if(nd == 'happy'){
      // console.log('poker')
      setValue7(10);
      setsad7(0);
      setpok7(0);
      sethap7(1);
      setnotb7(0);
      setnotg7(0);
    }
    else if(nd == 'notbad'){
      setValue7(7.5);
      setsad7(0);
      setpok7(0);
      sethap7(0);
      setnotb7(1);
      setnotg7(0);
    }
    else if(nd == 'notgood'){
      setValue7(2.5);
      setsad7(0);
      setpok7(0);
      sethap7(0);
      setnotb7(0);
      setnotg7(1);
    }
    else {
      setValue7(0);
      setsad7(0);
      setpok7(0);
      sethap7(0);
      setnotb7(0);
      setnotg7(0);
    }
  }, [dataValue]);

  useEffect(()=>{
    setsadCount(sad1 + sad2 + sad3 + sad4 + sad5 + sad6 + sad7);
    setpokCount(pok1 + pok2 + pok3 + pok4 + pok5 + pok6 + pok7);
    sethapCount(hap1 + hap2 + hap3 + hap4 + hap5 + hap6 + hap7);
    setnotbCount(notb1 + notb2 + notb3 + notb4 + notb5 + notb6 + notb7);
    setnotgCount(notg1 + notg2 + notg3 + notg4 + notg5 + notg6 + notg7);
  });
  
  // const sadCount = sad1 + sad2 + sad3 + sad4 + sad5 + sad6 + sad7;
  // const pokCount = pok1 + pok2 + pok3 + pok4 + pok5 + pok6 + pok7;
  // const hapCount = hap1 + hap2 + hap3 + hap4 + hap5 + hap6 + hap7;

  useEffect(()=>{
    setTimeout(() => {
      setEnableAnimation(true);
    }, 2000); // Delay of 2 seconds
  });

  const data = {
    labels: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd'],
    datasets: [
      {
        data: [value, value2, value3, value4, value5, value6, value7],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
        tension: 0.3,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
        ticks: { color: '#202020'}
      },
      x: {
        ticks: { color: '#202020'}
      }
    },
  }
  
  const data2 = {
    labels: ['zły', 'raczej zły', 'średni', 'raczej dobry', 'dobry'],
    datasets: [
      {
        data: [sadCount, notgCount, pokCount, notbCount, hapCount],
        // backgroundColor: ['rgb(242, 31, 31)', 'rgb(245, 175, 84)', 'rgb(37, 129, 249)', 'rgb(92, 225, 65)', 'rgb(250, 250, 40)'],
        backgroundColor: ['#E70000', '#EE6E00', '#FBE900', '#56F000', '#2779FF'],
        // borderColor: ['rgb(242, 31, 31)', 'rgb(245, 175, 84)', 'rgb(37, 129, 249)', 'rgb(92, 225, 65)', 'rgb(250, 250, 40)'],
        borderColor: ['#E70000', '#EE6E00', '#FBE900', '#56F000', '#2779FF'],
        borderWidth: 1,
      },
    ],
  };
  
  const options2 = {
    plugins: {
      legend: {
        labels: {
          color: '#202020'
        }
      },
    },
    animation: enableAnimation
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* <div className='ion-padding'></div>
        <div className='ion-padding'></div>
        <div className='ion-padding'></div>
        <div className='ion-padding'></div>
        <div className='ion-padding'></div>
        <div className='ion-padding'></div>
        <div className='ion-padding'></div> */}
        <div className='ion-padding'></div>
        <div className='ion-padding'></div>
        <div className='ion-text-center'>
          <IonLabel style={{ color: '#333333', fontWeight: 'bold', fontSize: '36px'}} className="ion-text-wrap">Wykres humoru</IonLabel>
        </div>
        {/* <div className='ion-padding'></div> */}
          <Line style={{ height: '25.5vh' }} data={data} options={options} />
          <div className='ion-padding'></div>
          <div style={{ height: '42vh', position: 'relative' }}>
            <Pie style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} data={data2} options={options2} />;
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
