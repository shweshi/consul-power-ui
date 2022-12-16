import { Navbar } from 'flowbite-react';
import { DatacenterProvider } from '../../context/DatacenterContext';
import Datacenters from './Datacenters';

const AppHeader = () => {
    return (
        <DatacenterProvider>
            <Navbar
                fluid={true}
                rounded={false}
                fixed={true}
                className="sticky top-0 z-50"
            >
                <Navbar.Brand href="/">
                    <img
                        src="https://cdn.cdnlogo.com/logos/c/13/consul.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Consul Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Consul Power UI
                    </span>
                </Navbar.Brand>
                <Datacenters />
            </Navbar>
        </DatacenterProvider>
    );
}

export default AppHeader;