import { useContext } from 'react';
import ConfigurationsContext from '../../context/ServiceIntentionsContext';
import PrettyJson from '../json/PrettyJson';
import { Spinner } from 'flowbite-react';

const ServiceIntentionsJson = () => {
    const { serviceIntentions } = useContext(ConfigurationsContext);

    if (serviceIntentions === null) {
        return <section className="bg-white dark:bg-gray-900 h-full grid h-screen place-items-center"><Spinner aria-label="Default status example" size="xl" /></section>;
    }

    return (
        <PrettyJson data={serviceIntentions} />
    );
}

export default ServiceIntentionsJson;