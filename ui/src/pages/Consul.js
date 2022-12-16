import { ConsulProvider } from '../context/ConsulContext';
import Leader from '../components/consul/Leader';
import Peers from '../components/consul/Peers';
import AutopilotHealth from '../components/consul/AutopilotHealth';
import AutopilotConfiguration from '../components/consul/AutopilotConfiguration';
import ConsulConfigurations from '../components/consul/ConsulConfigurations';
import { Tabs } from 'flowbite-react';

const Consul = () => {
    return (
        <ConsulProvider>
            <section className="bg-white dark:bg-gray-900 h-full">
                <div className="pl-8 pr-8 lg:py-8">
                    <div className="text-left">
                        <p className="mb-4 text-2xl tracking-tight font-medium text-gray-900 md:text-2xl dark:text-white">Consul</p>
                    </div>
                    <Tabs.Group
                        aria-label="Tabs with underline"
                        style="underline"
                    >
                        <Tabs.Item title="Leader" active={true}
                        >
                            <Leader />
                        </Tabs.Item>
                        <Tabs.Item title="Peers">
                            <Peers />
                        </Tabs.Item>
                        <Tabs.Item title="Autopilot Health">
                            <div className="mt-4 text-left">
                                <p className="mb-4 text-xl tracking-tight font-bold text-gray-900 md:text-lg dark:text-white">Autopilot Health</p>
                            </div>
                            <AutopilotHealth />
                            <div className="mt-12 text-left">
                                <p className="mb-4 text-xl tracking-tight font-bold text-gray-900 md:text-lg dark:text-white">Autopilot Configuration</p>
                            </div>
                            <AutopilotConfiguration />
                        </Tabs.Item>
                        <Tabs.Item title="Configurations">
                            <ConsulConfigurations />
                        </Tabs.Item>
                    </Tabs.Group>
                </div>
            </section>
        </ConsulProvider>
    );
}

export default Consul;