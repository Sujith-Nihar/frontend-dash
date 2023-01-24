import React from 'react'

export const DeviceDetails = (props) => {
  return (
    
        <div className={props.classdetails} style={{height:115}}>
            <h6 className=" text-dark"><b> {props.head}</b></h6>
            <hr className='m-1'></hr>            
            <h6 className="flex-wrap text-dark">{props.ans}</h6>
        </div>
    
  )
}
