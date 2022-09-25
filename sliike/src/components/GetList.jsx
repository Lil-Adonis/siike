import React, { useEffect, useState } from 'react'
import axios from 'axios'

// i used a function component
const GetList = () => {
  const [products, setProducts] = useState(); //state for storing products from api

  useEffect(() => { //useeffect is the function component equivalent of componentdidmount
    axios
      .get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=8')
      .then(response => {
        console.log(response.data.data.products)
        setProducts(response.data.data.products) //the actual products array is nested deeply inside of the request
      })
  }, []);

  return (
    <div>
      {
        products // check if products have been fetched from database
          ?
          //responsive grid
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
              products?.map( //loop through each product
                product => (
                  <div className="space-y-2" key={product._id}>
                    {/* there are multiple urls, i picked the first one */}
                    <img src={product.imageURLs[0]} alt="" />
                    <h2>
                      {product.fulhausProductName}
                    </h2>
                    <span>{product.retailPrice} {product.currency}</span>
                  </div>
                )
              )
            }
          </div>
          :
          <>loading</> //check the console to see the full properties of each product
      }
    </div>
  )
}

// class GetList extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       products: []
//     }
//   }
//   componentDidMount() {
//     axios.get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=8')
//       .then(response => {
//         console.log(response)
//         this.setState({ post: response.data })
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }
//   render() {
//     const { products } = this.state
//     return (
//       <div>
//         GetList
//         {
//           products?.map(post => <div key={post.id}>{post.title}</div>)
//         }
//       </div>
//     )
//   }
// }

export default GetList