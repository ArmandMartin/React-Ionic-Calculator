import { IonContent, IonItem, IonPage, IonSelect } from '@ionic/react';

interface SettingsProps {
	themeSetter: (newTheme: string) => Promise<void>;
	fontSetter: (newFont: string) => Promise<void>;
}

const SettingsPage: React.FC<SettingsProps> = ({ themeSetter, fontSetter }) => {
	themeSetter('normalTheme');
	return (
		<IonPage>
			<IonContent>
				<IonItem>
					<IonSelect></IonSelect>
				</IonItem>
			</IonContent>
		</IonPage>
	);
};
export default SettingsPage;
