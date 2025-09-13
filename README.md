# jsdoc-typescript-starter

> A starter project showcasing type-safe JavaScript using TS-compatible JSDoc

## Motivation

The JS community has many misconceptions about the fitness-for-purpose of TS-compatible JSDoc, and I'd wager this stems from _not knowing how to set it up properly_.

I've heard things like:

- _"You get no intellisense/tab-completion in your editor"_
- _"It's not typesafe"_ or _"there's intellisense, but no type checking"_
- _"You can't generate type declarations"_
- _"You can't use the types in other projects"_

The above claims are **false**.

These two claims are **partially true**:

- _"X is impossible in JSDoc"_: The things that are _impossible_ in JSDoc are mainly things you'd typically do in `.d.ts` files, like ambient module declarations, declaration merging, etc. I know of no other major feature that is _impossible_ in JSDoc (correct me if I'm wrong).

  > ℹ️ **Tip**
  >
  > Note that it is trivial to drop a `.d.ts` file into your project for the few things that are impossible in JSDoc--I do this myself to declare types for packages which ship none.

- "It's too verbose": Some things are objectively more verbose (such as type assertions). Complex conditional or mapped types are nicer to write in TS than in a `@typedef`. [The introduction of `@import`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#the-jsdoc-import-tag) in TS v5.5 mitigated a significant usability headache.

## Features

Features of this starter include:

- Type safety in the IDE and in CI (check all types via `npm run lint:types`)
- Optional generation of `.d.ts` files (via `npm run build:declarations`)
- EcmaScript Modules
- All files explained in detailed comments

## Usage

This could be used as a scaffold, but I think it's probably fine as just _reference material_ for applying to your own projects. To that end:

- Look at the files in `src/` to see how things work.

If you _do_ want to use it as a scaffold, you can:

1. Clone this repo.
2. Run `npm install`.
3. Run `npm run build:declarations` to generate type declarations (see `types/` for output)
4. Run `npm run lint:types` to check types.

## Demo

See [demo](./demo) for a project that shows how to consume the generated declarations.

## Reference

- [Type Checking JavaScript Files](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html)
- [JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

## FAQ

### What Are The Use-Cases for Types in JavaScript?

In other words, _why not just use TypeScript?_

- Even if you're using another build tool, adding `tsc` to the mix often adds complexity.
- Avoids the overhead of a build step during your development cycle (especially when you have no other build tooling).
- The TS compiler generates code that does not meet your needs (rare, but happens to be _my_ use case).
- You could [Ask Rich Harris of Svelte](https://devclass.com/2023/05/11/typescript-is-not-worth-it-for-developing-libraries-says-svelte-author-as-team-switches-to-javascript-and-jsdoc/) ([archive](https://web.archive.org/web/20230520034247/https://devclass.com/2023/05/11/typescript-is-not-worth-it-for-developing-libraries-says-svelte-author-as-team-switches-to-javascript-and-jsdoc/), [original interview](https://www.youtube.com/watch?v=MJHO6FSioPI&feature=youtu.be))

### You Must Hate TypeScript

I actually _prefer_ TypeScript in my personal projects, but I have used JSDoc in many professional projects where TS was not an option. That said, there are few drawbacks to plopping _types-only_ `.ts` sources into an otherwise pure-JS project (which this repo illustrates), and I have so in each of the aforementioned professional projects (to wild success, of course).

In my experience, a correctly-configured project gets you 95% of the benefits of using TS alone, and any drawbacks are tolerable.

## License

Copyright © 2025 Christopher "[boneskull](https://github.com/boneskull)" Hiller. Licensed Zero-Clause BSD.
