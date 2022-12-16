import { useContext } from 'react';
import ConsulContext from '../../context/ConsulContext';
import LeaderCard from '../cards/LeaderCard';
import { Spinner } from 'flowbite-react';

const Leader = () => {
    const { leader } = useContext(ConsulContext);

    if (leader === null) {
        return <section className="bg-white dark:bg-gray-900 h-full grid h-screen place-items-center"><Spinner aria-label="Default status example" size="xl" /></section>;
    }

    return (
        <div className="grid grid-cols-6">
            <LeaderCard data={leader} />
        </div>
    );
}

export default Leader;