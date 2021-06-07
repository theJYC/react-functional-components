import React from "react"

import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

import links from "./links.json"



const App = () => {

  console.log(links)
  return (
    <>
      <Header />
      <List links={links}/>
      <Footer />
    </>
  )
}

export default App
