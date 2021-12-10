import api from "../api";

export interface SignInData {
    email: string;
    password: string;
}

export interface SignUpData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const userSignIn = async (data: SignInData) => {
    const user = await api.post('/user/signin', data);
    return user;
}

const userSignUp = async (data: SignUpData) => {
    const user = await api.post('/user/signup', data);
    return user;
}

const me = async () => {
    const user = await api.get('/user/signup');
}