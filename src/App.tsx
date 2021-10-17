import { Route } from 'react-router-dom';
import { IonApp, IonContent, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Storage, Drivers } from '@ionic/storage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.scss';
import Menu from './components/Menu';
import Calculator from './pages/Calculator';
import Conversions from './pages/Conversions';
import MainHeader from './components/MainHeader';
import CalculatorHistory from './pages/CalculatorHistory';
import React, { useEffect } from 'react';
import SettingsPage from './pages/Settings';

const App: React.FC = () => {
	const themeStore = new Storage({
		name: 'calculatorDB',
		storeName: 'calculatorTheme',
		driverOrder: [Drivers.IndexedDB],
	});
	const fontStore = new Storage({
		name: 'calculatorDB',
		storeName: 'calculatorFont',
		driverOrder: [Drivers.IndexedDB],
	});
	async function initiateStorage() {
		await themeStore.create();
		await fontStore.create();
	}
	const [values, setValues] = React.useState({
		theme: '',
		font: '',
	});

	const setnewThemeAndFont = async (newTheme: string, newFont: string) => {
		await themeStore.set('theme', newTheme);
		await fontStore.set('font', newFont);
		setValues({ ...values, theme: newTheme, font: newFont });
	};
	const initiateThemeAndFont = async () => {
		let temp = await themeStore.length().then((val) => {
			return val;
		});
		if (temp !== 1) {
			await themeStore.set('theme', 'vice');
			await fontStore.set('font', 'sans-serif');
			setValues({
				...values,
				theme: 'vice',
				font: 'sans-serif',
			});
		} else {
			getCurrentThemeAndFont();
		}
	};
	const getCurrentThemeAndFont = async () => {
		let temp = '';
		let temp2 = '';
		await themeStore.get('theme').then((val) => {
			temp = val;
		});
		await fontStore.get('font').then((val) => {
			temp2 = val;
		});
		setValues({ ...values, theme: temp, font: temp2 });
	};
	initiateStorage();
	useEffect(() => {
		if (values.theme === '' && values.font === '') {
			initiateThemeAndFont();
		}
	});

	return (
		<div id='themeWrapper' className={values.theme}>
			<div id='fontWrapper' className={values.font}>
				<IonApp className={values.theme}>
					<MainHeader />
					<Menu />
					<IonContent>
						<IonReactRouter>
							<IonRouterOutlet id='mainContent'>
								<Route path='/' component={Calculator} />
								<Route path='/history' component={CalculatorHistory} />
								<Route path='/conversions' component={Conversions} />
								<Route
									path='/settings'
									render={() => (
										<SettingsPage
											setter={setnewThemeAndFont}
											currentTheme={values.theme}
											currentFont={values.font}
										/>
									)}
								/>
							</IonRouterOutlet>
						</IonReactRouter>
					</IonContent>
				</IonApp>
			</div>
		</div>
	);
};

export default App;
