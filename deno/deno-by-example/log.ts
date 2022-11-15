import * as log from "https://deno.land/std@0.163.0/log/mod.ts";

export default function demo() {
  log.info("***** log *****");
  log.debug("this is debug");
  log.warning("this is warnning");
  log.error("this is an error");
}
