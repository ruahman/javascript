import file from "./version.json" assert { type: "json" };

if (import.meta.main) {
  console.log(file.version);

  // dynamic import
  const module = await import("./version.json", {
    assert: { type: "json" },
  });
  console.log(module.default.version);
}
