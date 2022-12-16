import { useContext } from 'react';
import NodesContext from '../../context/NodesContext';
import { Table, Button, Spinner } from 'flowbite-react';
import Nodes from '../../api/catalog/Nodes';
import { useNavigate } from "react-router-dom";
import TableRow from '../table/TableRow';
import HealthyBadge from '../badges/HealthyBadge';
import UnhealthyBadge from '../badges/UnhealthyBadge';

const NodesList = () => {
    const { nodes, fetch } = useContext(NodesContext);

    const deregisterNode = async (node) => {
        await Nodes.deregister({
            Node: node,
            Datacenter: 'aws-us-east-1'
        });
        await fetch();
    }

    let navigate = useNavigate();
    const routeChange = (name) => {
        let path = name;
        navigate(path);
    }

    if (nodes === null) {
        return <section className="bg-white dark:bg-gray-900 h-full grid h-screen place-items-center"><Spinner aria-label="Default status example" size="xl" /></section>;
    }

    return (
        <>
            <div className="text-left flex">
                <p className="mb-4 text-2xl tracking-tight font-medium text-gray-900 md:text-2xl dark:text-white">Nodes</p>
                <p className="pl-5 text-sm pt-2 text-gray-200 md:text-sm dark:text-gray-200">{nodes.filter((node) => node.Kind !== 'connect-proxy').length + ' total'}</p>
            </div><div className="font-general-regular w-full text-left">
                <Table hoverable={true} clickable>
                    <Table.Body className="divide-y">
                        {nodes.filter((node) => node.Kind !== 'connect-proxy').map((node) => (
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={node.Node}>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white" onClick={() => { routeChange(node.Node); }}>
                                    <div className="text-lg">
                                        {(node.Checks.some(check => check.Status === 'critical') || node.Checks.some(check => check.Status === 'warning') ? <UnhealthyBadge /> : <HealthyBadge />)}
                                        <span className="pl-2">{node.Node}</span>
                                    </div>
                                    <div className="flex items-left text-sm pt-2 pl-8">
                                        {node.Services.filter((service) => service.Kind !== 'connect-proxy').length > 1 ? <TableRow value={node.Services.filter((service) => service.Kind !== 'connect-proxy').length + ' Services'} /> : <TableRow value={node.Services.filter((service) => service.Kind !== 'connect-proxy').length + ' Service'} />}
                                        <TableRow value={node.Address} />
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button className="z-index-1000" color="failure" onClick={() => { deregisterNode(node.Node); }}>
                                        Deregister
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </>

    );
}

export default NodesList;