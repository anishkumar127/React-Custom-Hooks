import { useState } from 'react'
import Dashboard from './Dashboard';
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
      <Dashboard user={user} />
    </div>
  )
}

export default App