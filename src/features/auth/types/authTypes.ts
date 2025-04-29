export interface LoginPayload {
    email: string;
    code: string;
}

export interface RegistrationPayload {
    username: string;
    email: string;
    code: string;
}

export interface AuthResponse {
    success: boolean;
    user: any; // Можно уточнить тип
    token: string;
}
