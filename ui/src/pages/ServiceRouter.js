import ServiceRouterView from '../components/configurations/ServiceRouterView';
import { Breadcrumb } from 'flowbite-react';

const ServiceRouter = () => {
    const name = window.location.pathname.split("/").pop();
    return (
        <section className="bg-white dark:bg-gray-900 h-full">
            <div className="pl-8 pr-8 lg:py-8">
                <Breadcrumb aria-label="Default breadcrumb example">
                    <Breadcrumb.Item
                        href="/service-routers"
                    >
                        Service Routers
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href={`/service-routers/${name}`}>
                        {name}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="pl-8 pr-8">
                <div className="text-left">
                    <p className="mb-4 text-2xl tracking-tight font-medium text-gray-900 md:text-2xl dark:text-white">Service Router: {name}</p>
                </div>
                <ServiceRouterView />
            </div>
        </section>
    );
}

export default ServiceRouter;