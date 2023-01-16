export interface JwtPayload {
	userId: string;
	userCreatedDateTime?: string;
	userFirstName?: string;
	userLastName?: string;
	userEmail: string;
	userUsername?: string;
}
