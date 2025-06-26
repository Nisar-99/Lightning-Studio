# LWC Snippet Sheet 
 
A quick reference for snippet triggers and their content to speed up your Salesforce LWC development in Lightning Studio.

---

## HTML & XML

| Trigger | Tag             | File | Content Example                                     |
|---------|------------------|----------|-----------------------------------------------------|
| `lwc:`  | All `lightning-*`        | HTML     | `lwc:button`, `lwc:input`, `lwc:layout`, `lwc:iteration` ... |
| `slds:` | HTML Core with `SLDS` Classes             | HTML     | `slds:modal`, `slds:table`, `slds:select` ...        |
| `lwc:`  | XML Configuration Tags | XML      | `lwc:target`, `lwc:target-community`, `lwc:design` ... |
 
---

## LWC Standard (JS)

| Trigger  | Content Example                                                  |
|----------|-----------------------------------------------------------|
| `lwc:`   | find all useful functions like  `connectedCallback`, `import*`, `wire`, `etc...` |
| `lwc:import*`   | Import modules like `uiObjectInfoApi`, `navigation`, `toastEvent`, `pub-sub`, `apexClass` ... |
| `lwc:wire*`  | Wire method snippets (parametric and non-parametric)  |
| `lwc:apex*`  | Apex imperative method (parametric and non-parametric)     | 
| `lwc:api*`   | all `@api` decorators like `getter/setter`, `functions` ...|

---

## JavaScript Methods (ES6 Support)

| Trigger | Content Example                                                           |
|---------|-------------------------------------------------------------------|
| `c:`    | Console methods: `log`, `table`, `info`                          |
| `arr:`  | Array iterable functions: `forEach`, `filter`, `forLoop`, `map`  |
| `object:`| Object methods: `assign`, `hasOwnProperty`, `keys`, `values`    |
| `query:`| QuerySelector methods                                             |
| `json:` | JSON methods: `JSON.parse`, `JSON.stringify`                     |
| `evt:`  | Event methods: `dataSet`, `stopPropagation`, `preventDefault`    |
| `tcf:`  | Try-catch-finally block: `try { } catch (error) { } finally { }`  |
| `thenc:`| Promise `.then()` and `.catch()` declarations                    |
| `prom:` | Create new Promise: `return new Promise((resolve, reject) => {})`|

---

> **Note:** All snippets automatically include the final semicolon (`;`).

---

_Keep this sheet handy to quickly access and insert commonly used snippets in Lightning Studio!_

 
