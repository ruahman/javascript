import * as log from "https://deno.land/std/log/mod.ts";
import * as _ from "https://deno.land/x/lodash@4.17.15-es/lodash.js";

// custom configuration with 2 loggers (the default and `tasks` loggers).
await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),

    file: new log.handlers.FileHandler("WARNING", {
      filename: "./log.txt",
      // you can change format of output message using any keys in `LogRecord`.
      formatter: "{levelName} {msg}",
    }),
  },

  loggers: {
    // configure default logger available via short-hand methods above.
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },

    tasks: {
      level: "ERROR",
      handlers: ["console"],
    },
  },
});

interface Launch {
  flightNumber: number;
  mission: string;
  rocket: string;
  customers: Array<string>;
}

const launches = new Map<number, Launch>();

export async function downloadLaunchData(){
  log.info("Downloading launch data...");

  const response = await fetch("https://api.spacexdata.com/v3/launches", {
    method: "GET"
  });

  if(!response.ok){
    log.warning("Problem downloading launch data")
    throw Error("this is an error")
  }

  const launchData = await response.json();
  
  for(const launch of launchData){

    const payloads = launch["rocket"]["second_stage"]["payloads"]
    const customers = _.flatMap(payloads, (payload: any) => {
      return payload["customers"];
    });
    
    const flightData = {
      flightNumber: launch["flight_number"],
      mission: launch["mission_name"],
      rocket: launch["rocket"]["rocket_name"],
      customers: customers
    }

    launches.set(flightData.flightNumber, flightData);
    
    log.info(JSON.stringify(flightData));
  }
  // console.log(launchData);
}




const response = await fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify({
    name: "Elon Musk",
    job: "billionaire"
  })
});

if(import.meta.main){
  // log.debug("this is debug");
  // log.info("this is info");
  // log.warning("this is a warnging");
  // log.error("this is an error");
  // log.critical("all your base now belong to us");
  // const body = await response.json();

  // console.log(body);
  await downloadLaunchData();
}