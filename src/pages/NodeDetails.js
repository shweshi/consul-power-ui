import { useState, useEffect } from 'react';
import { NodesProvider } from '../context/NodesContext';
import NodeHealthCheck from '../components/nodes/NodeHealthCheck';
import { Tabs, Spinner } from 'flowbite-react';
import Nodes from '../api/catalog/Nodes';
import NodeConfiguration from '../components/nodes/NodeConfiguration';
import TextCopy from '../components/shared/TextCopy';
import { Breadcrumb } from 'flowbite-react';

const NodeDetails = () => {
    const [node, setNode] = useState(null);
    const [loading, setLoading] = useState(true);

    const name = window.location.pathname.split("/").pop();

    const fetch = async () => {
        setLoading(true);
        let response = await Nodes.getNode(name);
        if (response.status === 200) {
            response = await response.data;
            setNode(response)
            setLoading(false);
        }
    }

    useEffect(() => {
        fetch()
    }, []);

    if (loading) {
        return <section className="bg-white dark:bg-gray-900 h-full grid h-screen place-items-center"><Spinner aria-label="Default status example" size="xl" /></section>;
    } else {
        return (
            <NodesProvider>
                <section className="bg-white dark:bg-gray-900 h-full">
                    <div className="pl-8 pr-8 lg:py-8">
                        <Breadcrumb aria-label="Default breadcrumb example">
                            <Breadcrumb.Item
                                href="/nodes"
                            >
                                Nodes
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href={`/nodes/${name}`}>
                                {name}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="pl-8 pr-8">
                        <div className="flex justify-between">
                            <p className="mb-4 text-2xl tracking-tight font-medium text-gray-900 md:text-2xl dark:text-white">{name}</p>
                            <TextCopy text={node.Address} prompt={<p className="pl-2 font-medium text-gray-900 md:text-sm dark:text-white">{node.Address}</p>} />
                        </div>
                        <Tabs.Group
                            aria-label="Tabs with underline"
                            style="underline"
                        >
                            <Tabs.Item title="Health Checks" active={true}
                            >
                                <NodeHealthCheck node={node} />
                            </Tabs.Item>
                            <Tabs.Item title="JSON">
                                <NodeConfiguration node={node} />
                            </Tabs.Item>
                        </Tabs.Group>
                    </div>
                </section>
            </NodesProvider>
        );
    }
}

export default NodeDetails;