import { useContext } from "react";
import { DashboardContext } from "./context/context";
interface SidebarProps {
}


export const Sidebar = ({ }: SidebarProps) => {
    const user = useContext(DashboardContext)
    return (
        <div>
            <div>{user?.name}</div>
            <div>Is Valid Or Not : {user?.isTrue ? "YES" : "NO"}</div>
        </div>
    )
}


interface ProfileProps {
}

export const Profile = ({ }: ProfileProps) => {
    const user = useContext(DashboardContext)
    return (
        <div>
            {user?.name}
        </div>
    )
}

