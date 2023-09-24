// optional must always be at the end
function multiplyo(a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}

let reso = multiplyo(1, 2, 3);
console.log(reso);

type Article = {
  title: string;
  price: number;
  vat: number;
  stock?: number;
  description?: string;
};

function isArticleInStock(article: Article): number {
  if (article.stock) {
    return article.stock;
  }
  return 0;
}
