import React from 'react'
import { LineChart,
    Line,
    XAxis,
    YAxis, 
    CartesianGrid,
    Tooltip,
    ResponsiveContainer } from 'recharts';
import './charts.css'

const Charts = ({title,data,datakey,grid,name}) => {
    // ++++++++++++++++++++++++++++++++++++++++++

    
      

    // ========================================
    return (
        <>

            <div className="charts">

                <div className="charts_heading">
                   <p> {title}</p>

                   <ResponsiveContainer width="90%" height="" aspect={ 6 / 2 }>
                   <LineChart data={data}>

                       <XAxis dataKey="name" stroke="green"/>
                       <YAxis stroke="green"/>

                       <Line type="monotone" dataKey={datakey} stroke="green"/>
                       <Tooltip/>
                      { grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}

                   </LineChart>

                   </ResponsiveContainer>

                </div>

            </div>
            
        </>
    )
}

export default Charts
