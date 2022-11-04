import React, {useState, useEffect} from 'react'

const ObjectData = () => {
    const [keysz, setKeys] = useState([])
    let Obj = [{name: 'Suresh',Sal: 1000},{name: 'SurDDesh',Sal: 10000}]
    for(const[key, value] of Object.entries(Obj)){
        
    }


    var arr = {}
    const pair = () => {
        
        for (const[key, value] of Object.entries(Obj)){
            arr[key] = value;
        }
        if(arr){
            console.log(arr)
        }
    }
    useEffect(() => {
        pair()
    }, [])

    const data = Obj.map((ele) => {return <div id={ele.name}>Name : {ele.name}</div>})
    return (
        <div>
            <div>{data}</div>
            <div>
                <table>
                    <tr>
                        {arr[0].map((i) => <td></td>)}
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ObjectData
