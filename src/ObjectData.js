import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globalstyles.css';
function RenderingArrayOfObjects() {
    const data = [
        {
            "Name": "Nikita",
            "Marks": "98",
            "Phone": "123"
        },
        {
            "Name": "Pratiksha",
            "Marks": "96",
            "Phone": "127"
        },
        {
            "Name": "Muskan",
            "Marks": "97",
            "Phone": "163"
        },
        {
            "Name": "Nishi",
            "Marks": "95",
            "Phone": "193"
        },
        {
            "Name": "Himanshu",
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
function ParentLevelComponent() {
    return (
        <div className='main-wrapper'>
            <div>
                <h1 style={{ color: 'white' }}>Students Details Sheet 1</h1>
                <RenderingArrayOfObjects />
            </div>
        </div>
    );
}

export default ParentLevelComponent;
