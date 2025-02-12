//Node to be observed for mutation
let targetNode = document.body;
//function to execute when mutations are observed
function callback(mutationList, observer) {
  //iterate through mutations
  for (let list of mutationList) {
    //if targeted mutation element is found then,
    if (list.type == "childList" && list.target == document.getElementsByClassName("ScReactModalBase-sc-26ijes-0 iahBMX tw-dialog-layer")[0]) {
      //create necessary elements
      mirrorSwitch = document.createElement("div");
      mirrorToggle = document.createElement("div");
      mirrorElement= document.createElement("div");
      mirrorText = document.createElement("div");
      mirrorToggleInput = document.createElement('input');

      mirrorToggle.className += "ScToggleButton-sc-iguyno-2 jyPgTJ tw-toggle__button";
      mirrorElement.className += "Layout-sc-1xcs6mc-0 jHGpDy";
      mirrorText.className += "Layout-sc-1xcs6mc-0 jgerNX";
      mirrorText.setAttribute("role", "menuitemcheckbox");

      mirrorSwitch.className += "ScToggle-sc-iguyno-0 egsRlR tw-toggle";
      
      mirrorToggleInput.className += "ScToggleInput-sc-iguyno-1 jbuPDN tw-toggle__input";
      mirrorToggleInput.setAttribute("type", "checkbox");
      mirrorToggleInput.setAttribute("data-a-target", "tw-toggle");
      mirrorText.innerHTML = "Mirrored Player"

      //place in targeted mutation element
      var settingWindow = document.querySelector("[data-a-target=player-settings-menu]");

      //assemble everything together
      settingWindow.appendChild(mirrorElement), mirrorElement.appendChild(mirrorText), mirrorElement.appendChild(mirrorSwitch), mirrorSwitch.appendChild(mirrorToggleInput), mirrorSwitch.appendChild(mirrorToggle);

      //button to mirror the player onclick
      mirrorToggleInput.addEventListener('click', function() {
        toggle(mirrorToggleInput);}
    )
    }
    
  }
}

//link observer to the function
let obsvr = new MutationObserver(callback);

//button switch to do the mirroring
function toggle(button) {
  button = document.querySelector('video').style.scale
  if (button == "-1 1") {
    button = "1";
  } else {
    button = "-1 1";
  }
  document.querySelector('video').style.scale = button;
}

//Elements to detect changes
obsvr.observe(targetNode, { childList: true ,subtree: true });