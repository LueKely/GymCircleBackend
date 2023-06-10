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
// not used
export interface DecodedToken {
	userName: string;
	permission: string;
}

export interface Transaction {
	id: string;
	transactionName: string;
	type: 'points' | 'subscription';
	buyerId: number;
	status: 'paid' | 'not paid';
	date: string;
}
