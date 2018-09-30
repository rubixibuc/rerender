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
  reducer={(accumulator: any,
            currentValue: any,
            currentIndex: number,
            items: array) => accumulator: any}>
    {any => node}
</R.Reduce>
```

### Logic

##### Branch

*Can use any combination and any number of True, Both, or False child elements*

```jsx harmony
<R.Branch 
  condition={bool}>
    <R.True>
      {node}
    </R.True>
    <R.False>
      {node}
    </R.False>
    <R.Both>
      {node}
    </R.Both>
</R.Branch>
```

##### Match

*Expressions can be matched multiple times*

```jsx harmony
<R.Match 
  expression={number | string | object | array}>
  <R.Test 
    value={number | string | object | array}>
      {node}
  </R.Test>
</R.Match>
```

**Composing these components is the whole idea! More are coming!**
