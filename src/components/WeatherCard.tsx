import { useRouter } from 'next/router'
import axios from 'axios'
import styled from 'styled-components'

interface CardInterface{
    firstColor: string
    lastColor: string
}

const Card = styled.div<CardInterface>`
    position: relative;

    background: linear-gradient(to top, ${props => props.firstColor}, ${props => props.lastColor});

    border-radius: 10px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px;

    width: 300px;
    height: 400px;
    
    box-shadow: 0px 0px 5px #ffffff;

    .center{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        text-align: center;
    }

    transition: .5s;

    :hover{
        transform: translate(0%, -1%);
    }
`

function WeatherCard({ temperature, sensation }: any){
    const router = useRouter()

    const { city, state, country } = router.query

    return(
        <Card firstColor="#36bfff" lastColor="#a6e3ff">
            <h1 className="font-header">{city}</h1>
            <p className="font-text text-xs">{state}, {country}</p>
            <div className="center">
                <i className="text-[75px] bx bx-sun"></i>
                <h1 className="font-display text-[50px]">{temperature}°C</h1>
                <p className="font-text text-[15px]">Thermal sensation of {sensation}°C</p>
            </div>
            <i className='bx bx-refresh absolute right-0 bottom-0 text-[25px] m-4 hover:cursor-pointer'></i>
        </Card>
    )
}



export { WeatherCard }