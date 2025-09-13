/**
 * If you are a purist, you don't want any `.ts` files in your project at all, this is for you. _I got you, family._
 *
 * This is an alternative to {@linkcode file://./type-index.ts type-index.ts} that is pure JavaScript. It is functionally equivalent.
 *
 * To use this for generated declarations, replace `exports.types` in {@linkcode  file://./package.json` package.json} with `./types/type-index-alt.d.ts`.
 *
 * @module
 * @see {@linkcode file://./type-index.ts type-index.ts} for a TypeScript-based alternative
 */

export * from './index.js';

/**
 * Example interface; intended to be part of the public API.
 *
 * @template {string} [T=string]
 * @typedef Foo
 * @property {string} bar A string property
 */

/**
 * Example of a conditional type; intended to be part of the public API.
 *
 * @template {Foo} T
 * @typedef {T extends Foo<infer U> ? Foo<U> : never} InferFoo
 */
