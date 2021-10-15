import { IonBackButton, IonButtons, IonHeader, IonToolbar } from '@ionic/react';

const ConversionsHeader = () => {
	return (
		<IonHeader>
			<IonToolbar>
				<IonButtons slot='start'>
					<IonBackButton text='buttonText' icon='buttonIcon' />
				</IonButtons>
			</IonToolbar>
		</IonHeader>
	);
};
export default ConversionsHeader;
