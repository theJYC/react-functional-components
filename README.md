# Modern-React

React is constantly evolving. 

In order to cement my growing knowledge of the React library, and keep up-to-date on latest trends and best practices, I created `Modern-React` as a reference material for the future. 

At the time of creation, the data for `Modern-React` is initialised as a `links.js` file composed of 7 objects in the `linksData` array:

```
const linksData = [
    {
        id : "1",
        title : "Context API",
        url : "https://reactjs.org/docs/context.html"
    },
    {
        id : "2",
        title : "Error Boundaries",
        url : "https://reactjs.org/docs/error-boundaries"
    },
    {
     ...
    }
]
```

If, in the future, there is a desire for a new reference material to be added to this list, the user will have to simply add the material in the above form (as an object), and React will render the new material onto the list:

```
const linksData = [
    {
        id : "1",
        title : "Context API",
        url : "https://reactjs.org/docs/context.html"
    },
    {
        id : "2",
        title : "Error Boundaries",
        url : "https://reactjs.org/docs/error-boundaries"
    },
    {
        id: "n",
        title : "An Informative Topic",
        url : "https://foobar.com"
    }
]
```



