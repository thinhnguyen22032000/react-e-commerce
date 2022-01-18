import React, { useState } from "react";

const ProductContext = React.createContext()



const ProductProvider = ({children}) => {
    const productAPI = [
        {
            _id: 1,
            name: 'Banh kem vi dau',
            price: '200.000',
            img:'https://media.istockphoto.com/photos/strawberry-bakery-picture-id1291115137?b=1&k=20&m=1291115137&s=170667a&w=0&h=sZxeDoSsVEg-bg-sb_aXkDHEsCzwcFZOyYwMNVQxx5Y=',
        },
        {
            _id: 4,
            name: 'Banh kem vi socola',
            price: '200.000',
            img:'https://cdn.pixabay.com/photo/2020/07/21/08/52/cake-5425645__340.jpg',
        },
        {
            _id: 2,
            name: 'Banh kem vi thom',
            price: '200.000',
            img:'https://media.istockphoto.com/photos/strawberry-bakery-picture-id1291115137?b=1&k=20&m=1291115137&s=170667a&w=0&h=sZxeDoSsVEg-bg-sb_aXkDHEsCzwcFZOyYwMNVQxx5Y=',
        },
        {
            _id: 3,
            name: 'Banh kem vi thom',
            price: '200.000',
            img:'https://media.istockphoto.com/photos/strawberry-bakery-picture-id1291115137?b=1&k=20&m=1291115137&s=170667a&w=0&h=sZxeDoSsVEg-bg-sb_aXkDHEsCzwcFZOyYwMNVQxx5Y=',
        },
        {
            _id: 5,
            name: 'Banh kem vi thom',
            price: '200.000',
            img:'https://media.istockphoto.com/photos/strawberry-bakery-picture-id1291115137?b=1&k=20&m=1291115137&s=170667a&w=0&h=sZxeDoSsVEg-bg-sb_aXkDHEsCzwcFZOyYwMNVQxx5Y=',
        },
        {
            _id: 6,
            name: 'Banh kem vi thom',
            price: '200.000',
            img:'https://media.istockphoto.com/photos/strawberry-bakery-picture-id1291115137?b=1&k=20&m=1291115137&s=170667a&w=0&h=sZxeDoSsVEg-bg-sb_aXkDHEsCzwcFZOyYwMNVQxx5Y=',
        },
        {
            _id: 8,
            name: 'Banh kem vi thom',
            price: '200.000',
            img:'https://media.istockphoto.com/photos/strawberry-bakery-picture-id1291115137?b=1&k=20&m=1291115137&s=170667a&w=0&h=sZxeDoSsVEg-bg-sb_aXkDHEsCzwcFZOyYwMNVQxx5Y=',
        },
        {
            _id: 7,
            name: 'Banh kem vi thom',
            price: '200.000',
            img:'https://media.istockphoto.com/photos/strawberry-bakery-picture-id1291115137?b=1&k=20&m=1291115137&s=170667a&w=0&h=sZxeDoSsVEg-bg-sb_aXkDHEsCzwcFZOyYwMNVQxx5Y=',
        },
        {
            _id: 9,
            name: 'Banh kem vi thom',
            price: '200.000',
            img:'https://media.istockphoto.com/photos/strawberry-bakery-picture-id1291115137?b=1&k=20&m=1291115137&s=170667a&w=0&h=sZxeDoSsVEg-bg-sb_aXkDHEsCzwcFZOyYwMNVQxx5Y=',
        },
       
    ]
    
    const [ cardData, setCardData ] = useState([])
    
    const activeCard = {
        cardData,
        setCardData,
    }
    
    const value = {
        products: productAPI,
        cardData: [],
        activeCard,
    }
   return (
       <ProductContext.Provider value={value}>
          {children}
       </ProductContext.Provider>
   )
}


export { ProductProvider, ProductContext }