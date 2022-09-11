# Cypress course

* instalall cypress: **npm i cypress**
* execute cypress GUI: **npx cypress open**
* cypress.json configuration:

```json
{
    "baseUrl":"http://localhost:3000",
    "ignoreTestFiles":"**/examples/*",
    "viewportHeight":1080,
    "viewportWidth":1920
}
```

* Add at the beggining; 
```js
 /// <reference types="cypress" />
```