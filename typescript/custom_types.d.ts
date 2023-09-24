// can only define types here
// think of it like a header file from C/C++

export type StorageItem = {
  weight: number;
};

export type ShipStorage = {
  max: number;
  items: StorageItem[];
};

export type Article = {
  title: string;
  price: number;
  var: number;
  stock: number;
  description: string;
};
