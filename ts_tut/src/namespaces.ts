import assert from "node:assert";

// Namespaces are a TypeScript-specific way to organize code.
// They provide a way to group related code and avoid global naming collisions.
// Note: In modern TypeScript, ES modules (import/export) are generally preferred 
// over namespaces for code organization.

export default function () {
  // 1. Basic Namespace
  namespace Validation {
    export interface StringValidator {
      isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
      isAcceptable(s: string) {
        return lettersRegexp.test(s);
      }
    }

    export class ZipCodeValidator implements StringValidator {
      isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
      }
    }
  }

  // Members must be exported to be accessible outside the namespace
  const validators: { [s: string]: Validation.StringValidator } = {};
  validators["ZIP code"] = new Validation.ZipCodeValidator();
  validators["Letters only"] = new Validation.LettersOnlyValidator();

  assert.strictEqual(validators["ZIP code"].isAcceptable("12345"), true);
  assert.strictEqual(validators["ZIP code"].isAcceptable("1234"), false);
  assert.strictEqual(validators["Letters only"].isAcceptable("ABC"), true);
  assert.strictEqual(validators["Letters only"].isAcceptable("ABC1"), false);

  // 2. Nested Namespaces
  namespace Shapes {
    export namespace Polygons {
      export class Triangle {}
      export class Square {}
    }
  }

  const square = new Shapes.Polygons.Square();
  assert.ok(square instanceof Shapes.Polygons.Square);

  // 3. Namespace Aliases
  // Note: 'import alias = Namespace.Member' is the official syntax but
  // may have issues in some environments (like Node.js experimental transform).
  // A standard 'const' can often serve the same purpose for values.
  const Polygons = Shapes.Polygons;
  const triangle = new Polygons.Triangle();
  assert.ok(triangle instanceof Polygons.Triangle);

  // 4. Namespaces can be merged across multiple blocks (or even files)
  namespace Mergable {
    export const a = 1;
  }
  namespace Mergable {
    export const b = 2;
  }
  assert.strictEqual(Mergable.a, 1);
  assert.strictEqual(Mergable.b, 2);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("To see the tests, run: just test namespaces");
}
