import React, { useState } from 'react'
import router from 'next/router'
import styled from 'styled-components'

const InputBox = styled.input`
    width: 100vw;
    max-width: 300px;
    height: 26px;

    background: #ffffff;
    border-radius: 5px;

    outline: none;

    text-align: center;
`

function SearchBox(){
    const [inputVal, setInputVal] = useState("")

    function redirect(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        const value = inputVal.split(", ")
        console.log(value)

        router.push(`/?city=${value[0]}&state=${value[1]}&country=${value[2]}`)
    }

    return(
        <form onSubmit={e => redirect(e)} className="flex flex-row mb-4">
            <InputBox placeholder="City, State, Country" onChange={e => {setInputVal(e.target.value)}} type="text" value={inputVal} />
        </form>
    )
}

export { SearchBox }