import {
	IonButton,
	IonContent,
	IonItem,
	IonLabel,
	IonPage,
	IonSelect,
	IonSelectOption,
} from '@ionic/react';
import { Storage, Drivers } from '@ionic/storage';
import React from 'react';

interface SettingsProps {
	setter: (newTheme: string, newFont: string) => void;
	currentTheme: string;
	currentFont: string;
}

const SettingsPage: React.FC<SettingsProps> = ({
	setter,
	currentTheme,
	currentFont,
}) => {
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
		theme: currentTheme,
		font: currentFont,
	});
	const handleTheme = (newTheme: string) => {
		setValues({ ...values, theme: newTheme });
	};
	const handleFont = (newFont: string) => {
		setValues({ ...values, font: newFont });
	};
	const themeList = ['normal', 'vice'];
	const fontList = ['sans-serif', 'monospace'];
	initiateStorage();
	return (
		<IonPage>
			<IonContent>
				<IonItem id='themeSelector' className='settingsSelector'>
					<IonLabel>Theme</IonLabel>
					<IonSelect
						value={values.theme}
						onIonChange={(e: any) => handleTheme(e.detail.value)}>
						{themeList.map((theme: string, index: number) => (
							<IonSelectOption key={index} value={theme}>
								{theme}
							</IonSelectOption>
						))}
					</IonSelect>
				</IonItem>
				<IonItem id='fontSelector' className='settingsSelector'>
					<IonLabel>Fonts</IonLabel>
					<IonSelect
						value={values.font}
						onIonChange={(e: any) => handleFont(e.detail.value)}>
						{fontList.map((font: string, index: number) => (
							<IonSelectOption key={index} value={font}>
								{font}
							</IonSelectOption>
						))}
					</IonSelect>
				</IonItem>
				<IonItem>
					<IonButton
						id='settingsConfirmButton'
						onClick={() => setter(values.theme, values.font)}>
						Confirm Settings
					</IonButton>
				</IonItem>
			</IonContent>
		</IonPage>
	);
};
export default SettingsPage;
