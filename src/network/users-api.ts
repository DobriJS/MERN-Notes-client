import { User, SignUpCredentialsProps, LogInCredentialsProps } from '../interfaces';
import { localhost, fetchData } from '../utils/fetchData';


export async function getLoggedInUser(): Promise<User> {
    const response = await fetchData(`${localhost}/api/users`, { method: "GET" });
    return response.json();
}

export async function signUp(credentials: SignUpCredentialsProps): Promise<User> {
    const response = await fetchData(`${localhost}/api/users/signup`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
    return response.json();
}

export async function logIn(credentials: LogInCredentialsProps): Promise<User> {
    const response = await fetchData(`${localhost}/api/users/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
    return response.json();
}

export async function logout() {
    await fetchData(`${localhost}/api/users/logout`, { method: "POST" });
}

