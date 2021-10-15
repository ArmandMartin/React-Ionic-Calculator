import { IonButton, IonPage } from '@ionic/react';
import { Storage } from '@ionic/storage';
import React, { useEffect } from 'react';
import './Calculator.css';

const Calculator = () => {
	const store = new Storage();
	const [values, setValues] = React.useState({
		result: '',
		v1: '',
		v2: '',
		operator: '',
	});
	async function initiateStorage() {
		await store.create();
	}
	initiateStorage();

	async function storeComputation(problem: string, answer: string) {
		await store.length().then((val) => {
			store.set(val.toString(), { problem: problem, answer: answer });
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
				storeComputation(problem, answer);
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
				storeComputation(problem, answer);
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
				storeComputation(problem, answer);
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
				storeComputation(problem, answer);
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
			<div id='inputLine'>
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
			</div>
			<div id='calculatorLayout'>
				<IonButton id='clearButton' class='roundedButton' onClick={handleClear}>
					C
				</IonButton>
				<></>
				<IonButton
					id='divisionButton'
					className='operatorButton'
					class='roundedButton'
					onClick={() => handleOperatorChange('÷')}>
					÷
				</IonButton>
				<IonButton
					id='multiplicationButton'
					className='operatorButton'
					class='roundedButton'
					onClick={() => handleOperatorChange('x')}>
					x
				</IonButton>

				<IonButton
					id='sevenButton'
					class='roundedButton'
					onClick={() => handleVarChange('7')}>
					7
				</IonButton>
				<IonButton
					id='eightButton'
					class='roundedButton'
					onClick={() => handleVarChange('8')}>
					8
				</IonButton>
				<IonButton
					id='nineButton'
					class='roundedButton'
					onClick={() => handleVarChange('9')}>
					9
				</IonButton>
				<IonButton
					id='subtractionButton'
					className='operatorButton'
					class='roundedButton'
					onClick={() => handleOperatorChange('-')}>
					-
				</IonButton>
				<IonButton
					id='fourButton'
					class='roundedButton'
					onClick={() => handleVarChange('4')}>
					4
				</IonButton>
				<IonButton
					id='fiveButton'
					class='roundedButton'
					onClick={() => handleVarChange('5')}>
					5
				</IonButton>
				<IonButton
					id='sixButton'
					class='roundedButton'
					onClick={() => handleVarChange('6')}>
					6
				</IonButton>
				<IonButton
					id='additionButton'
					className='operatorButton'
					class='roundedButton'
					onClick={() => handleOperatorChange('+')}>
					+
				</IonButton>
				<IonButton
					id='oneButton'
					class='roundedButton'
					onClick={() => handleVarChange('1')}>
					1
				</IonButton>
				<IonButton
					id='twoButton'
					class='roundedButton'
					onClick={() => handleVarChange('2')}>
					2
				</IonButton>
				<IonButton
					id='threeButton'
					class='roundedButton'
					onClick={() => handleVarChange('3')}>
					3
				</IonButton>
				<IonButton
					id='zeroButton'
					class='roundedButton'
					onClick={() => handleVarChange('0')}>
					0
				</IonButton>
				<IonButton
					id='decimalButton'
					class='roundedButton'
					onClick={() => handleVarChange('.')}>
					.
				</IonButton>
				<IonButton
					id='equalsButton'
					className='operatorButton'
					class='roundedButton'
					onClick={handleComputation}>
					=
				</IonButton>
			</div>
		</IonPage>
	);
};

export default Calculator;
