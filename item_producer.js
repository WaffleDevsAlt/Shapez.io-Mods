// @ts-nocheck
const METADATA = {
    website: "https://github.com/WaffleDevsAlt/Shapez.io-Mods",
    author: "WaffleDevs",
    name: "Item Producer",
    version: "1.0.0",
    id: "item_producer",
    description: "Adds the Item Producer into the main game.  (Legit most credit goes to tobspr)",
    minimumGameVersion: ">=1.5.0",
};

class Mod extends shapez.Mod {
    init() {
        this.modInterface.addNewBuildingToToolbar({
            toolbar: "regular",
            location: "primary",
            metaClass: shapez.MetaItemProducerBuilding,
        });
    }
}
