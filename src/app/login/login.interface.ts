import { User } from '../common/interface/user.interface';

export interface Login {
    username: string;
    password: string;
}
export interface LoginData {
    data: Token
    errorMessage: string
    message: string
    statusCode: Number
}
export interface Token{
    token: string
}