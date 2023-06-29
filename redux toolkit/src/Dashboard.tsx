import { Profile, Sidebar } from './Components';
interface DashboardProps {
}
const Dashboard = ({ }: DashboardProps) => {
    return (
        <div>
            <Sidebar />
            <Profile />
        </div>
    )
}

export default Dashboard