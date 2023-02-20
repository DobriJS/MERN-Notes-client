import { User } from "./User";

export interface NavBarLoggedInViewProps {
    user: User,
    onLogoutSuccessful: () => void,
}