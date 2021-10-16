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
	initiateStorage();

	const [values, setValues] = React.useState({
		theme: '',
		themeStoreLength: 0,
		font: '',
		fontStoreLength: 0,
	});
	const initiateTheme = async () => {
		await themeStore.set('theme', 'viceTheme');
		setValues({ ...values, theme: 'viceTheme', themeStoreLength: 1 });
	};
	const getCurrentTheme = async () => {
		let temp = '';
		await themeStore.get('theme').then((val) => {
			temp = val;
		});
		setValues({ ...values, theme: temp });
	};
	const setNewTheme = async (newTheme: string) => {
		if (values.theme !== newTheme) {
			await themeStore.set('theme', newTheme);
			setValues({ ...values, theme: newTheme, themeStoreLength: 1 });
		}
	};
	const initiateFont = async () => {
		await fontStore.set('font', 'sans-serif');
		setValues({ ...values, font: 'sans-serif', fontStoreLength: 1 });
	};
	const getCurrentFont = async () => {
		let temp = '';
		await fontStore.get('font').then((val) => {
			temp = val;
		});
		setValues({ ...values, font: temp });
	};
	const setNewFont = async (newfont: string) => {
		if (values.font !== newfont) {
			await fontStore.set('font', newfont);
			setValues({ ...values, font: newfont, fontStoreLength: 1 });
		}
	};
	useEffect(() => {
		console.log(values);
		if (values.theme === '' && values.themeStoreLength === 0) {
			initiateTheme();
		}
		if (values.theme === '' && values.themeStoreLength === 1) {
			getCurrentTheme();
		}
		if (values.font === '' && values.fontStoreLength === 0) {
			initiateFont();
		}
		if (values.font === '' && values.fontStoreLength === 1) {
			getCurrentFont();
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
										<SettingsPage themeSetter={setNewTheme} fontSetter={setNewFont} />
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
