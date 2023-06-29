import { useState } from 'react'
import Dashboard from './Dashboard';
import { DashboardContext } from './context/context';
export interface User {
  isTrue: boolean,
  name: string
}
interface DemoProps { }

const App = ({ }: DemoProps) => {
  const [user] = useState<User>({
    isTrue: true,
    name: "You"
  });
  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  )
}

export default App