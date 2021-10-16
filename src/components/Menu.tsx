import {
	IonMenu,
	IonContent,
	IonList,
	IonMenuToggle,
	IonItem,
	IonLabel,
} from '@ionic/react';
import './Menu.css';
export default function Menu() {
	return (
		<IonMenu
			type='overlay'
			swipeGesture={false}
			side='start'
			id='mainMenu'
			contentId='mainContent'>
			<IonContent class='contentWindow'>
				<IonList>
					<IonMenuToggle auto-hide='false'>
						{window.location.pathname !== '/' ? (
							<IonItem button routerLink={'/'}>
								<IonLabel>Calculator</IonLabel>
							</IonItem>
						) : null}
						{window.location.pathname !== '/history' ? (
							<IonItem button routerLink={'/history'}>
								<IonLabel>History</IonLabel>
							</IonItem>
						) : null}
						{window.location.pathname !== '/conversions' ? (
							<IonItem button routerLink={'/conversions'}>
								<IonLabel>Conversions</IonLabel>
							</IonItem>
						) : null}
						{window.location.pathname !== '/settings' ? (
							<IonItem button routerLink={'/settings'}>
								<IonLabel>Settings</IonLabel>
							</IonItem>
						) : null}
					</IonMenuToggle>
				</IonList>
			</IonContent>
		</IonMenu>
	);
}
