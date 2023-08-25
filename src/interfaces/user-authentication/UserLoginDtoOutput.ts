export interface UserLoginDtoOutput{
    access_token: string;
    token_type: string;
    expires_in: number;
}

export interface UserLoginLocalDto{
    unique_Id: string;
    token_type: string;
    expires_in: number; // in hours
}