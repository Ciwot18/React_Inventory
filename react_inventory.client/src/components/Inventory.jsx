import InventoryItem from "./InventoryParts/InventoryItem";
import { getInventoryItems } from "../helpers/InventoryItemApi";

export default function Inventory() {
    const inventoryItems = getInventoryItems();

    return (
        <div className="bg-gray-100 px-4 min-h-[calc(100vh-64px)]">
            <h2 className="text-center pt-2 mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Elementi presenti nel tuo inventario</h2>
            <section className="bg-white dark:bg-gray-900 px-4">
                <div className="gap-16 items-center py-2 px-4 mx-auto max-w-screen-xl lg:pb-4 lg:px-6">
                    {inventoryItems.length > 0 ? (
                        <ul className="divide-y divide-gray-100">
                        {inventoryItems.map((item, index) => (
                            <InventoryItem key={index} item={item} />
                        ))}
                    </ul>
                    ) : (
                        <p className="text-center text-xl text-gray-500 dark:text-gray-400">Non ci sono elementi presenti nel tuo inventario.</p>
                    )}
                </div>
            </section>
        </div>
    )
}