### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a JavaScript library used for building fast and scalable user interfaces for websites and applications. It allows developers to create large web applications that can change data without reloading a page.


- What is Babel?

Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser. 

- What is JSX?

JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

- How is a Component created in React?

import React from 'react';

const Component = () =>{
    return (
        <></>
    )
}
export default Component;

- What are some difference between state and props?

state is managed within a component, while props are passed from a parent component to a child component.

- What does "downward data flow" refer to in React?

changes in a component do not impact components higher in the hierarchy.

- What is a controlled component?

Controlled copmonents refer to the components where the state and behaviors are controlled by Parent components

- What is an uncontrolled component?

Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves.

- What is the purpose of the `key` prop when rendering a list of components?

They key prop is a unique identifier that React uses to efficiently manage and update elements within a list. When rendering a list of elements, it is crucial to assign a unique key to each element to help React differenticate between the items and perform updates more efficiently.


- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

A key should be is stable and unique. An index would be unique but it would not be stable since they array can mutate and indcies can shift around.

- Describe useEffect.  What use cases is it used for in React components?

It allows functional components to perform side effects, such as data fetching, subscriptions, or changing the DOM, after the component has rendered.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

Unlike state variables, changes to a useRef object's current propety do not trigger re-renders. This makes useRef an excellent choice for storing values that don't impact your component's UI but need to persist between renders.

- When would you use a ref? When wouldn't you use one?

Accessing an underlying DOM element
setting up / clearing timers
useRef returns a mutable ojbect with a key of current, whose value is equal to the initial value passed into the hook.

when not to use useRef
state management
acccesing props,

- What is a custom hook in React? When would you want to write one?

Custom hooks are a mechanism to reuse stateful logic.
Custom hooks are needed when you have duplicated hooks in different components. 