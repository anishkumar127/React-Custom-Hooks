import { User } from "./App";  // Props & User Types.

interface SidebarProps {
}


export const Sidebar = ({ }: SidebarProps) => {
    return (
        <div>
            <div>{user.name}</div>
            <div>Is Valid Or Not : {user.isTrue ? "YES" : "NO"}</div>
        </div>
    )
}


interface ProfileProps {
}

export const Profile = ({ }: ProfileProps) => {
    return (
        <div>
            {user.name}
        </div>
    )
}

