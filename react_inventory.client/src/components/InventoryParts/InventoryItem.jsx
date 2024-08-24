export default function InventoryItem(props) {
    const { name, description, category, status, quantity, imageURL } = props.item;

    return (
        <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={imageURL} alt="Background for Item"/>
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900" id="itemName">{name}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500" id="itemDescription">{description}</p>
                </div>
            </div>
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
        </li>
    )
}