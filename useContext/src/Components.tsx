import { User } from "./App";  // Props & User Types.

interface SidebarProps {
    user: User;
}


export const Sidebar = ({ user }: SidebarProps) => {
    return (
        <div>
            <div>{user.name}</div>
            <div>Is Valid Or Not : {user.isTrue ? "YES" : "NO"}</div>
        </div>
    )
}


interface ProfileProps {
    user: User;
}

export const Profile = ({ user }: ProfileProps) => {
    return (
        <div>
            {user.name}
        </div>
    )
}

