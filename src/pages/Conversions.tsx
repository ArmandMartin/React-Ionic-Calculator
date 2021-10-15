import { IonPage } from '@ionic/react';
import React from 'react';
import ConversionsHeader from '../components/ConversionsHeader';
import MainHeader from '../components/MainHeader';

var converter = require('convert-units');

const Conversions = () => {
	const [values, setValues] = React.useState({
		measurement: 'length',
		fromUnits: 'mm',
		toUnits: 'in',
		fromValue: 0,
		toValue: 0,
	});
	const handleMeasurmentChange = (mes: string) => {
		let fromU = converter().possibilities('mes')[0];
		let toU = converter().possibilities('mes')[1];
		setValues({
			...values,
			measurement: mes,
			fromUnits: fromU,
			toUnits: toU,
			fromValue: 0,
			toValue: 0,
		});
	};
	const handleFromUnitsChange = (fromU: string) => {
		let toVal = converter(values.fromValue).from(fromU).to(values.toUnits);
		setValues({ ...values, fromUnits: fromU, toValue: toVal });
	};
	const handleToUnitsChange = (toU: string) => {
		let toVal = converter(values.toValue).to(values.fromUnits).to(toU);
		setValues({ ...values, toUnits: toU, toValue: toVal });
	};

	return (
		<IonPage>
			<div id='measurmentSelector'></div>
			<div id='fromUnitSelector'></div>
			<div id='toUnitSelector'></div>
			<div id='conversionButtonsLayout'></div>
		</IonPage>
	);
};

export default Conversions;
