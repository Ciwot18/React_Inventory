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
    const inventoryItems = JSON.parse(localStorage.getItem('inventoryItem'));
    return inventoryItems ? inventoryItems : [];
};

export { createInventoryItem, getInventoryItems };