// @ts-nocheck
const METADATA = {
    website: "https://waffledevsalt.github.io",
    author: "WaffleDevs",
    name: "Mod Reloader",
    version: "1.1.1",
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
                window.location.reload()
                return shapez.STOP_PROPAGATION;
            },
        });

        this.signals.stateEntered.add(state => {
            if (state.key === "MainMenuState") {
                const element = document.createElement("div");
                element.id = "mods_reload_mainmenu";
                element.classList.add("modReloader");
                document.body.appendChild(element);

                const button = document.createElement("button");
                button.classList.add("styledButton");
                button.innerText = "Reload Mods";
                button.addEventListener("click", () => {
                    window.location.reload()
                });
                element.appendChild(button);
            }
            else if (state.key === "ModsState") {
                const element = document.createElement("div");
                element.id = "mods_reload_modmenu";
                element.classList.add("modReloader");
                document.body.appendChild(element);

                const button = document.createElement("button");
                button.classList.add("styledButton");
                button.innerText = "Reload Mods";
                button.addEventListener("click", () => {
                    window.location.reload()
                });
                element.appendChild(button);
            }
        });

        this.modInterface.registerCss(`
            .modReloader * {
                background-color: #f55;
                color: white;
                font-weight: bolder;
            }
            #mods_reload_mainmenu {
                position: absolute;
                top: calc(10px * var(--ui-scale));
                left: calc(10px * var(--ui-scale));
                z-index: 0;
            }
            #mods_reload_modmenu {
                position: absolute;
                top: calc(35px * var(--ui-scale));
                right: calc(318px * var(--ui-scale));
                z-index: 0;
            }
        `);
    }
}
