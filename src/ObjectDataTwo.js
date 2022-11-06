import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function RenderingArrayOfObjects() {
    const data = [
        {
            "Name": "Ramesh",
            "Marks": "98",
            "Phone": "123"
        },
        {
            "Name": "Suresh",
            "Marks": "96",
            "Phone": "127"
        },
        {
            "Name": "Mahesh",
            "Marks": "97",
            "Phone": "163"
        },
        {
            "Name": "Rupesh",
            "Marks": "95",
            "Phone": "193"
        },
        {
            "Name": "Satya",
            "Marks": "78",
            "Phone": "120"
        }
    ]
    const tableRows = data.map(
        (element) => {
            return (

                <tr>
                    <td key={element.Name}>{element.Name}</td>
                    <td key={element.Marks}>{element.Marks}</td>
                    <td key={element.Phone}>{element.Phone}</td>
                </tr>

            )
        }
    )
    return (
        <div>

            <Table hover>
                <thead>
                    <tr>
                        <th> Name</th>
                        <th>Marks</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>

        </div>
    )
}
function ParentLevelComponentTwo() {
    return (
        <div className="App" style={{background:'#ed1703', color:'white'}}>
            <div>
                <h1 style={{ color: 'white' }}>Students Details Sheet 2</h1>
                <RenderingArrayOfObjects />
            </div>
        </div>
    );
}

export default ParentLevelComponentTwo;
