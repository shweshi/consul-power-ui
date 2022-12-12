import ServiceRouters from '../../api/configurations/ServiceRouters';
import { useState, useEffect } from 'react';
import PrettyJson from '../json/PrettyJson';
import { Spinner } from 'flowbite-react';

const ServiceRouterView = () => {
    const [serviceRouter, setServiceRouter] = useState(null);

    const name = window.location.pathname.split("/").pop();

    const fetch = async () => {
        let response = await ServiceRouters.getByName(name);
        if (response.status === 200) {
            response = await response.data;
            setServiceRouter(response)
        }
    }

    useEffect(() => {
        fetch()
    }, []);

    if (serviceRouter === null) {
        return <section className="bg-white dark:bg-gray-900 h-full grid h-screen place-items-center"><Spinner aria-label="Default status example" size="xl" /></section>;
    }

    return (
        <PrettyJson data={serviceRouter} />
    );
}

export default ServiceRouterView;