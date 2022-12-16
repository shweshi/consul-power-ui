import { useContext } from 'react';
import ConsulContext from '../../context/ConsulContext';
import PrettyJson from '../json/PrettyJson';
import { Spinner } from 'flowbite-react';

const AutopilotConfiguration = () => {
    const { autopilotConfiguration } = useContext(ConsulContext);

    if (autopilotConfiguration === null) {
        return <section className="bg-white dark:bg-gray-900 h-full grid h-screen place-items-center"><Spinner aria-label="Default status example" size="xl" /></section>;
    }

    return (
        <PrettyJson data={autopilotConfiguration} />
    );
}

export default AutopilotConfiguration;