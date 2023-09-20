export type UserType = {
    id?:number, 
    name?: string|null,
    email: string|null,
    password: string|null,
}

export interface ServerResponse {
    status: boolean | 1| 0;
    token: string; // Suponiendo que token es una cadena
    user: UserType; // Suponiendo que UserType es un tipo válido
  }
export type Note = {
    id: number,
    content?: string | null ,
    updated_at?: string | null ,
}