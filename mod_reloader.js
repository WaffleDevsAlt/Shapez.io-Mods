// @ts-nocheck
const METADATA = {
    website: "https://waffledevsalt.github.io",
    author: "WaffleDevs",
    name: "Mod Reloader",
    version: "1.0.1",
    id: "mod-reloader",
    description: "Adds a button to the main menu, that reloads the your mods! It also adds a keybind to do the same but ingame (Control Shift [ANYKEY, Default: H])!",
};

class Mod extends shapez.Mod {
    init() {
        this.modInterface.registerIngameKeybinding({
            id: "mod_reloader",
            keyCode: shapez.keyToKeyCode("H"),
            translation: "Mod Reloader",
            modifiers: {
                shift: true,
                ctrl: true
            },
            handler: root => {
                this.dialogs.showInfo("Mod Reloader:", "Reloading mods!");
                setTimeout(() => {
                    window.location.reload()
                }, 400)
                return shapez.STOP_PROPAGATION;
            },
        });
        this.signals.stateEntered.add(state => {
            if (state.key === "MainMenuState") {
                const element = document.createElement("div");
                element.id = "mod_reloader";
                document.body.appendChild(element);

                const button = document.createElement("button");
                button.classList.add("styledButton");
                button.innerText = "Reload Mods!";
                button.addEventListener("click", () => {
                    this.dialogs.showInfo("Mod Reloader:", "Reloading mods!");
                    setTimeout(() => {
                        window.location.reload()
                    }, 400)
                });
                element.appendChild(button);
            }
        });

        this.modInterface.registerCss(`
                #mod_reloader {
                    position: absolute;
                    top: calc(10px * var(--ui-scale));
                    left: calc(10px * var(--ui-scale));
                    color: red;
                    z-index: 0;
                }
            `);
    }
}
