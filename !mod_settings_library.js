// @ts-nocheck
const METADATA = {
    website: "https://github.com/WaffleDevsAlt/Shapez.io-Mods",
    author: "WaffleDevs",
    name: "Mod Settings Library",
    version: "1.0.0",
    id: "mod_settings_library",
    description: "This mod adds the ablity for mod developers to add their mod's settings to the main menu.",
    minimumGameVersion: ">=1.5.0",
};

class Mod extends shapez.Mod {
    init() {
        // Add fancy sign to main menu
        this.signals.stateEntered.add(state => {
            if (state.key === "MainMenuState") {
                const element = document.createElement("div");
                element.id = "mod_settings_div";
                document.body.appendChild(element);
            }
        });

        this.modInterface.registerCss(`
                #mod_settings_div {
                    background-color: #fff2;
                    position: absolute;
                    bottom: calc(30px * var(--ui-scale));
                    right: calc(10px * var(--ui-scale));
                    color: red;
                    z-index: 0;
                    height: $scaled(300px)
                    width: $scaled(100px)
                }
                .modSettingButton {
                    margin: 4px
                }
            `);
    }
    createSettingBarrier(modName, css) {
        const settingBarrier = document.createElement("div");
        settingBarrier.innerText = modName+':'
        settingBarrier.style = css

        document.getElementById('mod_settings_div').appendChild(settingBarrier);
    }
    createSettingButton(mod, selectedId, amountOfOptions, buttonCss, settingId, settingName, settingValues, settingVisuals) {
        if(mod== undefined || amountOfOptions == undefined || buttonCss == undefined || settingId == undefined || settingName == undefined || settingValues == undefined || settingVisuals == undefined) return false;
        const settingButton = document.createElement("button");
        settingVisuals = settingVisuals || settingValues;
        settingButton.classList.add("styledButton");
        settingButton.classList.add("modSettingButton");
        settingButton.style = buttonCss
        settingButton.innerText = settingName + ": \n"+settingVisuals[selectedId];
        settingButton.addEventListener("click", () => {
            if(selectedId >= amountOfOptions-1) selectedId = 0;
            else selectedId ++;
            settingButton.innerText = settingName + ": \n" + settingVisuals[selectedId];
            mod.settings[settingId] = selectedId
            console.log(selectedId)
            mod.saveSettings()
        });
        document.getElementById('mod_settings_div').appendChild(settingButton);
    }
}