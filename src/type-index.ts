/**
 * This file is intended to contain public type definitions for the package.
 *
 * It should not contain any runtime code; no such code will be compiled to
 * JavaScript.
 *
 * Its use is optional; you could instead use `@typedef` in any other `.js`
 * source file, but if you an stomach it, I'd recommend using `.ts` files for
 * type definitions.
 *
 * @remarks
 * This file's extension is `.ts` (and not `.d.ts`) so that it is type-checked
 * by default.
 *
 * @module
 * @see {@linkcode file://./type-index-alt.js type-index-alt.js} for a pure-JS
 * alternative
 */

export * from './index.js';

/**
 * Example interface; intended to be part of the public API.
 */
export interface Foo<T extends string = string> {
  /**
   * A string property
   */
  bar: T;
}

/**
 * Example of a conditional type; intended to be part of the public API.
 */
export type InferFoo<T extends Foo> = T extends Foo<infer U> ? Foo<U> : never;
