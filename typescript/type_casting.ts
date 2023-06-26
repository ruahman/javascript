// if the type is unknown then you can type cast it
let xt: unknown = "777";
let yt = xt as number;
let zt = <number>xt;
