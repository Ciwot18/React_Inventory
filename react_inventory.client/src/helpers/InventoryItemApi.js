const createInventoryItem = async (inventoryItem) => {
    const inventoryItems = [];
    if (localStorage.getItem('inventoryItem')) {
        const localInventoryItems = JSON.parse(localStorage.getItem('inventoryItem'));
        localInventoryItems.forEach(item => {
            inventoryItems.push(item);
        });
    }
    inventoryItems.push(inventoryItem);
    localStorage.setItem('inventoryItem', JSON.stringify(inventoryItems));
};

const getInventoryItems = () => {
    return JSON.parse(localStorage.getItem('inventoryItem'));
};

export { createInventoryItem, getInventoryItems };