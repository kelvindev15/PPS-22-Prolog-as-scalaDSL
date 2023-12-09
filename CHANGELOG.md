## [4.0.0](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/compare/3.0.0...4.0.0) (2023-12-09)


### ⚠ BREAKING CHANGES

* **2p-Kt-solver:** reduce visibility of the tuprolog package

### Features

* **dsl:** add G, I, J, K, M, O, P, Q, R, U and V variables ([2fc8a14](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/2fc8a147302580dc91020ae216386650f897dd9b))


### Documentation

* **website:** add requirements ([2ddbcb2](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/2ddbcb2105be70aff78e2feaa21d8f45c8b0efb0))
* **website:** begin writing detailed design stuff ([0169133](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/0169133a4ec46a8eb8d8e2d8f5ac9f265ca3432c))


### General maintenance

* fix logos links ([1d2c463](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/1d2c4634e2c122d532381b93e1265e66173f0ea9))
* update README ([a07d825](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/a07d825303247d01fa4f92c73cd38ee0487f3c13))
* **website:** add logos ([12fadde](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/12faddea1a0a0ccc0df3db9417f964aa4ea87e30))
* **website:** change website logos ([432caea](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/432caeaccc1c0d83b35f379c55a28d9321057c9f))


### Style improvements

* comply with scalafmt ([f006cfe](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/f006cfe183fea1de224d5aeea8565fb1edda2c07))


### Refactoring

* **2p-Kt-solver:** reduce visibility of the tuprolog package ([b179303](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/b179303361ebfa8f284db74614d829043892c9a9))
* final override method functor directly in clause instead of in rule and in fact ([4c0c285](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/4c0c285c98c7af5ff80ceb93eabb720e1eaeb46c))

## [3.0.0](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/compare/2.0.0...3.0.0) (2023-12-08)


### ⚠ BREAKING CHANGES

* **dsl:** visitors are now sigletons

### Features

* **dsl:** add variable W ([11e7e84](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/11e7e84c94d802de612949a6db2070d5134a155f))
* **solver:** add method to check if a program or a query admits at least one solution ([2adbe77](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/2adbe77c57826d9d5d9234028d0bc10621244899))
* **solver:** add method to get the instance of a solved query ([59cff1c](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/59cff1ca6820f8a9f86039cb37bb87dce730c9a0))
* **solver:** add utility extension method to check and cast the type of solutions ([fe5fe69](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/fe5fe693a152fb33622217a769b4c9ae1bd8936d))


### Bug Fixes

* **solver:** return type of utility methods ([d299034](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/d299034f4bb546a7e5d8074a5fd8950344da58a4))


### Documentation

* **solver:** document apply method ([55d5602](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/55d5602857de2e762465623f3f0b00d8708d10f9))
* **solver:** document method to check if a program or a query admits at least one solution ([32d2c15](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/32d2c15bfbaca4f9642fa3daceb0d0d97c8b2889))


### General maintenance

* remove useless print ([b38e6ba](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/b38e6baa2af12c1ace3938c7e0cb94e0d3b18edc))


### Refactoring

* **dsl:** visitors are now sigletons ([e2baeb4](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/e2baeb450a6f1a0345ca05adef710507b10328a3))
* use visitors as singletons ([65ca8eb](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/65ca8ebc21fa3a5004bd0aa967c0f5f1bcab26b2))

## [2.0.0](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/compare/1.0.3...2.0.0) (2023-12-07)


### ⚠ BREAKING CHANGES

* use package protected modifiers so to hide mutableWrappers

### Features

* **declarativeDSL:** programTheory is now an alias of dynamicTheory ([0bc416b](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/0bc416b6dd2e2218ce55dcdf061e958fbf655fd7))
* implement PrologProgram toString ([10829bb](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/10829bb9f360a5c2ea3c69bd789e81bdd9d183a5))


### Dependency updates

* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.79 ([f041fe3](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/f041fe3c7c8dc7c950f955b0c25b1ab634030bbc))


### Build and continuous integration

* install npm with force ([c717b01](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/c717b01de4a2b52fe81ff3a140425a26904230bb))
* try fixing illegal character sequence ([56755c9](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/56755c9dc78a95aa4caf9a0914f986bc0e3ace28))


### Refactoring

* optimize imports ([0221e2d](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/0221e2dd1b923bc6121130a4903e88a4c293e6fc))
* use package protected modifiers so to hide mutableWrappers ([34c8945](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/34c89456fb85932c08c09482a37a22b7e015de56))

