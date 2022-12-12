import { useContext } from 'react';
import ConfigurationsContext from '../../context/ServiceIntentionsContext';
import { Button, Card, Spinner } from 'flowbite-react';
import {useNavigate} from "react-router-dom";

const ServiceIntentionsList = () => {
    const { serviceIntentions } = useContext(ConfigurationsContext);

    let navigate = useNavigate(); 
    const routeChange = (name) =>{ 
        let path = name; 
        navigate(path);
    }

    if (serviceIntentions === null) {
        return <section className="bg-white dark:bg-gray-900 h-full grid h-screen place-items-center"><Spinner aria-label="Default status example" size="xl" /></section>;
    }

    return (
        <div className="grid grid-cols-3">
            {
                serviceIntentions.map((serviceIntention) => (
                    <Card className="m-2">
                        <div className="flow-root">
                            <ul>
                                <li>
                                    <div className="flex items-center space-x-4">
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                                {serviceIntention.Name === '*' ? "All Services(*)" : serviceIntention.Name}
                                            </p>
                                        </div>
                                        <Button onClick={() => { routeChange(serviceIntention.Name) }}>
                                            JSON
                                            <svg
                                                className="ml-2 -mr-1 h-4 w-4"
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
                                        </Button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Card>
                ))
            }
        </div>
    );
}

export default ServiceIntentionsList;