import { IonButton, IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
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
				class='circularButton'
				onClick={() => handleOperatorChange('C')}>
				C
			</IonButton>
			<></>
			<IonButton
				id='divisionButton'
				className='operatorButton'
				class='circularButton'
				onClick={() => handleOperatorChange('÷')}>
				÷
			</IonButton>
			<IonButton
				id='multiplicationButton'
				className='operatorButton'
				class='circularButton'
				onClick={() => handleOperatorChange('x')}>
				x
			</IonButton>

			<IonButton
				id='sevenButton'
				class='circularButton'
				onClick={() => handleOperatorChange('7')}>
				7
			</IonButton>
			<IonButton
				id='eightButton'
				class='circularButton'
				onClick={() => handleOperatorChange('8')}>
				8
			</IonButton>
			<IonButton
				id='nineButton'
				class='circularButton'
				onClick={() => handleOperatorChange('9')}>
				9
			</IonButton>
			<IonButton
				id='subtractionButton'
				className='operatorButton'
				class='circularButton'
				onClick={() => handleOperatorChange('-')}>
				-
			</IonButton>
			<IonButton
				id='fourButton'
				class='circularButton'
				onClick={() => handleOperatorChange('4')}>
				4
			</IonButton>
			<IonButton
				id='fiveButton'
				class='circularButton'
				onClick={() => handleOperatorChange('5')}>
				5
			</IonButton>
			<IonButton
				id='sixButton'
				class='circularButton'
				onClick={() => handleOperatorChange('6')}>
				6
			</IonButton>
			<IonButton
				id='additionButton'
				className='operatorButton'
				class='circularButton'
				onClick={() => handleOperatorChange('+')}>
				+
			</IonButton>
			<IonButton
				id='oneButton'
				class='circularButton'
				onClick={() => handleOperatorChange('1')}>
				1
			</IonButton>
			<IonButton
				id='twoButton'
				class='circularButton'
				onClick={() => handleOperatorChange('2')}>
				2
			</IonButton>
			<IonButton
				id='threeButton'
				class='circularButton'
				onClick={() => handleOperatorChange('3')}>
				3
			</IonButton>
			<IonButton
				id='zeroButton'
				class='circularButton'
				onClick={() => handleOperatorChange('0')}>
				0
			</IonButton>
			<IonButton
				id='decimalButton'
				class='circularButton'
				onClick={() => handleOperatorChange('.')}>
				.
			</IonButton>
			<IonButton
				id='equalsButton'
				className='operatorButton'
				class='circularButton'
				onClick={() => handleOperatorChange('=')}>
				=
			</IonButton>
		</div>
	);
};

{
	/* <IonGrid>
				<IonRow>
					<IonCol>
						<IonGrid id='two'>
							<IonRow>
								<IonCol>
									<CalculatorButton value='C' buttonShape='circle' />
								</IonCol>
								<IonCol>
									<></>
								</IonCol>
								<IonCol>
									<CalculatorButton value='÷' buttonShape='circle' />
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<CalculatorButton value='7' buttonShape='circle' />
								</IonCol>
								<IonCol>
									<CalculatorButton value='8' buttonShape='circle' />
								</IonCol>
								<IonCol>
									<CalculatorButton value='9' buttonShape='circle' />
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<CalculatorButton value='4' buttonShape='circle' />
								</IonCol>
								<IonCol>
									<CalculatorButton value='5' buttonShape='circle' />
								</IonCol>
								<IonCol>
									<CalculatorButton value='6' buttonShape='circle' />
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<CalculatorButton value='1' buttonShape='circle' />
								</IonCol>
								<IonCol>
									<CalculatorButton value='2' buttonShape='circle' />
								</IonCol>
								<IonCol>
									<CalculatorButton value='3' buttonShape='circle' />
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<CalculatorButton value='0' buttonShape='circle' />
								</IonCol>
								<IonCol>
									<CalculatorButton value='.' buttonShape='circle' />
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonCol>
					<IonCol>
						<IonGrid id='one'>
							<IonRow>
								<IonCol>
									<CalculatorButton value='x' buttonShape='circle' />
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<CalculatorButton value='-' buttonShape='circle' />
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<CalculatorButton value='+' buttonShape='circle' />
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol>
									<CalculatorButton value='=' buttonShape='circle' />
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonCol>
				</IonRow>
			</IonGrid> */
}

{
	/* <IonRow>
						{gridOneButtonConfig.map((btn, index: number) =>
							btn.value !== null ? (
								<IonCol>
									<CalculatorButton
										key={index}
										value={btn.value}
										buttonShape={btn.shape}
									/>
								</IonCol>
							) : (
								<IonCol>
									<></>
								</IonCol>
							)
						)}
					</IonRow> */
}

export default ButtonLayout;
