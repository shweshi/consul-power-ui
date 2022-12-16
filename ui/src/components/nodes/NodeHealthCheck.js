import { Table, Card } from 'flowbite-react';
import HealthyBadge from '../badges/HealthyBadge';
import UnhealthyBadge from '../badges/UnhealthyBadge';
import TableRow from '../table/TableRow';
import PrettyJson from '../json/PrettyJson';

const NodeHealthCheck = (props) => {
    const node = props.node;
    return (
        <div className="font-general-regular w-full text-left">
            <Table hoverable={false}>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={node.Node}>
                        <Table.Cell>
                            {node.Checks.map((check) => (
                                <Card>
                                    <h6 className="font-bold tracking-tight text-gray-900 dark:text-white">
                                        {check.Status === 'passing' ? <HealthyBadge /> : <UnhealthyBadge />}
                                        <span className="pl-2">{check.Name}</span>
                                    </h6>
                                    <div className="flex items-center text-xs pl-8">
                                        <div className="min-w-0 flex-1">
                                            {check.ServiceName ?
                                                <><p className="font-bold text-gray-700 dark:text-gray-400">Service Name</p>
                                                    <p className="font-bold text-gray-700 dark:text-gray-500"> {check.ServiceName}</p>
                                                </> :
                                                <><p className="font-bold text-gray-700 dark:text-gray-400">Node Name</p>
                                                    <p className="font-bold text-gray-700 dark:text-gray-500">{check.Node}</p>
                                                </>
                                            }
                                        </div>

                                        <TableRow title={"Check ID"} value={check.CheckID} />
                                        <TableRow title={"Check Type"} value={check.Type ? check.Type : 'serf'} />
                                        <TableRow title={"Check Status"} value={check.Status} />
                                        <TableRow title={"Notes"} value={check.Notes ? check.Notes : '--'} />
                                    </div>
                                    <div className="text-xs min-w-0 flex-1 pl-8">
                                        <TableRow title={"Output"} value={<PrettyJson data={check.Output} />} />
                                    </div>
                                </Card>
                            ))}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
}

export default NodeHealthCheck;