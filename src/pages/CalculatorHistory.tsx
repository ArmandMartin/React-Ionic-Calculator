import {
	IonPage,
	IonContent,
	IonItem,
	IonList,
	IonLabel,
	IonListHeader,
} from '@ionic/react';
import { Drivers, Storage } from '@ionic/storage';
import React, { useEffect } from 'react';

const CalculatorHistory = () => {
	const history = new Storage({
		name: 'calculatorDB',
		storeName: 'calculatorHistory',
		driverOrder: [Drivers.IndexedDB],
	});
	async function initiateStorage() {
		await history.create();
	}
	async function getData() {
		let temp: Object[] = [];
		await history
			.forEach((value, key, index) => {
				temp.push(value);
			})
			.then(() => {
				setData(temp);
			});
	}
	initiateStorage();
	const [values, setValues] = React.useState({
		data: Array<Array<String>>(),
	});
	const setData = (data: any) => {
		setValues({ ...values, data: data });
	};
	useEffect(() => {
		if (values.data.length === 0) {
			getData();
		}
	});
	return (
		<IonPage>
			<IonContent>
				<IonList>
					<IonListHeader>Calculation History</IonListHeader>
					{values.data.map((pair, index: number) => (
						<IonItem key={index}>
							<IonLabel>{pair[0] + ' = ' + pair[1]}</IonLabel>
						</IonItem>
					))}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default CalculatorHistory;
