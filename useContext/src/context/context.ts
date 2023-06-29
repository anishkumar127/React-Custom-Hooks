import { createContext, useContext } from "react";
import { User } from "../App";

export const DashboardContext = createContext<User | undefined>(undefined);

export const useUserContext = () => {
    const user = useContext(DashboardContext);

    if (user === undefined) {
        throw new Error("useUserContext must be used with a DashboardContext");
    }
    return user;
}