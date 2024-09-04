# showcase_provide_service_to_dynamic_module

Goal is to provide a `UserService` to a dynamic `AuthModule` in this project. The `AuthModule` should know nothing about the Implementation of the `UserService` and therefore abstracts the `UserService` by using an `UserService` interface.

For the Creation of the Dynamic Module I use the `ConfigurableModuleBuilder`.

Clone

```
git clone https://github.com/TMInnovations/showcase_provide_service_to_dynamic_module.git
```

Install

```
npm i
```

Run

```
npm start
```

Find the following error in the console:

```
**/21_dynamic_modules/node_modules/@nestjs/core/injector/injector.js:254
            throw new unknown_dependencies_exception_1.UnknownDependenciesException(wrapper.name, dependencyContext, moduleRef, { id: wrapper.id });
                  ^

UnknownDependenciesException [Error]: Nest can't resolve dependencies of the AuthenticationMiddleware (?). Please make sure that the argument "AUTH_MODULE_MODULE_OPTIONS" at index [0] is available in the AppModule context.

Potential solutions:
- Is AppModule a valid NestJS module?
- If "AUTH_MODULE_MODULE_OPTIONS" is a provider, is it part of the current AppModule?
- If "AUTH_MODULE_MODULE_OPTIONS" is exported from a separate @Module, is that module imported within AppModule?
  @Module({
    imports: [ /* the Module containing "AUTH_MODULE_MODULE_OPTIONS" */ ]
  })

    at Injector.lookupComponentInParentModules (**/21_dynamic_modules/node_modules/@nestjs/core/injector/injector.js:254:19)
    at async Injector.resolveComponentInstance (**/21_dynamic_modules/node_modules/@nestjs/core/injector/injector.js:207:33)
    at async resolveParam (**/21_dynamic_modules/node_modules/@nestjs/core/injector/injector.js:128:38)
    at async Promise.all (index 0)
    at async Injector.resolveConstructorParams (**/21_dynamic_modules/node_modules/@nestjs/core/injector/injector.js:143:27)
    at async Injector.loadInstance (**/21_dynamic_modules/node_modules/@nestjs/core/injector/injector.js:70:13)
    at async Injector.loadMiddleware (**/21_dynamic_modules/node_modules/@nestjs/core/injector/injector.js:84:9)
    at async MiddlewareResolver.resolveMiddlewareInstance (**/21_dynamic_modules/node_modules/@nestjs/core/middleware/resolver.js:15:9)
    at async Promise.all (index 0)
    at async MiddlewareResolver.resolveInstances (**/21_dynamic_modules/node_modules/@nestjs/core/middleware/resolver.js:12:9) {
  type: 'AuthenticationMiddleware',
  context: {
    index: 0,
    dependencies: [ 'AUTH_MODULE_MODULE_OPTIONS' ],
    name: 'AUTH_MODULE_MODULE_OPTIONS'
  },
  metadata: { id: '5ff49f49c7e2d8220bef7' },
  moduleRef: { id: '67ddc5ccebfeb9d985dfc' }
}
```
