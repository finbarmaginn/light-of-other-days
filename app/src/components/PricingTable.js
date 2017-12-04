import React from 'react'

const PricingTable = () => {
  return (
    <div className="space">
      <table>
        <thead>
        <tr>
          <th colSpan="2">Books</th>
        </tr>
        <tr>
          <th>Price</th>
          <th>Shipping</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>£20</td>
          <td>£6</td>
        </tr>
        <tr>
          <td>€24</td>
          <td>€7.11</td>
        </tr>
        </tbody>
      </table>
      <table>
        <thead>
        <tr>
          <th colSpan="3">Prints</th>
        </tr>
        <tr>
          <th>Size</th>
          <th>Price</th>
          <th>Shipping</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Small</td>
          <td>£20</td>
          <td>£6</td>
        </tr>
        <tr>
          <td>Large</td>
          <td>€24</td>
          <td>€7.11</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PricingTable