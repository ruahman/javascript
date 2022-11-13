// deno run --allow-read  .\read_a_file.ts "C:\Windows\System32\Drivers\etc\hosts"
import { copy } from "https://deno.land/std@0.163.0/streams/conversion.ts";

if (import.meta.main) {
  const filenames = Deno.args;
  for (const filename of filenames) {
    const file = await Deno.open(filename);
    await copy(file, Deno.stdout);
    file.close();
  }
}
