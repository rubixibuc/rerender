# Rerender
 
## React utility component library

> Rerender is a set of pure components intent on replacing libraries such as lodash during rendering. It might be useful to think of it as recompose for render props.

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
    <React.Fragment>
      <R.Map items={items}>
          {item => <span>{item}</span>}
      </R.Map>
    </React.Fragment>
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

* If first is true will only render first Path with truthy condition
* If condition prop is not set will render regardless. Equivalent to else block in if statement

```jsx harmony
<R.Branch 
  first={bool = true}>
  <Path
    condition={bool | (any => bool) | undefined}>
    {node}
  </Path> 
</R.Branch>
```

##### Match

* If first is true will only render first Test with value matching expression

```jsx harmony
<R.Match 
  expression={bool | number | string | object | array}
  first={bool = true}
  matcher={(expression, value) => bool = (expression, value) => expresion === value}>
  <R.Test 
    value={bool | number | string | object | array}>
      {node}
  </R.Test>
</R.Match>
```

**Composing these components is the whole idea! More are coming!**
