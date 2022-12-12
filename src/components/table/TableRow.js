const TableRow = (props) => {
    return (
        <div className="min-w-0 flex-1">
            <p className="font-bold text-gray-700 dark:text-gray-400">{props.title}</p>
            <p className="font-normal text-gray-700 dark:text-gray-500">{props.value}</p>
        </div>
    );
}

export default TableRow;