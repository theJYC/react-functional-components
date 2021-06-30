import React from "react"

import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

import linksData from "./links"



const App = () => {

  return (
    <>
      <Header />
      <List links={linksData}/>
      <Footer />
    </>
  )
}

export default App
