import React from 'react';

const Catalog = (props) => {
  return(
    <table>
      <tbody>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>SKU</th>
      </tr>
        {props.products.map(product =><tr> <td>(product.name)</td><td>(product.price)</td><td>(product.sku)</td><td>(product.description)</td></tr>)}
      </tbody>
    </table>
  )
}

export default Catalog;