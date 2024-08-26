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

const getInventoryItems = async () => {
    const inventoryItems = JSON.parse(localStorage.getItem('inventoryItem'));
    await new Promise(resolve => setTimeout(resolve, 1500));
    return inventoryItems ? inventoryItems : [];
};

const deleteInventoryItem = (idToDelete) => {
    const inventoryItems = JSON.parse(localStorage.getItem('inventoryItem'));
    const newInventoryItems = inventoryItems.filter(item => item.id !== idToDelete);
    localStorage.setItem('inventoryItem', JSON.stringify(newInventoryItems));
}

export { createInventoryItem, getInventoryItems, deleteInventoryItem };