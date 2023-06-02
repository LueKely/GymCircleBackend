export interface Admin {}

export interface LogIn {
	Name: string;
	userName: string;
	password: string;
	Age: number;
	Address: string;
	tier: string;
	Points: number;
}
export interface User extends LogIn {
	UserID: number;
}