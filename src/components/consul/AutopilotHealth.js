import { useContext } from 'react';
import ConsulContext from '../../context/ConsulContext';
import { Table, Badge } from 'flowbite-react';
import HealthyBadge from '../badges/HealthyBadge';
import UnhealthyBadge from '../badges/UnhealthyBadge';
import IconToast from '../toasts/IconToast';
import TableRow from '../table/TableRow';
import { Spinner } from 'flowbite-react';

const AutopilotHealth = () => {
    const { autopilotHealth } = useContext(ConsulContext);

    if (autopilotHealth === null) {
        return <section className="bg-white dark:bg-gray-900 h-full grid h-screen place-items-center"><Spinner aria-label="Default status example" size="xl" /></section>;
    }

    return (
        <div className="font-general-regular w-full text-left">
            <div className="pb-8 grid grid-cols-4">
                <IconToast title="Health Status" data={autopilotHealth.Healthy ? <HealthyBadge /> : <UnhealthyBadge />} />
                <IconToast title="Failure Tolerance" data={autopilotHealth.FailureTolerance} />
            </div>

            <Table hoverable={false}>
                <Table.Body className="divide-y">
                    {autopilotHealth.Servers.map((server) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={server.Name}>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                <div className="text-lg pb-2">
                                    {server.Healthy === true ? <HealthyBadge /> : <UnhealthyBadge />}
                                    <span className="pl-2">
                                        {server.Name}
                                        {server.Leader === true ?
                                            <div className="pl-4 inline-flex">
                                                <Badge color="info" className="rounded">
                                                    <span className="inline-flex">Leader</span>
                                                </Badge>
                                            </div> : <></>}

                                    </span>
                                </div>
                                <div className="flex items-left text-sm pt-2 pl-8">
                                    <TableRow title="Address" value={server.Address} />
                                    <TableRow title="Serf Status" value={server.SerfStatus} />
                                    <TableRow title="Last Contact" value={server.LastContact} />
                                    <TableRow title="Last Term" value={server.LastTerm} />
                                    <TableRow title="Version" value={server.Version} />
                                    <TableRow title="Voter" value={server.Address} />
                                    <TableRow title="Stable Since" value={server.StableSince} />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default AutopilotHealth;