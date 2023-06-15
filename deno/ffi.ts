if (import.meta.main) {
  //--- Rust
  const rust_lib = Deno.dlopen(
    "C://Users//dego_//source//repos//rust//rust_deno_ffi//target//debug//rust_deno_ffi.dll",
    {
      add: {
        parameters: ["f64", "f64"],
        result: "f64",
      },
      print_string: {
        parameters: ["buffer"],
        result: "void",
      },
    },
  );

  const result = rust_lib.symbols.add(3.3, 4.4);
  console.log(result);

  const { add } = rust_lib.symbols;
  const res = add(1.1, 2.2);
  console.log(res);

  const test_txt = "Hello FFI\0";
  const string_ptr = new TextEncoder().encode(test_txt);
  rust_lib.symbols.print_string(string_ptr);

  //--- C
  const c_lib = Deno.dlopen(
    "C://Users//dego_//source//repos//c_cpp//deno_ffi//test.dll",
    {
      helloworld: {
        parameters: [],
        result: "void",
      },
      sleep: {
        parameters: ["u32"],
        result: "void",
      },
      add: {
        parameters: ["i32", "i32"],
        result: "i32",
      },
      sendMessage: {
        parameters: ["buffer"],
        result: "void",
      },
    },
  );

  c_lib.symbols.helloworld();
  c_lib.symbols.sleep(2000);
  const sum = c_lib.symbols.add(2, 3);
  console.log("\n", sum);

  const test_c_txt = "Hello Message for C\0";
  const string_c_ptr = new TextEncoder().encode(test_c_txt);
  c_lib.symbols.sendMessage(string_c_ptr);

  //--- go
  const go_lib = Deno.dlopen(
    "C://Users//dego_//source//repos//go//deno_ffi//deno.dll",
    {
      addOne: {
        parameters: ["f64"],
        result: "f64",
      },
    },
  );
  const go_res = go_lib.symbols.addOne(11.1);
  console.log(go_res);

  rust_lib.close();
  c_lib.close();
  go_lib.close();
}
