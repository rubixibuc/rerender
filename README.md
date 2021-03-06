[![Build Status](https://travis-ci.org/rubixibuc/rerender.svg?branch=master)](https://travis-ci.org/rubixibuc/rerender) [![Coverage Status](https://coveralls.io/repos/github/rubixibuc/rerender/badge.svg?branch=master)](https://coveralls.io/github/rubixibuc/rerender?branch=master)

# Rerender
 
## React utility component library

> Rerender is a set of pure components intent on replacing libraries such as lodash during rendering. It might be useful to think of it as recompose for render props.

##### Installation

```text
npm install --save @rubixibuc/rerender
```

##### Instead of...

```jsx harmony
import React from 'react'
import _ from 'lodash';

const component = ({ items }) => (
  <React.Fragment>
    {_.map(items, (item) => <span>{item.name}</span>)}
  </React.Fragment>
);
```
##### Something like this...

```jsx harmony
import React from 'react';
import * as R from 'rerender';

const component = ({ items }) => (
  <R.Map items={items}>
    {item => <span>{item}</span>}
  </R.Map>
);
```

##### Reasoning

HOCs should not be used for every problem and neither should render props. Render props are best suited for pure transformations in the ui while HOCs are best suited for container logic. High order container components would be a more appropriate name for them.

This library is under active development and more utility components will be developed. Currently a few have been released to exemplify the pattern.

## API

### Arrays

##### Map

```jsx harmony
<R.Map 
  items={array}>
    {(element: any, index: number, items: array) => node}
</R.Map> 
```
##### Filter

```jsx harmony
<R.Filter 
  filter={(element: any, index: number, items: array) => bool} 
  items={array}>
    {array => node}
</R.Filter>
```

##### Reduce

```jsx harmony
<R.Reduce 
  initial={any = {}} 
  items={array} 
  reducer={(accumulator: any, currentValue: any, currentIndex: number, items: array) => accumulator: any}>
    {(accumulator: any) => node}
</R.Reduce>
```

##### Find

```jsx harmony
<R.Find
  items={array}
  predicate={func}>
  {(found: any) => node}
</R.Find>
```

### Logic

##### Branch

* If condition resolves to true, all child *True* nodes will be rendered. Otherwise, all child *False* nodes will be rendered.

```jsx harmony
<R.Branch 
  condition={bool | () => bool}>
  <R.True>
    {node}
  </R.True>
  <R.False>
    {node}
  </R.False>
</R.Branch>
```

##### Match

* Matcher is used to compare *expression* and *Test* children's *value* properties. All children for which it returns true will be rendered. 

```jsx harmony
<R.Match 
  expression={any | () => any}
  matcher={(expression, value) => bool = (expression, value) => expresion === value}>
  <R.Test 
    value={any | () => any}>
      {node}
  </R.Test>
</R.Match>
```

**Nesting these components is the whole idea! More are coming!**
