export interface UserState {
    name: string;
    email: string;
}

export const userModule = {
    state: () => ({
        name: '',
        email: '',
    }),
    actions: {
        setUser(user: UserState) {
            this.name = user.name;
            this.email = user.email;
        },
        clearUser() {
            this.name = '';
            this.email = '';
        },
    },
};