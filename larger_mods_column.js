// @ts-nocheck
const METADATA = {
    website: "https://waffledevsalt.github.io",
    author: "WaffleDevs",
    name: "Larger Mods Column",
    version: "1.0.0",
    id: "larger-mods-column",
    description: "Makes the Main Menu Mods column a little bit larger.",
    minimumGameVersion: ">=1.5.0",
};

class Mod extends shapez.Mod {
    init() {
        this.modInterface.registerCss(`
            #state_MainMenuState .modsOverview .modsList {
                //height: calc(200px*var(--ui-scale));;
            }

        `);
    }
}
