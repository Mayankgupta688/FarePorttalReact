import React, {useState, useEffect, useMemo, useCallback} from "react";

function useCustom() {
    var [data, setData] = useState(new Date().getSeconds());

    function getUpdatedDate() {
        return new Date().getSeconds();
    }

    

    

    useEffect(() => {
        setInterval(() => {
            setData(getUpdatedDate())
        }, 1000)
    }, []);
    
    return [data, setData];
}

export default function UsingHooks() {
    var [name, setName] = useState("Mayank")
    var [age, setAge] = useState("10")
    var [custom, setCustom] = useCustom(20);

    function UpdateData() {
        setName("Anshul")
    }

    function getData(name) {
        debugger;
        return name
    }

    var memoFunctionValue = useCallback(() => getData(name), [name])

    function UpdateAgeData() {
        setAge(20);
    }

    function UpdateCustomData() {
        setCustom(100)
    }

    useEffect(() => {
        alert("Value Updated...")
    }, [name])
    
    return (
      <div>
        <p>Employee Name: {name}</p>
        <p>Employee Age: {age}</p>
        <p>Custom Data {custom}</p>
        {memoFunctionValue()}
        <input type="button" onClick={UpdateData} value="Update" /><br/><br/>
        <input type="button" onClick={UpdateAgeData} value="Update Age" /><br/><br/>
        <input type="button" onClick={UpdateCustomData} value="Update Custom" /><br/><br/>

      </div>
    )

}