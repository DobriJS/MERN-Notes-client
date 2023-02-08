import { User } from "./User";

export interface LoginModalProps {
    onDismiss: () => void,
    onLoginSuccessful: (user: User) => void,
}