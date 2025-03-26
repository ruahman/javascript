export default function optional_parameters(expect) {
    // optional must always be at the end
    function multiplyo(a, b, c) {
        if (typeof c !== "undefined") {
            return a * b * c;
        }
        return a * b;
    }
    const reso = multiplyo(1, 2, 3);
    expect(reso).toBe(6);
    function isArticleInStock(article) {
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
//# sourceMappingURL=optionals.js.map