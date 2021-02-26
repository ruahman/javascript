import { assertEquals, assertNotEquals } from "https://deno.land/std/testing/asserts.ts"

Deno.test({
  name: "example test",
  fn(){
    assertEquals("deno", "deno");
    assertNotEquals({
      runtime: "node"
    },
    {
      runtime: "deno"
    });
  }
})

Deno.test("short example test", () => {
  console.log("hello shorty")
});