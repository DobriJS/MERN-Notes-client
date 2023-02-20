import { User } from "./User";

export interface NavBarLoggedInView {
    user: User,
    onLogoutSuccessful: () => void,
}