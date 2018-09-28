# rerender

## React utility component library

### Rerender is a set of pure components intent on replacing libraries such as lodash during rendering. It might be useful to think of it as recompose for render props.

#### Instead of...

```jsx harmony
import _ from 'lodash';

const component = () => (
    <div>
      {_.map(items, (item) => <span>{item.name}</span>)}
    </div>
);
```
#### Something like this...

```jsx harmony
import R from 'rerender';

const component = () => (
    <div>
      <R.Map items={items}>
        {item => <span>{item}</span>}
      </R.Map>
    </div>
);
```

### Reasoning

HOCs should not be used for every problem and neither should render props. Render props are best suited for pure transformations in the ui while HOCs are best suited for container logic. High order container components would be a more appropriate name for them.

This library is under active development and more utility components will be developed. Currently a few have been releases to exemplify the pattern.

### API

```jsx harmony
<R.Map 
  items={array}>
    {(element: any, index: number, items: array) => node}
</R.Map> 
```
```jsx harmony
<R.Filter 
  filter={(element: any, index: number, items: array) => bool} 
  items={array}>
    {array => node}
</R.Filter>
```
```jsx harmony
<R.Reduce 
  initial={any} 
  items={array} 
  reducer={(accumulator: any, currentValue: any, currentIndex: number, items: array) => accumulator: any}>
    {any => node}
</R.Reduce>
```

**Composing these components is the whole idea! More are coming!**
