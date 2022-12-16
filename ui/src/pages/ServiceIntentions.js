import { ConfigurationsProvider } from '../context/ServiceIntentionsContext';
import ServiceIntentionsView from '../components/configurations/ServiceIntentionsView';
import ServiceIntentionsList from '../components/configurations/ServiceIntentionsList';
import ServiceIntentionsJson from '../components/configurations/ServiceIntentionsJson';
import { Tabs } from 'flowbite-react';

const ServiceIntentions = () => {
    return (
        <ConfigurationsProvider>
            <section className="bg-white dark:bg-gray-900 h-full">
                <div className="pl-8 pr-8 lg:py-8">
                    <div className="text-left flex">
                        <p className="mb-4 text-2xl tracking-tight font-medium text-gray-900 md:text-2xl dark:text-white">Service Intentions</p>
                    </div>
                    <Tabs.Group
                        aria-label="Tabs with underline"
                        style="underline"
                    >
                        <Tabs.Item title="Service Intentions" active={true}
                        >
                            <ServiceIntentionsView />
                        </Tabs.Item>
                        <Tabs.Item title="List View">
                            <ServiceIntentionsList />
                        </Tabs.Item>
                        <Tabs.Item title="JSON">
                            <ServiceIntentionsJson />
                        </Tabs.Item>
                    </Tabs.Group>
                </div>
            </section>
        </ConfigurationsProvider>
    );
}

export default ServiceIntentions;