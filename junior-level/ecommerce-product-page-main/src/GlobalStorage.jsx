import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) => {
    const [amount, setAmount] = React.useState(0)
    const [product, setProduct] = React.useState(0)

  function removeProductOnCart(){
    setProduct(0)
  }

    function productOnCart(){
      if(amount === 0) return
        setProduct(amount)
        setAmount(0)
    }

  return (
    <GlobalContext.Provider value={{amount, setAmount, productOnCart, product, removeProductOnCart }}>{children}</GlobalContext.Provider>
  )
}
