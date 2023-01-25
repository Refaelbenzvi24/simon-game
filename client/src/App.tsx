import useGameManager from "./hooks/useGameManager";


const App = () => {
	const {
		isRedButtonActive, isGreenButtonActive, isBlueButtonActive, isYellowButtonActive,
		gameControllerState, handleClick, highestScore, gameState
	} = useGameManager()
	
	
	return (
		<div className="flex flex-col h-full justify-around items-center">
			<div>
				<h2 className="text-7xl">Simon</h2>
			</div>
			
			<div className="flex flex-col">
				<div className="flex flex-row">
					<button
						onClick={() => handleClick('red')}
						disabled={gameControllerState === 'computer'}
						className={`${gameControllerState === 'computer' ? (isRedButtonActive ? 'bg-red-500' : 'bg-red-300') : 'bg-red-300 active:bg-red-500'} h-40 w-40 m-4`}/>
					<button
						onClick={() => handleClick('green')}
						disabled={gameControllerState === 'computer'}
						className={`${gameControllerState === 'computer' ? (isGreenButtonActive ? 'bg-green-500' : 'bg-green-300') : 'bg-green-300 active:bg-green-500'} h-40 w-40 m-4`}/>
				</div>
				<div className="flex flex-row">
					<button
						onClick={() => handleClick('blue')}
						disabled={gameControllerState === 'computer'}
						className={`${gameControllerState === 'computer' ? (isBlueButtonActive ? 'bg-blue-500' : 'bg-blue-300') : 'bg-blue-300 active:bg-blue-500'} h-40 w-40 m-4`}/>
					<button
						onClick={() => handleClick('yellow')}
						disabled={gameControllerState === 'computer'}
						className={`${gameControllerState === 'computer' ? (isYellowButtonActive ? 'bg-yellow-400' : 'bg-yellow-200') : 'bg-yellow-200 active:bg-yellow-400'} h-40 w-40 m-4`}/>
				</div>
			</div>
			
			<div>
				<p className="text-xl text-center">score: {gameState?.score}</p>
				<p className="text-xl text-center">highest: {highestScore}</p>
			</div>
		</div>
	)
}

export default App
