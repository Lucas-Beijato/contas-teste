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


