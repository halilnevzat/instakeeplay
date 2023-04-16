function disableVisibilityChangeEventListener() {
    document.addEventListener("visibilitychange", event => event.stopPropagation(), { capture: true });
    console.log("prevent tab change blocked");
  }
  disableVisibilityChangeEventListener();