## [1.0.3](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/compare/1.0.2...1.0.3) (2023-12-01)


### Bug Fixes

* try to avoid publishing to snapshots ([3179c85](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/3179c85963bf5c3b27f7f76294e0e89578e1fe2b))

## [1.0.2](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/compare/1.0.1...1.0.2) (2023-12-01)


### Bug Fixes

* tagging command in release step ([2ab7dfc](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/2ab7dfca9ef431123410f7e4facd1ad12d80bf29))

## [1.0.1](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/compare/1.0.0...1.0.1) (2023-12-01)


### Dependency updates

* **deps:** update dependency com.github.sbt:sbt-pgp to v2.2.1 ([59d6f19](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/59d6f1946da9122de47d0aabd2c03e3288818cdb))


### Bug Fixes

* release tags ([378cc4a](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/378cc4ac58a3a8294093e4d6bf1589186c3a11de))

## 1.0.0 (2023-11-30)


### Features

* add builtin predicats ([c5ced9b](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/c5ced9bd5b10389efded59ca05f96419bafccaa3))
* add declarative prolog dsl ([179c098](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/179c098e7f93b30223a6d14734f9aa060769801a))
* add directives ([72820fd](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/72820fd8011d7c2e408e692f619f560851df86b4))
* add list creation methods ([45244e1](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/45244e11aa1dde5f618994edd2ff912c6367238c))
* add prolog program api ([eecefc4](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/eecefc4d5091d2d5015e858b558b805692b5918c))
* add toString visitor ([067be3d](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/067be3d846adb5b49acd4de992bd1d58a5201eb4))
* **docs:** add basic api ([9a04641](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/9a046417f3fed5bd848647341b5f6ed536f2bb1e))
* implement asTerm conversion ([8350d59](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/8350d59344f76f7d1701689f6319925fcc060f7a))
* implement disjunction of goals ([cad0fba](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/cad0fbaf60d2530804bbf1c021e670ffeeb658ee))
* implement fact, rule and directive dsl methods ([c5af730](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/c5af730be1ebede7fb9e7ae5cea275faf25dfc86))
* implement prolog lists ([f937154](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/f9371547333323117066b57a4552b8f51228a9cc))
* implement prolog solution ([ce3aafb](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/ce3aafbbaad0937d55c5be6c635866be76b6c929))
* new syntax for list creation ([25a5578](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/25a55783ccb60c5862b05725e39be143ff34d874))
* redesign api ([c89ee90](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/c89ee9039a49e47886726cf4752443462d4c46be))


### Dependency updates

* **deps:** add renovate.json ([f573649](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/f573649a1ec2d8476bfcd213c8f7039b220931f1))
* **deps:** apply updates ([2bdd7cb](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/2bdd7cbcb914a45fced533327d50cd8dba89f408))
* **deps:** import updates in the ide ([de13977](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/de13977cfdaa5fdf9289ee9b2cc0a51615795d28))
* **deps:** revert dependencies current version is preventing website generation ([81990da](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/81990dad2af1073f9b7bd9e1f7135d78dd30bde6))
* **deps:** update dependency @mdx-js/react to v2 ([2e7c1f3](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/2e7c1f3a9cd279df30048976c891b0684419dcda))
* **deps:** update dependency clsx to v2 ([43a2431](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/43a24312aaa8709bb116b0dc233a7eb953f8072e))
* **deps:** update dependency com.github.sbt:sbt-jacoco to v3.4.0 ([452e4ac](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/452e4acf41f53c19e1489649bfd1f9c5be7c35da))
* **deps:** update dependency io.cucumber:cucumber-core to v6.10.4 ([1159d9a](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/1159d9a86164000ada8856bde8a9cc4a27c7562d))
* **deps:** update dependency io.cucumber:cucumber-core to v6.11.0 ([a541794](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/a541794301b033f58f437b78bbb5bee18b71cc7f))
* **deps:** update dependency io.cucumber:cucumber-core to v7 ([4204998](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/42049983d8092c1909ea4db44c9fbd7527ec8541))
* **deps:** update dependency io.cucumber:cucumber-core to v7.14.1 ([2348b2a](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/2348b2a6bd48ebf51d7d8df91ff56012993fe98c))
* **deps:** update dependency io.cucumber:cucumber-scala to v8.14.2 ([96c77b2](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/96c77b207de98dc9d78579c053ee53d3bff74940))
* **deps:** update dependency io.cucumber:cucumber-scala to v8.17.0 ([d12e7f8](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/d12e7f85372c4b198ea28681f4aae719786f7e74))
* **deps:** update dependency io.cucumber:cucumber-scala to v8.18.0 ([9209948](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/92099488ce13fd49a37b198ef8ba883b2e5b9898))
* **deps:** update dependency io.cucumber:cucumber-scala to v8.18.1 ([b94db9b](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/b94db9bb83592778b963b69820695c65901ad188))
* **deps:** update dependency io.cucumber:cucumber-scala to v8.19.0 ([ea97e27](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/ea97e27017d38045d093dc9dbf7522aa150492d4))
* **deps:** update dependency org.scalameta:sbt-scalafmt to v2.5.2 ([1468316](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/14683168b9e591af382e5d0e5d83eea75a946014))
* **deps:** update dependency org.wartremover:wartremover to v3.1.5 ([a80d67c](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/a80d67cef3a3ab7ad8eff113a6ae2c9d587a2ffb))
* **deps:** update dependency sbt/sbt to v1.9.7 ([aea29ab](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/aea29ab8ea30b587f7e391758e9a8f2bc8882d50))
* **deps:** update dependency scala to v3.3.1 ([5fb5e56](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/5fb5e56cb82b4772619c447a90e2c3000085d035))


