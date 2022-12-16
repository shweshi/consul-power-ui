import { ServicesProvider } from '../context/ServicesContext';
import ServicesList from '../components/services/ServicesList';

const Services = () => {
    return (
        <ServicesProvider>
            <section className="bg-white dark:bg-gray-900 h-full">
                <div className="pl-8 pr-8 lg:py-8">
                    <ServicesList />
                </div>
            </section>
        </ServicesProvider>
    );
}

export default Services;