// read file
const decoder = new TextDecoder('utf-8');
const data = await Deno.readFile('readme.txt');
console.log('data: ', decoder.decode(data));

// read text file
const textData = await Deno.readTextFile('readme.txt');
console.log(`textData: ${textData}`);

// write file
const encoder = new TextEncoder();
const text = 'Hello again from diegox';
await Deno.writeFile('readme.txt', encoder.encode(text));

// fetch
const res = await fetch('https://swapi.dev/api/films/1');
const dataJSON = await res.json();
console.log('dataJSON: ', dataJSON);

// std
import { v1 } from 'https://deno.land/std@0.192.0/uuid/mod.ts';
const uuid = v1.generate();
console.log(`uuid: ${uuid}`);

import { exists } from 'https://deno.land/std@0.192.0/fs/exists.ts';
const deno_lock = await exists('./deno.lock');
console.log(deno_lock);

// import { serve } from 'https://deno.land/std@0.192.0/http/server.ts';
// serve((_req) => new Response('Hello, world on port 3000'), { port: 3000 });

// third parties
import { camelCase } from 'https://deno.land/x/case@2.1.1/mod.ts';
const cc = camelCase('test string');
console.log(cc);
