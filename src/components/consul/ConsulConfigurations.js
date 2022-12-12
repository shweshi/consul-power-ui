import { useContext } from 'react';
import ConsulContext from '../../context/ConsulContext';
import PrettyJson from '../json/PrettyJson';
import { Spinner } from 'flowbite-react';

const ConsulConfigurations = () => {
    const { consulConfiguration } = useContext(ConsulContext);

    if (consulConfiguration === null) {
        return <section className="bg-white dark:bg-gray-900 h-full grid h-screen place-items-center"><Spinner aria-label="Default status example" size="xl" /></section>;
    }

    return (
        <PrettyJson data={consulConfiguration} />
    );
}

export default ConsulConfigurations;