import App from "./App"

import React from "react"
import ReactDOM from "react-dom"
import './index.css';

import {
  // activate,
  // list,
} from "./helpers"

import {
  // Checkbox,
  // Layout,
  // Text,
} from "./elements"

import {
  // Add,
  // Remove,
} from "./actions"


  /*
// import { types } from "mobx-state-tree"

const Post = types.model({
  time: () => DateTime.local().toUTC().toSQL(),
  content: "。",
})

Post.views(self =>
  render: () => (
    <Layout leaf={self}>
      <Checkbox item={self} leaf="done" checked={self.done} />
      <Text item={self} leaf="name" value={self.name} />
      <Remove item={self}>X</Remove>
    </Layout>
  ))

const Software = types.model({
  posts: types.array(Post),
})

Software.views(self => ({
  render: () => (
    <Layout leaf={self}>
      <Add to={self.posts}>...</Add>
      {list(self.posts)}
    </Layout>
  )
}))

decorate(OrderLine, {
    price: observable,
    amount: observable,
    total: computed,
})
*/

ReactDOM.render(<App />, document.getElementById('root'));
// activate(Software, window, "root")
