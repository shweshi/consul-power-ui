import PrettyJson from '../json/PrettyJson';

const NodeConfiguration = (props) => {
    return (
        <PrettyJson data={props.node} />
    );
}

export default NodeConfiguration;