import assert from "node:assert";

export default function () {
  // optional must always be at the end
  function multiplyo(a: number, b: number, c?: number): number {
    if (typeof c !== "undefined") {
      return a * b * c;
    }
    return a * b;
  }

  const reso = multiplyo(1, 2, 3);
  assert.equal(reso, 6);

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
  let res = isArticleInStock({ title: "TypeScript", price: 100, vat: 0.2 });
  assert.equal(res, 0);

  res = isArticleInStock({
    title: "TypeScript",
    price: 100,
    vat: 0.2,
    stock: 10,
  });
  assert.equal(res, 10);
}
