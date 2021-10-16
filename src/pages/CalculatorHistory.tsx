import {
	IonPage,
	IonContent,
	IonItem,
	IonHeader,
	IonList,
	IonLabel,
	IonListHeader,
} from '@ionic/react';
import { Storage } from '@ionic/storage';
import React, { useEffect } from 'react';

const CalculatorHistory = () => {
	const store = new Storage();
	async function initiateStorage() {
		await store.create();
	}
	async function getData() {
		var temp: Object[] = [];
		await store
			.forEach((value, key, index) => {
				temp.push(value);
			})
			.then(() => {
				setData(temp);
			});
	}
	initiateStorage();
	const emptyNestedStringArray: string[][] = [[]];
	const [values, setValues] = React.useState({
		data: emptyNestedStringArray,
	});
	const setData = (data: any) => {
		setValues({ ...values, data: data });
	};
	useEffect(() => {
		if (values.data === emptyNestedStringArray) {
			getData();
		}
	});
	return (
		<IonPage>
			<IonList>
				<IonListHeader>Calculation History</IonListHeader>
				{values.data.map((pair: string[], index: number) => {
					console.log(pair[0] + ' = ' + pair[1]);
					<IonItem key={index}>
						<IonLabel>
							<p>{pair[0] + ' = ' + pair[1]}</p>
						</IonLabel>
					</IonItem>;
				})}
			</IonList>
		</IonPage>
	);
};

export default CalculatorHistory;
