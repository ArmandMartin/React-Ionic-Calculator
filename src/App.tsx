import { Route } from 'react-router-dom';
import { IonApp, IonContent, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import React from 'react';

const App: React.FC = () => {
	const [values, setValues] = React.useState({
		theme: 'viceTheme',
	});
	const setTheme = (newTheme: string) => {
		setValues({ ...values, theme: newTheme });
	};

	return (
		<IonApp className={values.theme}>
			<MainHeader />
			<Menu />
			<IonContent>
				<IonReactRouter>
					<IonRouterOutlet id='mainContent'>
						<Route path='/' component={Calculator} />
						<Route path='/history' component={CalculatorHistory} />
						<Route path='/conversions' component={Conversions} />
						<Route path='/Themes' component={Calculator} />
					</IonRouterOutlet>
				</IonReactRouter>
			</IonContent>
		</IonApp>
	);
};

export default App;
