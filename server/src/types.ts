import {Request as ExpressRequest} from "express"


export interface Request<Query = unknown, Body = unknown, Params = unknown, Locals extends Record<string, any> = Record<string, any>>
	extends ExpressRequest<Params,
		any,
		Body,
		Query,
		Locals> {
}
