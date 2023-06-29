import { useAppSelector } from '../store/hooks'
type Props = {}

const Counter = (props: Props) => {
    const count = useAppSelector(s => s.counter);
    return (
        <div>{count}</div>
    )
}

export default Counter