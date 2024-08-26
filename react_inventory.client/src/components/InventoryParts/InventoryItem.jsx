const InventoryItem = (props) => {
    const { id, name, description, category, status, quantity, imageURL } = props.item;
    const { deleteItem } = props.functions;

    return (
        <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={imageURL} alt="Background for Item"/>
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900" id="itemName">{name}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500" id="itemDescription">{description}</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">{category}</p>
                    <div className="mt-1 flex items-center gap-x-1.5">
                        {status ? (
                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                            </div>
                        ) : (
                            <div className="flex-none rounded-full bg-rose-500/20 p-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                            </div>
                        )}
                        <p className="text-xs leading-5 text-gray-500">{quantity}</p>
                    </div>
                </div>
                <button onClick={() => deleteItem(id)} className="text-gray-600 transition hover:text-red-600">
                    <span className="sr-only">Rimuovi Item</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>
        </li>
    )
};

const InventoryItemSkeleton = () => {
    return (
        <li className="flex justify-between gap-x-6 py-5 animate-pulse">
            <div className="flex min-w-0 gap-x-4">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
                <div className="min-w-0 flex-auto">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24 my-1"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24 my-1"></div>
            </div>
        </li>
    )
};

export { InventoryItem, InventoryItemSkeleton };