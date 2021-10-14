import { menuController } from '@ionic/core';
import { IonHeader, IonToolbar, IonButton, IonMenuButton } from '@ionic/react';

export default function MainHeader() {
	return (
		<div>
			<IonHeader>
				<IonToolbar>
					<IonButton type='button' fill='clear' slot='start'>
						<IonMenuButton
							type='button'
							onClick={() => menuController.toggle()}
							autoHide={false}
						/>
					</IonButton>
				</IonToolbar>
			</IonHeader>
		</div>
	);
}
