import ServiceIntentions from '../../api/configurations/ServiceIntentions';
import { useState, useEffect } from 'react';
import PrettyJson from '../json/PrettyJson';
import { Spinner } from 'flowbite-react';

const ServiceIntentionView = () => {
    const [serviceIntention, setServiceIntention] = useState(null);

    const name = window.location.pathname.split("/").pop();

    const fetch = async () => {
        let response = await ServiceIntentions.getByName(name);
        if (response.status === 200) {
            response = await response.data;
            setServiceIntention(response)
        }
    }

    useEffect(() => {
        fetch()
    }, []);

    
    if (serviceIntention === null) {
        return <section className="bg-white dark:bg-gray-900 h-full grid h-screen place-items-center"><Spinner aria-label="Default status example" size="xl" /></section>;
    }

    return (
        <PrettyJson data={serviceIntention} />
    );
}

export default ServiceIntentionView;