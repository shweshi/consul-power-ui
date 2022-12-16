import { Card } from 'flowbite-react';

const SimpleCard = (props) => {
    return (
        <Card className="m-2">
            <div className="flow-root">
                <ul>
                    <li>
                        <div className="flex items-center space-x-4">
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-bold text-gray-900 dark:text-white">
                                    {props.data}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </Card>
    );
}

export default SimpleCard;