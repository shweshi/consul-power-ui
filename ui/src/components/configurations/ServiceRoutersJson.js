import { useContext } from 'react';
import ConfigurationsContext from '../../context/ServiceRoutersContext';
import PrettyJson from '../json/PrettyJson';
import { Spinner } from 'flowbite-react';

const ServiceRoutersJson = () => {
    const { serviceRouters } = useContext(ConfigurationsContext);

    if (serviceRouters === null) {
        return <section className="bg-white dark:bg-gray-900 h-full grid h-screen place-items-center"><Spinner aria-label="Default status example" size="xl" /></section>;
    }

    return (
        <PrettyJson data={serviceRouters} />
    );
}

export default ServiceRoutersJson;