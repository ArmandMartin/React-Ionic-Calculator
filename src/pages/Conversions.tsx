import {
	IonContent,
	IonInput,
	IonItem,
	IonPage,
	IonSegment,
	IonSegmentButton,
	IonSelect,
	IonSelectOption,
	IonToolbar,
} from '@ionic/react';
import React, { useEffect, useRef } from 'react';
import './Conversions.css';

const Conversions = () => {
	var converter = require('convert-units');
	var measurments = () => converter().measures();
	var units = (mes?: string) => converter().possibilities(mes);

	const [values, setValues] = React.useState({
		measurement: 'length',
		fromUnits: 'mm',
		toUnits: 'in',
		fromValue: 1,
		toValue: converter(1).from('mm').to('in'),
	});

	const handleMeasurmentChange = (mes: string) => {
		let fromU = units(mes)[0];
		let toU = units(mes)[1];
		values.fromUnits = fromU;
		values.toUnits = toU;
		values.measurement = mes;
		values.fromValue = 1;
		values.toValue = converter(1).from(fromU).to(toU);
		setValues({
			...values,
		});
	};
	const handleFromUnitsChange = (fromU: string) => {
		console.log(values);
		let toVal = converter(values.fromValue).from(fromU).to(values.toUnits);
		setValues({ ...values, fromUnits: fromU, toValue: toVal });
	};
	const handleToUnitsChange = (toU: string) => {
		let toVal = converter(values.toValue).from(values.fromUnits).to(toU);
		setValues({ ...values, toUnits: toU, toValue: toVal });
	};
	const handleFromValChange = (fromV: number) => {
		let toV = converter(fromV).from(values.fromUnits).to(values.toUnits);
		setValues({ ...values, fromValue: fromV, toValue: toV });
	};
	const handleToValChange = (toV: number) => {
		let fromV = converter(toV).from(values.toUnits).to(values.fromUnits);
		setValues({ ...values, fromValue: fromV, toValue: toV });
	};

	console.log(values);
	return (
		<IonPage>
			<IonContent>
				<IonItem id='measurmentSelector'>
					<IonToolbar>
						<IonSegment scrollable value={values.measurement}>
							{measurments().map((mes: string, index: any) => (
								<IonSegmentButton
									key={index}
									value={mes}
									onClick={() => handleMeasurmentChange(mes)}>
									{mes}
								</IonSegmentButton>
							))}
						</IonSegment>
					</IonToolbar>
				</IonItem>
				<IonItem id='fromSelector'>
					<IonSelect
						value={values.fromUnits}
						onIonChange={(e: any) => handleFromUnitsChange(e.detail.value)}>
						{units(values.measurement).map((uni: string, index: any) => (
							<IonSelectOption key={index} value={uni}>
								{uni}
							</IonSelectOption>
						))}
					</IonSelect>
					<IonInput
						type='number'
						value={values.fromValue}
						slot='end'
						onIonInput={(e: any) => handleFromValChange(e.target.value)}
					/>
				</IonItem>
				<IonItem id='toSelector'>
					<IonSelect
						value={values.toUnits}
						onIonChange={(e: any) => handleToUnitsChange(e.detail.value)}>
						{units(values.measurement).map((uni: string, index: any) => (
							<IonSelectOption key={index} value={uni}>
								{uni}
							</IonSelectOption>
						))}
					</IonSelect>
					<IonInput
						type='number'
						value={values.toValue}
						slot='end'
						onIonInput={(e: any) => {
							handleToValChange(e.target.value);
						}}
					/>
				</IonItem>
			</IonContent>
		</IonPage>
	);
};

export default Conversions;
