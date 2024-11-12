const pubSub = {
  // event you can subscribe to and publish to
  events: {},

  /// subscribe to an event
  subscribe(event: string, callback: any) {
    // check if event exists
    if (!this.events[event]) this.events[event] = [];

    // push callback to event
    this.events[event].push(callback);
  },

  /// publish data to event
  publish(event, data) {
    // if an event is setup
    if (this.events[event])
      // loop through each callback and pass in data
      this.events[event].forEach((callback) => callback(data));
  },
};

pubSub.subscribe("update", (data: any) => console.log(data));
pubSub.publish("update", "Some update"); // Some update

// pubsub for the browser
// const pizzaEvent = new CustomEvent("pizzaDelivery", {
//   detail: {
//     name: "supreme",
//   },
// });
//
// window.addEventListener("pizzaDelivery", (e) => console.log(e.detail.name));
// window.dispatchEvent(pizzaEvent);
