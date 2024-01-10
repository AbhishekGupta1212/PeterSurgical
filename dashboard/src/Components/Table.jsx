import React from 'react'


const Table = () => {
  return (
    <div><table>
    <thead>
      <tr>
        <th>MONTH</th>
        <th>EMISSION(IN CO2E)</th>
        <th>REVENUE/EMISSION RATIO</th>
        <th>YOY R/E CHANGE</th>
      </tr>
    </thead>
    <tbody>
      
        <tr >
          <td>Jan</td>
          <td>1790</td>
          <td>137.3</td>
          <td className='red'>25%↑</td>
        </tr>
        <tr >
                   <td>Feb</td>
                   <td>2205</td>
          <td>98.8</td>
          <td className='green'>25%↓</td>
        </tr>
        <tr >
          
          <td>Mar</td>
          <td>2345</td>
          <td>122.6</td>
          <td className='green'>24%↓</td>
        </tr>
        <tr >
          
          <td>Apr</td>
          <td>1503</td>
          <td>130.0</td>
          <td className='green'>28%↓</td>
        </tr>
        <tr >
          
          <td>May</td>
          <td>4634</td>
          <td>124.2</td>
          <td className='red'>34%↑</td>
        </tr>
        <tr >
    
          <td>Jun</td>
          <td>4834</td>
          <td>124.2</td>
          <td className='red'>67%↑</td>
        </tr>
        <tr >
        
          <td>Jul</td>
          <td>3487</td>
          <td>165.1</td>
          <td className='green'>54%↓</td>
        </tr>
    </tbody>
  </table></div>
  )
}

export default Table