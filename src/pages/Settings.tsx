import {
	IonContent,
	IonItem,
	IonLabel,
	IonPage,
	IonSelect,
	IonSelectOption,
} from '@ionic/react';

interface SettingsProps {
	themeSetter: (newTheme: string) => Promise<void>;
	fontSetter: (newFont: string) => Promise<void>;
	currentTheme: string;
	currentFont: string;
}

const SettingsPage: React.FC<SettingsProps> = ({
	themeSetter,
	fontSetter,
	currentTheme,
	currentFont,
}) => {
	const themeList = ['normal', 'vice'];
	const fontList = ['sans-serif', 'monospace'];
	console.log(2);
	return (
		<IonPage>
			<IonContent>
				<IonItem id='themeSelector' className='settingsSelector'>
					<IonLabel>Theme</IonLabel>
					<IonSelect
						value={currentTheme}
						onIonChange={(e: any) => themeSetter(e.detail.value)}>
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
						value={currentFont}
						onIonChange={(e: any) => fontSetter(e.detail.value)}>
						{fontList.map((font: string, index: number) => (
							<IonSelectOption key={index} value={font}>
								{font}
							</IonSelectOption>
						))}
					</IonSelect>
				</IonItem>
			</IonContent>
		</IonPage>
	);
};
export default SettingsPage;
