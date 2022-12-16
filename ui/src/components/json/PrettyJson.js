import JSONPretty from 'react-json-pretty';
import TextCopy from '../shared/TextCopy';
var JSONPretty1337 = require('react-json-pretty/dist/acai');

const PrettyJson = (props) => {
    return (
        <div className="pt-2 max-w-screen-lg relative">
            <JSONPretty id="json-pretty" data={props.data} theme={JSONPretty1337} className=""></JSONPretty>
            <div className="absolute top-5 right-2">
                <TextCopy text={JSON.stringify(props.data, undefined, 2)} prompt={""} />
            </div>
        </div>
    );
}

export default PrettyJson;