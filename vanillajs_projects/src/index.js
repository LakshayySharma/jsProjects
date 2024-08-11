//target node which we want to observe for change
let thirdPartyWidget = document.getElementById("my-third-party-data");

//configuration for observer
let config = {
  childList: true,
  subtree: true,
  attributes: true,
};

//callback that will run when mutation is observed
let mutationObserverCallback = function (mutationlist) {
  console.log("# mutation list", mutationlist);

  for (let record of mutationlist) {
    console.log("# mutation record", record);
  }
};

//create instannce for observer
let observer = new MutationObserver(mutationObserverCallback);

//start observing
observer.observe(thirdPartyWidget, config);
