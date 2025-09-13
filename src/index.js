/**
 * This is the main entry point for the `jsdoc-typescript-starter` package.
 *
 * @module jsdoc-typescript-starter
 */

/**
 * @import {Foo} from './type-index.js';
 */

/** @type {Foo} */
export const foo = {
  bar: 'baz',
};

/**
 * Example of a type assertion to `Foo` via `unknown`.
 */
export const notARealFoo = /** @type {Foo} */ (
  /** @type {unknown} */ ({
    baz: 'quux',
  })
);

// @ts-expect-error missing property `bar`
export const alsoNotARealFoo = /** @type {Foo} */ ({
  baz: 'quux',
});

/**
 * Example of a frozen `const` object that satisfies `Foo`.
 *
 * @satisfies {Foo}
 */
export const frozenFoo = Object.freeze(
  /** @type {const} */ ({
    bar: 'quux',
  }),
);

/**
 * Example of a class implementing {@link Foo}
 *
 * @implements {Foo}
 */
class FooHoo {
  bar = 'hoo';
}

/**
 * Example of function overloading.
 *
 * Returns {@link foo} if `name === 'foo'`.
 * @overload
 * @param {'foo'} name
 * @returns {Foo<'baz'>}
 */

/**
 * Returns a new `Foo` with `bar` set to `name`.
 *
 * @template {string} [T=string]
 * @overload
 * @param {T} name
 * @returns {Foo<T>}
 */

/**
 * @param {string} name
 */
export function getFoo(name) {
  if (name === 'foo') {
    return foo;
  }
  return {
    bar: name,
  };
}

/**
 * @satsifies {Foo}
 */
export const fooHoo = new FooHoo();
