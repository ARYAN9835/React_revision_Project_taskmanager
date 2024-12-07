import React from 'react'

const Taskfilter = ({setFilter}) => {
  return (
    <div style = {{
      backgroundColor : 'cyan',
      padding : '1.5 px'
    }}>
    <label>Filter by priority :</label>
    <select onChange={(e) => setFilter(e.target.value)}>
        <option value = "All">ALL</option>
        <option value='low'>Low</option>
        <option value = 'medium'>Medium</option>
        <option value = 'high'>High</option>
    </select>
    </div>
  )
}

export default Taskfilter;