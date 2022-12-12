import { ConfigurationsProvider } from '../context/ServiceRoutersContext';
import ServiceRoutersList from '../components/configurations/ServiceRoutersList';
import ServiceRoutersJson from '../components/configurations/ServiceRoutersJson';
import { Tabs } from 'flowbite-react';

const ServiceRouters = () => {
    return (
        <ConfigurationsProvider>
            <section className="bg-white dark:bg-gray-900 h-full">
                <div className="pl-8 pr-8 lg:py-8">
                    <div className="text-left flex">
                        <p className="mb-4 text-2xl tracking-tight font-medium text-gray-900 md:text-2xl dark:text-white">Service Routers</p>
                    </div>
                    <Tabs.Group
                        aria-label="Tabs with underline"
                        style="underline"
                    >
                        <Tabs.Item title="Service Routers" active={true}
                        >
                            <ServiceRoutersList />
                        </Tabs.Item>
                        <Tabs.Item title="JSON">
                            <ServiceRoutersJson />
                        </Tabs.Item>
                    </Tabs.Group>
                </div>
            </section>
        </ConfigurationsProvider>
    );
}

export default ServiceRouters;