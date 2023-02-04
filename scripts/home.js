let productsModified
fetch("http://localhost:3000/products")
  .then(function (res) {
    return res.json()
  })
  .then(function (res) {
    console.log("I am the data stored in the data base", res)
    productsModified = res.map(function (product) {
      product.priceModified = product.price.toFixed(2)
      return product
    })
    renderProductCards(productsModified)
  })
  .catch(function (err) {
    console.log(
      "I am executed because there is an error while making a request"
    )
  })
  .finally(function () {
    console.log("I am executd even if request is success or not")
  })
