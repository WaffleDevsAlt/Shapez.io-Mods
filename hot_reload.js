// @ts-nocheck
const METADATA = {
    website: "https://waffledevsalt.github.io",
    author: "WaffleDevs",
    name: "Hot Reload",
    version: "1.0.0",
    id: "hot-reload",
    description: "Adds a button to the main menu, that hot reloads the game. It also adds a keybind to do the same but ingame (Control Shift [ANYKEY, Default: H])!",
};

class Mod extends shapez.Mod {
    init() {
        this.modInterface.registerIngameKeybinding({
            id: "hot_reload",
            keyCode: shapez.keyToKeyCode("H"),
            translation: "Hot Reload",
            modifiers: {
                shift: true,
                ctrl: true
            },
            handler: root => {
                this.dialogs.showInfo("Hot Reload:", "Reloading!");
                setTimeout(() => {
                    window.location.reload()
                }, 400)
                return shapez.STOP_PROPAGATION;
            },
        });
        this.signals.stateEntered.add(state => {
            if (state.key === "MainMenuState") {
                const element = document.createElement("div");
                element.id = "hot_reload";
                document.body.appendChild(element);

                const button = document.createElement("button");
                button.classList.add("styledButton");
                button.innerText = "Reload Mods!";
                button.addEventListener("click", () => {
                    this.dialogs.showInfo("Hot Reload:", "Reloading!");
                    setTimeout(() => {
                        window.location.reload()
                    }, 400)
                });
                element.appendChild(button);
            }
        });

        this.modInterface.registerCss(`
                #hot_reload {
                    position: absolute;
                    top: calc(10px * var(--ui-scale));
                    left: calc(10px * var(--ui-scale));
                    color: red;
                    z-index: 0;
                }
            `);
    }
}
