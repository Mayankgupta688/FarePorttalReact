import React from "react"

export default function FetchData() {
    var myPromise = fetch("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees")
    myPromise.then((data) => {
        console.dir(data.json())
    })
    return (
        <div>Hello All</div>
    )
}

var myPromise = new Promise((resolve, reject) => {
    $.get("UrlOne").then((data) => {
        var getId = data.id;

        resolve({
            id: data.id,
            salary: innerdata.salary
        })

        $.get("AnotherUrl/" + getId).then((innerdata) => {
            var salary = innerdata;

            
        })
    })

    setTimeout(() => {
        reject()
    }, 5000)
});
