import { present } from '@ionic/core/dist/types/utils/overlays';
import {
	IonButton,
	IonCol,
	IonContent,
	IonGrid,
	IonPage,
	IonRow,
	useIonAlert,
} from '@ionic/react';
import { Storage, Drivers } from '@ionic/storage';
import React, { useEffect } from 'react';
import './Calculator.css';

const Calculator = () => {
	const [present] = useIonAlert();
	const history = new Storage({
		name: 'calculatorDB',
		storeName: 'calculatorHistory',
		driverOrder: [Drivers.IndexedDB],
	});
	const [values, setValues] = React.useState({
		result: '',
		v1: '',
		v2: '',
		operator: '',
	});
	async function initiateStorage() {
		await history.create();
	}
	initiateStorage();

	async function historyStoreComputation(problem: string, answer: string) {
		await history.length().then((val) => {
			history.set(val.toString(), [problem, answer]);
		});
	}

	const handleOperatorChange = (op: string) => {
		if (values.v1 !== '' && values.v2 === '') {
			setValues({ ...values, operator: op });
		}
	};
	const handleVarChange = (num: string) => {
		if (values.v1 === '0') {
			setValues({ ...values, v1: num });
			return;
		}
		if (values.operator !== '' && values.v2 === '0') {
			setValues({ ...values, v2: num });
			return;
		}
		if (values.operator === '' && values.v1.length < 15) {
			setValues({ ...values, v1: values.v1 + num, result: '' });
			return;
		}
		if (values.operator !== '' && values.v2.length < 15) {
			setValues({ ...values, v2: values.v2 + num, result: '' });
			return;
		}
		present(
			'You may only enter 15 digits per variable operator side. You may use another 15 after you enter an operator.',
			[{ text: 'Ok' }]
		);
	};
	const handleClear = () => {
		setValues({
			...values,
			v1: '',
			v2: '',
			operator: '',
			result: '',
		});
	};
	const handleComputation = () => {
		let problem, answer;
		switch (values.operator) {
			case '÷':
				problem = values.v1 + ' ÷ ' + values.v2;
				answer = (parseFloat(values.v1) / parseFloat(values.v2)).toString();
				historyStoreComputation(problem, answer);
				setValues({
					...values,
					result: answer,
					v1: '',
					v2: '',
					operator: '',
				});
				break;
			case 'x':
				problem = values.v1 + ' x ' + values.v2;
				answer = (parseFloat(values.v1) * parseFloat(values.v2)).toString();
				historyStoreComputation(problem, answer);
				setValues({
					...values,
					result: answer,
					v1: '',
					v2: '',
					operator: '',
				});
				break;
			case '-':
				problem = values.v1 + ' - ' + values.v2;
				answer = (parseFloat(values.v1) - parseFloat(values.v2)).toString();
				historyStoreComputation(problem, answer);
				setValues({
					...values,
					result: answer,
					v1: '',
					v2: '',
					operator: '',
				});
				break;
			case '+':
				problem = values.v1 + ' + ' + values.v2;
				answer = (parseFloat(values.v1) + parseFloat(values.v2)).toString();
				historyStoreComputation(problem, answer);
				setValues({
					...values,
					result: answer,
					v1: '',
					v2: '',
					operator: '',
				});
				break;
			default:
				break;
		}
	};

	const adjustFontSize = () => {
		let lenItem = document.getElementById('calculatorInput');
		if (lenItem === null) {
			return;
		}
		let len = lenItem.innerText.length;
		let cs = lenItem.style.fontSize;
		if (len !== undefined) {
			let fontsize = 4 - len * 0.12;
			if (fontsize < 1.12) {
				fontsize = 1.12;
			}
			document.getElementById('calculatorInput')!.style.fontSize =
				fontsize + 'rem';
		}
	};
	useEffect(() => {
		adjustFontSize();
	});
	return (
		<IonPage>
			<IonContent id='calculatorContentWrapper'>
				<IonGrid fixed={true} id='calculatorGrid'>
					<IonRow>
						<IonCol id='inputLine'>
							{values.result !== '' ? (
								values.operator === '' ? (
									<h1 id='calculatorInput'>{values.result}</h1>
								) : (
									<h1 id='calculatorInput'>
										{values.result + ' ' + values.operator + ' ' + values.v2}
									</h1>
								)
							) : values.operator === '' ? (
								<h1 id='calculatorInput'>{values.v1}</h1>
							) : (
								<h1 id='calculatorInput'>
									{values.v1 + ' ' + values.operator + ' ' + values.v2}
								</h1>
							)}
						</IonCol>
					</IonRow>
					<IonRow className='calculatorRows'>
						<IonCol className='calculatorColumns'>
							<IonButton
								id='clearButton'
								className='calculatorButtons'
								onClick={handleClear}>
								c
							</IonButton>
						</IonCol>
						<IonCol className='calculatorColumns'></IonCol>
						<IonCol className='calculatorColumns'>
							<IonButton
								id='divisionButton'
								className='calculatorButtons'
								onClick={() => handleOperatorChange('÷')}>
								÷
							</IonButton>
						</IonCol>
						<IonCol className='calculatorColumns'>
							<IonButton
								id='multiplicationButton'
								className='calculatorButtons'
								onClick={() => handleOperatorChange('x')}>
								x
							</IonButton>
						</IonCol>
					</IonRow>
					<IonRow className='calculatorRows'>
						<IonCol className='calculatorColumns'>
							<IonButton
								className='calculatorButtons'
								onClick={() => handleVarChange('7')}>
								7
							</IonButton>
						</IonCol>
						<IonCol className='calculatorColumns'>
							<IonButton
								className='calculatorButtons'
								onClick={() => handleVarChange('8')}>
								8
							</IonButton>
						</IonCol>
						<IonCol className='calculatorColumns'>
							<IonButton
								className='calculatorButtons'
								onClick={() => handleVarChange('9')}>
								9
							</IonButton>
						</IonCol>
						<IonCol className='calculatorColumns'>
							<IonButton
								id='subtractionButton'
								className='calculatorButtons'
								onClick={() => handleOperatorChange('-')}>
								-
							</IonButton>
						</IonCol>
					</IonRow>
					<IonRow className='calculatorRows'>
						<IonCol className='calculatorColumns'>
							<IonButton
								className='calculatorButtons'
								onClick={() => handleVarChange('4')}>
								4
							</IonButton>
						</IonCol>
						<IonCol className='calculatorColumns'>
							<IonButton
								className='calculatorButtons'
								onClick={() => handleVarChange('5')}>
								5
							</IonButton>
						</IonCol>
						<IonCol className='calculatorColumns'>
							<IonButton
								className='calculatorButtons'
								onClick={() => handleVarChange('6')}>
								6
							</IonButton>
						</IonCol>
						<IonCol className='calculatorColumns'>
							<IonButton
								id='additionButton'
								className='calculatorButtons'
								onClick={() => handleOperatorChange('+')}>
								+
							</IonButton>
						</IonCol>
					</IonRow>
					<IonRow className='calculatorRows'>
						<IonCol className='calculatorColumns'>
							<IonButton
								className='calculatorButtons'
								onClick={() => handleVarChange('1')}>
								1
							</IonButton>
						</IonCol>
						<IonCol className='calculatorColumns'>
							<IonButton
								className='calculatorButtons'
								onClick={() => handleVarChange('2')}>
								2
							</IonButton>
						</IonCol>
						<IonCol className='calculatorColumns'>
							<IonButton
								className='calculatorButtons'
								onClick={() => handleVarChange('3')}>
								3
							</IonButton>
						</IonCol>
						<IonCol className='calculatorColumns' id='equalsColumn'>
							<IonButton
								id='equalsButton'
								className='calculatorButtons'
								onClick={handleComputation}>
								=
							</IonButton>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className='calculatorColumns' size='2'>
							<IonButton
								id='zeroButton'
								className='calculatorButtons'
								onClick={() => handleVarChange('0')}>
								0
							</IonButton>
						</IonCol>
						<IonCol className='calculatorColumns' size='1'>
							<IonButton
								id='decimalButton'
								className='calculatorButtons'
								onClick={() => handleOperatorChange('+')}>
								.
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Calculator;
