import { useContext } from 'react';
import ServicesContext from '../../context/ServicesContext';
import { Table, Spinner } from 'flowbite-react';
import TableRow from '../table/TableRow';
import HealthyBadge from '../badges/HealthyBadge';
import UnhealthyBadge from '../badges/UnhealthyBadge';

const ServicesList = () => {
    const { services } = useContext(ServicesContext);

    if (services === null) {
        return <section className="bg-white dark:bg-gray-900 h-full grid h-screen place-items-center"><Spinner aria-label="Default status example" size="xl" /></section>;
    }

    return (
        <>
            <div className="text-left flex">
                <p className="mb-4 text-2xl tracking-tight font-medium text-gray-900 md:text-2xl dark:text-white">Services</p>
                <p className="pl-5 text-sm pt-2 text-gray-200 md:text-sm dark:text-gray-200">{services.filter((service) => service.Kind !== 'connect-proxy').length + ' total'}</p>
            </div>
            <div className="font-general-regular w-full text-left">
                <Table hoverable={true}>
                    <Table.Body className="divide-y">
                        {services.filter((service) => service.Kind !== 'connect-proxy').map((service) => (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={service.Name}>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    <div className="text-lg">
                                        {service.ChecksCritical === 0 ? <HealthyBadge /> : <UnhealthyBadge />}
                                        <span className="pl-2">{service.Name}</span>
                                    </div>
                                    <div className="flex items-left text-sm pt-2 pl-8">
                                        {service.InstanceCount > 1 ? <TableRow value={service.InstanceCount + ' Instances'} /> : <TableRow value={service.InstanceCount + ' Instance'} />}
                                        {service.ConnectedWithProxy === true ? <TableRow value={"In Service Mesh with Proxy"} /> : service.Kind === "ingress-gateway" ? <TableRow title={"ingress-gateway"} /> : <TableRow title={""} />}
                                        <TableRow value={`Passing: ${service.ChecksPassing} Warning: ${service.ChecksWarning} Critical: ${service.ChecksCritical}`} />
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </>
    );
}

export default ServicesList;