### Bug Fixes

* **docs:** fill markdown link ([90ca6e7](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/90ca6e7ec6d6ca5d41c30a47ebb798c62707235e))
* struct conversion ([b4c39d6](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/b4c39d67bd6949a752111b6bae09088add8fe092))


### Documentation

* add some scaladoc ([4a1a906](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/4a1a9062f01f72580a099a4c3aa822a8dfdfd305))
* add some scaladoc ([7939e2c](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/7939e2c5e1a1a750a7825adbdd44a6c89e6a1b76))
* add some scaladoc ([09d4b94](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/09d4b941714e5fa2c83330c28a2055a788ec2cdf))


### Tests

* alternative syntax for lists ([d9e1714](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/d9e1714e3f22fad58945c2f7fc41216084593cf8))
* clause/2 ([ea10f17](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/ea10f17d0dfb3764559664d8d2a1fa01c9dddc4b))
* more builtins predicates ([1874044](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/1874044c95a9359809daa4ac4e79db5c8d7f48f6))
* Multiple solution from engine ([4ff3a80](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/4ff3a800887ed41bce8bcde9d2b328033dd3e6be))
* prolog goal setting ([893dee4](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/893dee42016438cadd4e5ec04912cf9cd20a0a33))
* remove fail call ([3ba7422](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/3ba74224e36df4a72b9b8cac9a6ee9d41b52b7b9))
* some prolog programs resolutions ([e0a2d86](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/e0a2d86d98772c818e2b1cfa65b94ce3e01ce9c4))
* test resolution of a compound goal ([150ec0e](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/150ec0ee43582b41907107fbd23e4e70b1e294d3))


### Build and continuous integration

* configure release ([3dfe6e0](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/3dfe6e05b30a59ca712a85f817878a1d37cbf39b))
* **deps:** update danysk/action-checkout action to v0.2.14 ([fd5e38c](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/fd5e38c5c16356d67df5e5d4497e9609c956710a))
* **deps:** update olafurpg/setup-scala action to v14 ([025b63c](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/025b63c96b7d02fd7b77ab926a34e020eceb26b8))


### General maintenance

