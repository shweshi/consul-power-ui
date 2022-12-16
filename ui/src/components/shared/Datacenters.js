import { useContext } from 'react';
import DatacenterContext from '../../context/DatacenterContext';
import { Dropdown } from 'flowbite-react';

const Datacenters = () => {
    const { datacenters } = useContext(DatacenterContext);

    const changeDatacenter = (datacenter) => {
        localStorage.setItem('datacenter', datacenter);
        window.location.reload()
    }

    if (datacenters === null) {
        return <></>;
    }

    return (
        <div className="flex md:order-2 whitespace-nowrap font-semibold text-gray-900 dark:text-gray-400">
            <Dropdown
                arrowIcon={true}
                inline={true}
                label={localStorage.getItem('datacenter')}
            >
                {datacenters.map((datacenter) => (
                    <Dropdown.Item onClick={() => changeDatacenter(datacenter)} key={datacenter}>
                        {datacenter}
                    </Dropdown.Item>
                ))}
            </Dropdown>
        </div>
    );
}

export default Datacenters;