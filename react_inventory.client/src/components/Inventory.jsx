import InventoryItem from "./InventoryParts/InventoryItem";

export default function Inventory() {
    return (
        <>
            <h2 className="text-center pt-2 mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Elementi presenti nel tuo inventario</h2>
            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:pb-4 lg:px-6">
                    <ul className="divide-y divide-gray-100">
                        <InventoryItem Name="Pizza" Description="Margherita surgelata" Category="Alimentari" Status="true"/>
                        <InventoryItem Name="Pasta" Description="Spaghetti al sugo piccante (Con sugo all'arrabbiata)" Category="Alimentari" Status="true"/>
                        <InventoryItem Name="Tortellini" Description="Ripieni di ricotta e spinaci" Category="Alimentari" Status="false"/>
                        <InventoryItem Name="Silpancho" Description="Piatto Boliviano a base di riso, patate e carne battuta molto sottile e fritta" Category="Alimentari" Status="true"/>
                        <InventoryItem Name="Pique Macho" Description="Piatto Boliviano che consiste in patate, carne a cubetti marinata e cotta a fuoco lento, uova e salse, di solito molto piccante" Category="Alimentari" Status="true"/>
                        <InventoryItem Name="Mandarini" Description="Cassetta di mandarini da 5kg." Category="Alimentari" Status="false"/>
                        <InventoryItem Name="Trapano" Description="Trapano/avvitatore con inserti" Category="Utensili" Status="true"/>
                        <InventoryItem Name="Scala 5mt" Description="Scala a pioli di 5mt." Category="Utensili" Status="true"/>
                    </ul>
                </div>
            </section>
        </>
    )
}