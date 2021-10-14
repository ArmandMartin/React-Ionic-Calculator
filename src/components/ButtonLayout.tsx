import { IonButton } from '@ionic/react';
import React from 'react';
import './ButtonLayout.css';

const ButtonLayout = () => {
	const [values, setValues] = React.useState({
		input: 0,
		v1: null,
		v2: null,
		operator: '',
	});

	const handleOperatorChange = (op: string) => {
		setValues({ ...values, operator: op });
	};
	return (
		<div id='calculatorLayout'>
			<IonButton
				id='clearButton'
				class='roundedButton'
				onClick={() => handleOperatorChange('C')}>
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
				onClick={() => handleOperatorChange('7')}>
				7
			</IonButton>
			<IonButton
				id='eightButton'
				class='roundedButton'
				onClick={() => handleOperatorChange('8')}>
				8
			</IonButton>
			<IonButton
				id='nineButton'
				class='roundedButton'
				onClick={() => handleOperatorChange('9')}>
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
				onClick={() => handleOperatorChange('4')}>
				4
			</IonButton>
			<IonButton
				id='fiveButton'
				class='roundedButton'
				onClick={() => handleOperatorChange('5')}>
				5
			</IonButton>
			<IonButton
				id='sixButton'
				class='roundedButton'
				onClick={() => handleOperatorChange('6')}>
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
				onClick={() => handleOperatorChange('1')}>
				1
			</IonButton>
			<IonButton
				id='twoButton'
				class='roundedButton'
				onClick={() => handleOperatorChange('2')}>
				2
			</IonButton>
			<IonButton
				id='threeButton'
				class='roundedButton'
				onClick={() => handleOperatorChange('3')}>
				3
			</IonButton>
			<IonButton
				id='zeroButton'
				class='roundedButton'
				onClick={() => handleOperatorChange('0')}>
				0
			</IonButton>
			<IonButton
				id='decimalButton'
				class='roundedButton'
				onClick={() => handleOperatorChange('.')}>
				.
			</IonButton>
			<IonButton
				id='equalsButton'
				className='operatorButton'
				class='roundedButton'
				onClick={() => handleOperatorChange('=')}>
				=
			</IonButton>
		</div>
	);
};

export default ButtonLayout;
