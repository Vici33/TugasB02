import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonFooter, IonCard, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { logInOutline, personCircleOutline, thermometerOutline } from 'ionicons/icons'
import { cloudy } from 'ionicons/icons';

const API_KEY = '74452728b9c8dcfe98b46c319ec0a8a6';

const Login: React.FC = () => {
    const doLogin = (event: any) => {
        event.preventDefault();
        console.log('doLogin');
    };

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        async function fetchWeatherData() {
            try {
                const response = await fetch(
                    'https://api.openweathermap.org/data/2.5/weather?q=manado,id&units=metric&appid=74452728b9c8dcfe98b46c319ec0a8a6'
                );

                if (response.ok) {
                    console.log('ok');
                    console.log('api working');
                    const data = await response.json();
                    setWeather(data);
                } else {
                    console.error('Failed to fetch weather data');
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }

        fetchWeatherData();
    }, []);

    return (
        <IonPage>

            <IonHeader color='primary'>
        
                <IonToolbar color={'tertiary'}>
                    <IonTitle>Weather App</IonTitle>
                </IonToolbar>
        
            </IonHeader>
        
            <IonContent className="ion-padding" scrollY={false}>
                <div className='ion-text-center ion-padding'>
                    <img src={cloudy} alt='instagram logo' width={'50%'}/>
                </div>
                <IonCard>
                    <IonCardContent>
                    {weather ? (
                        <div>
                            <h1>Weather in Manado</h1>
                            <p>Temperature<IonIcon icon={thermometerOutline} slot='end'></IonIcon>: {weather.main.temp}°C</p>
                            <p>Humidity: {weather.main.humidity}%</p>
                            <p>Temperature Feels Like: {weather.main.feels_like}°C</p>
                        </div>
                    ) : (
                    <p>Loading weather data...</p>
                    )}


                        {/* <form onSubmit={doLogin}>
                            <IonInput label='Email' type='email' placeholder='test@gmail.com' labelPlacement='floating' fill='outline'></IonInput>
                            <IonInput className='ion-margin-top' label='Password' type='password' placeholder='password' labelPlacement='floating' fill='outline'></IonInput>
                            <IonButton type='submit' expand='full' className='ion-margin-top'>
                                Login
                                <IonIcon icon={logInOutline} slot='end'></IonIcon>
                            </IonButton>
                            <IonButton routerLink='/register' color={'secondary'} type='button' expand='full' className='ion-margin-top'>
                                Create account
                                <IonIcon icon={personCircleOutline} slot='end'></IonIcon>
                            </IonButton>
                        </form> */}
                    
                    </IonCardContent>
                </IonCard>
            </IonContent>
        
            {/* <IonFooter>
                <IonToolbar>
                    
                </IonToolbar>
            </IonFooter> */}

        </IonPage>
    );
};

export default Login;