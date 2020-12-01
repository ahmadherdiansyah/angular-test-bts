import { User } from '../common/interface/user.interface';

export interface Daftar {
    email: string;
    username: string;
    password: string;
}
export interface DaftarData{
    token_identity: string;
    user: User
}