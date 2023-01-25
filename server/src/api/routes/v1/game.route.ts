import express from 'express'

import * as controller from "../../controllers/game.controller"
import {validate} from "../../middlewares/validate"
import {moveValidation} from "../../validations/game.validation";

const router = express.Router()


router
	.route('/new')
	.post(controller.startGame)

router.route('/:gameId/move')
      .post(validate(moveValidation), controller.move)

export default router
