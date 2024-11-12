class AsyncData {
  public data: any;
  public subscribers: Array<any>;

  constructor(initialData) {
    this.data = initialData;
    this.subscribers = [];
  }

  // Subscribe to changes in the data
  subscribe(callback) {
    if (typeof callback !== "function") {
      throw new Error("Callback must be a function");
    }
    this.subscribers.push(callback);
  }

  // Update the data and wait for all updates to complete
  async set(key, value) {
    this.data[key] = value;

    // Call the subscribed function and wait for it to resolve
    const updates = this.subscribers.map(async (callback) => {
      await callback(key, value);
    });

    await Promise.allSettled(updates);
  }
}

const data = new AsyncData({ pizza: "Pepperoni" });

data.subscribe(async (key, value) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log(`Updated UI for ${key}: ${value}`);
});

data.subscribe(async (key, value) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Logged change for ${key}: ${value}`);
});

// function to update data and wait for all updates to complete
async function updateData() {
  await data.set("pizza", "Supreme"); // This will call the subscribed functions and wait for their promises to resolve
  console.log("All updates complete.");
}

updateData();
