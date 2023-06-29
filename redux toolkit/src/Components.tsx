import { useSelector } from 'react-redux';
import { RootState } from './redux/store';


interface SidebarProps { }

export const Sidebar = ({ }: SidebarProps) => {
    const user = useSelector((state: RootState) => state.user.data);
    return (
        <div>
            <div>{user?.name}</div>
            <div>Is Valid Or Not : {user?.isTrue ? 'YES' : 'NO'}</div>
        </div>
    );
};

interface ProfileProps { }

export const Profile = ({ }: ProfileProps) => {
    const user = useSelector((state: RootState) => state.user.data);
    return <div>{user?.name}</div>;
};
