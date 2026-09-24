import React from 'react'

const Id = (props) => {
  return (
    <div style={{ border: '2px solid red' , height:'400px' , width:'300px' }}>
        <h4>ABES ENGINEERING COLLEGE</h4>
        <h3>Student Id</h3>
        <h3>{props.name}</h3>
        <img src={props.image} alt="" height={'100px'} width={'100px'} />
        <h3>{props.rollNumber}</h3>
        <h3>{props.class}</h3>
    </div>
  )
}

export default Id
