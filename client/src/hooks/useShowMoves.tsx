import {Dispatch, SetStateAction, useState} from "react";
import {ButtonType} from "../types";

const useShowMoves = (onShowMovesEnd: () => void) => {
	const [isRedButtonActive, setIsRedButtonActive] = useState(false)
	const [isGreenButtonActive, setIsGreenButtonActive] = useState(false)
	const [isBlueButtonActive, setIsBlueButtonActive] = useState(false)
	const [isYellowButtonActive, setIsYellowButtonActive] = useState(false)
	
	const simulateButtonClick = (setState: Dispatch<SetStateAction<boolean>>) => {
		setState(() => true)
		
		setTimeout(() => setState(() => false), 400)
	}
	
	const showMove = (move: ButtonType) => {
		if (move === 'red') simulateButtonClick(setIsRedButtonActive)
		if (move === 'green') simulateButtonClick(setIsGreenButtonActive)
		if (move === 'blue') simulateButtonClick(setIsBlueButtonActive)
		if (move === 'yellow') simulateButtonClick(setIsYellowButtonActive)
	}
	
	const showMoves = (moves: ButtonType[]) => {
		moves.forEach((move, index) => setTimeout(() => showMove(move), (index + 1) * 800))
		
		setTimeout(onShowMovesEnd, ((moves.length + 1) * 800))
	}
	
	return {isRedButtonActive, isGreenButtonActive, isBlueButtonActive, isYellowButtonActive, showMoves}
}

export default useShowMoves
