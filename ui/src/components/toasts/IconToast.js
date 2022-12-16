import { Toast } from 'flowbite-react';

const IconToast = (props) => {
    return (
        <Toast>
            <div className="ml-3 text-lg font-bold pr-4">
                {props.title}
            </div>
            <div className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200">
                {props.data}
            </div>
        </Toast>
    );
}

export default IconToast;