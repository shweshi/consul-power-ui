import { Sidebar, Badge } from 'flowbite-react';

const AppSidebar = () => {
    return (
        <div className="sidebar h-screen sticky top-0">
            <Sidebar aria-label="Sidebar with call to action button example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="/services"
                        >
                            Services
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/nodes"
                        >
                            Nodes
                        </Sidebar.Item>
                        <Sidebar.Item href="/service-routers">
                            Service Routers
                        </Sidebar.Item>
                        <Sidebar.Item href="/service-intentions">
                            Service Intentions
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/consul"
                        >
                            Consul
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
                <Sidebar.CTA>
                    <div className="mb-3 flex items-center">
                        <Badge color="warning">
                            Beta
                        </Badge>
                    </div>
                    <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
                        This is a unstable beta version with powerful features. Use with caution.
                    </p>
                </Sidebar.CTA>
            </Sidebar>
        </div>
    );
}

export default AppSidebar;