* add LICENCE ([cefd7a3](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/cefd7a33c1e640da5030a540e04f87dc7528e2be))
* add stdlib predicates ([9fd6835](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/9fd6835ee95383a7201090ac5d5f89151d4c47a1))
* **build:** add JaCoCo plugin ([615eea2](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/615eea2c64b66688115e070896be205d2a648c92))
* **build:** add tuprolog solver dependecie ([3220d4c](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/3220d4c70ea91d71ccc4f1ac440605c91c307b83))
* **build:** fix conflict ([e812036](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/e812036931529d5a76e337107f3e53ddf66b9ab4))
* **build:** set project name ([46d51fa](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/46d51fab4135976dc816233316fda3631a52c4d1))
* **CI:** A workflow is successfull only if also the website can be generated without errors ([9b0715f](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/9b0715f6758d3f337a10764a9ee58940718d911d))
* **CI:** don't run bdd tests in CI ([f7d058e](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/f7d058e5874910eae9cd20023d08b4496c947b2f))
* **CI:** fix documentation site base url ([7f7376c](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/7f7376cdd441038ef8f4543a53acf3ad7ede68fd))
* **CI:** mv api folder into docs only if is present ([0183e80](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/0183e80af3558da95bfd4483656741bf2033971f))
* continue with analysis ([07ed091](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/07ed091640ed8d1165277968ab7c55840ee7447d))
* **docs:** fix website base u ([e88f0ec](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/e88f0ec4bfc74a295532d6397f05b49f1f565901))
* **docs:** fix website base url ([ed9d25a](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/ed9d25aed640dd28f466294e8dc842fc5c6646c9))
* **docs:** subdivide built-in operators in sub sections ([9b0f08e](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/9b0f08ec37126df7a7b2d1b1d145c138cdba7ca0))
* generate website only on master ([dac4992](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/dac499217d244dc8f182c144864d6c79573ce996))
* ide stuff ([74cb6ad](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/74cb6ad6abe6e234b4a0b99233044fa69a98f314))
* Merge branch 'master' of github.com:kelvindev15/PPS-22-Prolog-as-scalaDSL ([d9da783](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/d9da783af8b0a9d58e03953941f4874e5af4082a))
* prepare project ([43512f9](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/43512f9b1c011330ce39a29e884571e84aba9744))
* refactor tests ([67e1581](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/67e1581f7ead5c02b4042a646d0fe203191d7255))
* refactor website ([fd92c43](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/fd92c43b7a7adeb7e8af41dd0daa49822fdb57e9))
* start importing the engine ([31504ce](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/31504ceca3b3667f4edebbbd7da549fd0171d91e))


### Style improvements

* add empty line ([bf9c662](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/bf9c6622835c3a0e2e150e714be155b33e0a8af7))
* reformat code according to scalafmt ([cc3f2bf](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/cc3f2bfd1ddf7800307de0e99beb0679a4cb0f75))
* remove empty lines ([d863401](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/d86340160af6b5b528b908980446c31a50f0b013))
* remove empty lines ([c575512](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/c5755125d2389627da9465a2945bcbeb51b8f7a1))
* use scala3 indentation style ([78ba1c8](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/78ba1c8235ab3f51f2216e0a61da99d3c0ed2898))


### Refactoring

* adapt to theory refactoring ([7c1d5e6](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/7c1d5e63f4aecfcfa66e346891dbe18279569287))
* add empty theory factory method and fix package name ([8fea9da](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/8fea9da182c5c9510788e9d31b4cfe974362154a))
* better namings ([e3ca384](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/e3ca3848700be4df264e4992b8bfe5ec8e0d6745))
* create core package ([f32574e](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/f32574ef218918c98bb2beaa9dedaba225e64fd2))
* make the mutable theory extension make sense ([d574cfc](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/d574cfcbc974e234d560c4a00aba50dec2d57872))
* optimize imports ([2f05eba](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/2f05eba66f49790a76dff839c2c58349fb5cdec3))
* optimize imports ([5b4feca](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/5b4feca153c7acee5edab9d4395f9b2bff0246c6))
* optimize imports ([7c79778](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/7c79778f6c2e821011c15e35b6e42bcad2095c9a))
* optimize imports and conversions ([131802b](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/131802bc706aeaf4ebc576dbb515c3d8acec6054))
* packages ([671bf7b](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/671bf7b193fd5be4455ff90502f5520e134101b1))
* remove unused code ([3efa2f8](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/3efa2f81a728d8d2637956bb307016555a71f972))
* rename file ([26355f9](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/26355f9689ee322f1cd8d349a3fe46db5ba85ba5))
* rename prolog programs method names ([3659de7](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/3659de7ea18a5dfc94da842770a6dda638dde0da))
* reorganize packages ([bb2d3ae](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/bb2d3aee5e5b24e5ee30932bce4472e19da6e54b))
* split dsl variables and facilities in separated files ([6f5fc57](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/6f5fc571ef23355683fe2cf79525d7523817f539))
* use mixins instead of exports ([1adbd5a](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/1adbd5aaafbc657e35ea303ca374219790421505))
* use query instead of constructing an empty theory ([d8442ee](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/d8442eee727c0a257238077da63c7931f63ff28e))
* use Seq instead of Iterable ([2f534b7](https://github.com/kelvindev15/PPS-22-Prolog-as-scalaDSL/commit/2f534b7d1b38b0b8e519e379c5f33e0938b68247))
