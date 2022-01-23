// @ts-nocheck
const METADATA = {
    website: "https://waffledevsalt.github.io",
    author: "WaffleDevs",
    name: "Better Ui",
    version: "1.0.0",
    id: "better-ui",
    description: "Fixes several things with the rushed Mods Ui!",
    minimumGameVersion: ">=1.5.0",
};

class Mod extends shapez.Mod {
    init() {
        this.modInterface.registerCss(`
            #state_MainMenuState .modsOverview .modsList {
                height: calc(200px*var(--ui-scale));;
            }
            #state_ModsState .modsList .mod {
                grid-gap: calc(var(--ui-scale));
                grid-template-columns: 1fr calc(100px*var(--ui-scale)) calc(90px*var(--ui-scale)) calc(50px*var(--ui-scale));
            }
        `);
    }
}
