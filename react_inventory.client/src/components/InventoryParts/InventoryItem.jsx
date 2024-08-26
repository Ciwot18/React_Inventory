import { deleteInventoryItem } from "../../helpers/InventoryItemApi";

export default function InventoryItem(props) {
    const { id, name, description, category, status, quantity, imageURL } = props.item;

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
                <button onClick={() => deleteInventoryItem(id)} className="text-gray-600 transition hover:text-red-600">
                    <span className="sr-only">Rimuovi Item</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>
        </li>
    )
}