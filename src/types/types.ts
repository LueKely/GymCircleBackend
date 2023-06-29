export interface Admin {
	userEmail: string;
	name: string;
	password: string;
}

export interface Login {
	userEmail: string;
	password: string;
}

export interface Register extends Login {
	Name: string;
	Age: number;
	Address: string;
	Tier: string;
	Points: number;
}
export interface EditUser {
	Name: string;
	userEmail: string;
	Age: number;
	Address: string;
	Tier: string;
	Points: number;
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
	price: number;
	status: 'paid' | 'not paid';
	date: string;
}

export interface Announcements {
	type: string;
	description: string;
}
