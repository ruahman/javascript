if (import.meta.main) {
  await Deno.writeTextFile("./hello.txt", "Hello World!");
  console.log("File written to ./hello.txt");
  const text = await Deno.readTextFile("./hello.txt");
  console.log(text);
}
