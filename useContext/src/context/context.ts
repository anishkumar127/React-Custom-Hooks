import { createContext } from "react";
import { User } from "../App";

export const DashboardContext = createContext<User | undefined>(undefined);