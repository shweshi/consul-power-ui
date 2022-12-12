import { useContext } from 'react';
import ConfigurationsContext from '../../context/ServiceIntentionsContext';
import { Spinner, Table } from 'flowbite-react';

const ServiceIntentionsList = () => {
    const { serviceIntentions } = useContext(ConfigurationsContext);

    if (serviceIntentions === null) {
        return <section className="bg-white dark:bg-gray-900 h-full grid h-screen place-items-center"><Spinner aria-label="Default status example" size="xl" /></section>;
    }

    return (
        <Table>
            <Table.Head>
                <Table.HeadCell>
                    Source
                </Table.HeadCell>
                <Table.HeadCell>
                    Action
                </Table.HeadCell>
                <Table.HeadCell>
                    Destination
                </Table.HeadCell>
                <Table.HeadCell>
                    Precedence
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {serviceIntentions.map((intention) => (
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        {
                            intention.Sources.map((source) => (
                                <><Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {source.Name === '*' ? 'All Services(*)' : source.Name}
                                </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {source.Action === 'allow' ? <span className="bg-green-100 text-green-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-lg dark:bg-green-200 dark:text-green-800">
                                            <svg
                                                className="mr-1 h-4 w-4"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {source.Action}
                                        </span> : <span className="bg-red-100 text-red-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-lg dark:bg-red-200 dark:text-red-800">
                                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            {source.Action}
                                        </span>}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {intention.Name === '*' ? 'All Services(*)' : intention.Name}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {source.Precedence}
                                    </Table.Cell>
                                </>
                            ))
                        }
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}

export default ServiceIntentionsList;