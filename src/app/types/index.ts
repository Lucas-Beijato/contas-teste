export type User_Type = {
    id: string,
    name: string,
    is_active: boolean
};

export type ApiResponseAdm_Type<T> =
    { data: T } |
    { error: string }

export type UsersListResponse = { users: Array<User_Type> }
export type UserResponse = { user: User_Type }
export type UpdateUserResponse = { message: string }
export type TokenResponse = { token: string }
export type ErrorResponse = { error: string }

// type Adm_User_Type = {
//     id: string,
//     name: string,
//     password: string
// } | null;

// type Account_Type = {
//     id: string,
//     user_id: string,
//     description: string,
//     limit_date: string,
//     value: number,
//     is_paid: boolean
// }

// type New_Account_Type = {
//     userID: string,
//     value: number,
//     is_paid: boolean,
//     description: string,
//     limit_date: string
// }

// type Services_Return = {
//     status: number,
//     data: {},
//     error: string | null
// }


