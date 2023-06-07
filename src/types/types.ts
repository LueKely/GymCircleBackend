export interface Admin {}

export interface Login {
	userEmail: string;
	password: string;
}

export interface Register extends Login {
	Name: string;
	Age: number;
	Address: string;
	tier: string;
	Points: number;
}
export interface User extends Register {
	UserID: number;
}

export interface DecodedToken {
	userName: string;
	permission: string;
}
