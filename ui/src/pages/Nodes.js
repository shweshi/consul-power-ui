import { NodesProvider } from '../context/NodesContext';
import NodesList from '../components/nodes/NodesList';

const Nodes = () => {
    return (
        <NodesProvider>
            <section className="bg-white dark:bg-gray-900 h-full">
                <div className="pl-8 pr-8 lg:py-8">
                    <NodesList />
                </div>
            </section>
        </NodesProvider>
    );
}

export default Nodes;