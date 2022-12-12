import { useContext } from 'react';
import ConsulContext from '../../context/ConsulContext';
import SimpleCard from '../cards/SimpleCard';
import { Spinner } from 'flowbite-react';

const Peers = () => {
    const { peers } = useContext(ConsulContext);

    if (peers === null) {
        return <section className="bg-white dark:bg-gray-900 h-full grid h-screen place-items-center"><Spinner aria-label="Default status example" size="xl" /></section>;
    }

    return (
        <div className="grid grid-cols-6">
            {
                peers.map((peer) => (
                    <SimpleCard data={peer} key={peer} />
                ))
            }
        </div>
    );
}

export default Peers;