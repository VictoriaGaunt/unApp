/**
 * Сервис для авторизации и управления токенами.
 */
export async function login(email: string, password: string): Promise<{ token: string }> {
    // Пример: отправка запроса для входа
    const response = await fetch(`${process.env.API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
}

export function logout(): void {
    // Очистка токена и другая логика выхода
    localStorage.removeItem('token');
}