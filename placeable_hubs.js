const METADATA = {
    website: "https://placeholder.place",
    author: "WaffleDevs",
    name: "Placeable-hubs",
    version: "1",
    id: "placeable-hubs",
    description: "Placehubable",
    minimumGameVersion: ">=1.5.0",

    settings: {
        hubCost: 10000,
    },
};


const hubCost = 10000

class MetaHubPlaceable extends shapez.ModMetaBuilding {
    constructor() {
        super("placeableHub");
    }

    static getAllVariantCombinations() {
        return [
            {
                variant: shapez.defaultBuildingVariant,
                name: "Huba",
                description: "Hub",

                regularImageBase64: RESOURCES["hubImage.png"],
                blueprintImageBase64: RESOURCES["hubImageBlueprint.png"],
                tutorialImageBase64: RESOURCES["hubImageBlueprint.png"],
            },
        ];
    }

    getDimensions() {
        return new shapez.Vector(4, 4);
    }

    getSilhouetteColor() {
        return "#eb5555";
    }

    getIsRotateable() {
        return false;
    }

    getIsRemovable() {
        return true;
    }

    /**
     * Creates the entity at the given location
     * @param {Entity} entity
     */
    setupEntityComponents(entity) {
        entity.addComponent(new shapez.HubComponent());
        entity.addComponent(
            new shapez.ItemProcessorComponent({
                inputsPerCharge: 1,
                processorType: shapez.enumItemProcessorTypes.hub,
            })
        );

        entity.addComponent(
            new shapez.WiredPinsComponent({
                slots: [
                    {
                        pos: new shapez.Vector(0, 2),
                        type: shapez.enumPinSlotType.logicalEjector,
                        direction: shapez.enumDirection.left,
                    },
                ],
            })
        );

        /**
         * @type {Array<import("../components/item_acceptor").ItemAcceptorSlotConfig>}
         */
        const slots = [];
        for (let i = 0; i < 4; ++i) {
            slots.push(
                { pos: new shapez.Vector(i, 0), direction: shapez.enumDirection.top, filter: "shape" },
                { pos: new shapez.Vector(i, 3), direction: shapez.enumDirection.bottom, filter: "shape",},
                { pos: new shapez.Vector(0, i), direction: shapez.enumDirection.left, filter: "shape" },
                { pos: new shapez.Vector(3, i), direction: shapez.enumDirection.right, filter: "shape" }
            );
        }

        entity.addComponent(
            new shapez.ItemAcceptorComponent({
                slots,
            })
        );
    }
}

class Mod extends shapez.Mod {
    init() {
        this.modInterface.runAfterMethod(shapez.GameCore, "initNewGame", function () {
          this.signals.gameSerialized.add((root, data) => {
              data.modExtraData["hub-cost"] = 10000
          });

          this.signals.gameDeserialized.add((root, data) => {
              alert("The value stored in the savegame was: " + data.modExtraData["hub-cost"]);
          });
        });

        this.modInterface.registerCss(`
            #mod_setting_1 {
                position: absolute;
                bottom: calc(50px * var(--ui-scale));
                right: calc(10px * var(--ui-scale));
                color: red;
                z-index: 0;
            }
            #mod_setting_1_b {
                text-align: center;
                width: $scaled(130px)
            }
        `);


        // Define our currency
        const CURRENCY = "CbCbCbRb:CwCwCwCw";

        this.modInterface.replaceMethod(MetaHubPlaceable, "getAdditionalStatistics", function (
            $original,
            [root, variant]
        ) {
            const oldStats = $original(root, variant);
            oldStats.push(["Cost", HubCost + " BluePrints"]);
            return oldStats;
        });

        // Only allow placing an entity when there is enough currency
        this.modInterface.replaceMethod(shapez.GameLogic, "checkCanPlaceEntity", function (
            $original,
            [entity, options]
        ) {
            const storedCurrency = this.root.hubGoals.storedShapes[CURRENCY] || 0;
            return storedCurrency >= HubCost && $original(entity, options);
        });

        // Take shapes when placing a building
        this.modInterface.replaceMethod(shapez.GameLogic, "tryPlaceBuilding", function ($original, args) {
            const result = $original(...args);
            console.log(this.root.hubGoals.storedShapes[CURRENCY])
            if (result && result.components.Hub) {
            		HubCost *= 1.3
                this.root.hubGoals.storedShapes[CURRENCY]-= HubCost;
                this.signals.gameSerialized.add((root, data) => {
                  data.modExtraData["hub-cost"] *= 1.25
              	});

                this.signals.gameDeserialized.add((root, data) => {
                    alert("The value stored in the savegame was: " + data.modExtraData["hub-cost"]);
                });
            }
            return result;
        });

        this.modInterface.registerNewBuilding({
            metaClass: MetaHubPlaceable,
            buildingIconBase64: RESOURCES["hubImage.png"],
        });

        this.modInterface.addNewBuildingToToolbar({
            toolbar: "regular",
            location: "primary",
            metaClass: MetaHubPlaceable,
        });
    }
}
