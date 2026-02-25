import type { User } from "@/interfaces/user.interface";

// Login, Resgister, ChekStatus
export interface AuthResponse {
    user: User;
    token: string;
}

