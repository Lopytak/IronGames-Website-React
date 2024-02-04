import { Request } from 'express'
import { ITokenInfo } from './user.interface.js'

export interface IRequestWithBody<T> extends Request<{}, {}, T> {}
export interface IRequestWithQuery<T> extends Request<{}, {}, {}, T> {}
export interface IRequestWithParams<T> extends Request<T> {}
export interface IRequestWithParamsAndBody<T, B> extends Request<T, {}, B> {}

export interface IRequestWithUser extends Request {
    user: ITokenInfo
}

export interface IURIParamID { id: string }