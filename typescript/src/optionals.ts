export default function optional_parameters(expect: any) {
  // optional must always be at the end
  function multiplyo(a: number, b: number, c?: number): number {
    if (typeof c !== "undefined") {
      return a * b * c;
    }
    return a * b;
  }

  const reso = multiplyo(1, 2, 3);
  expect(reso).toBe(6);

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
  expect(res).toBe(0);
  res = isArticleInStock({
    title: "TypeScript",
    price: 100,
    vat: 0.2,
    stock: 10,
  });
  expect(res).toBe(10);
}
