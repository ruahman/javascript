type TecEvent = {
  name: string;
  speaker: string;
  time: number;
};

function printEvent(tecEvent: TecEvent | null) {
  // you have to check if null or not
  if (tecEvent === null) {
    console.log("No event");
  } else {
    console.log(tecEvent.name);
  }

  // tecEvent.name; // error

  console.log(tecEvent?.name);
  console.log(tecEvent?.speaker);
  console.log(tecEvent?.time);
}
