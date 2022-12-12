import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip } from 'flowbite-react';

const TextCopy = (props) => {
    return (
        <div>
            <div>
                <CopyToClipboard text={props.text}>
                    <span>
                        <Tooltip content="Copied" trigger="click">
                            <div className="cursor-pointer flex justify-between items-center ">
                                <svg className="text-white w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" /><path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" /></svg>
                                {props.prompt}
                            </div>
                        </Tooltip>
                    </span>
                </CopyToClipboard>
            </div>
        </div>
    );
}

export default TextCopy;