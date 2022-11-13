// deno --allow-net run http_requests.tx https://www.google.com

if (import.meta.main) {
  const url = Deno.args[0];
  const res = await fetch(url);

  const body = new Uint8Array(await res.arrayBuffer());
  await Deno.stdout.write(body);
}
