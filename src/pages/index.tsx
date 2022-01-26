import { Container } from "../components/Container"
import { SearchBox } from "../components/SearchBox"
import { WeatherCard } from "../components/WeatherCard"

import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>){
    console.log(data)

    const temp = Math.floor(data.main.temp)
    const feels_like = Math.floor(data.main.feels_like)
    
    return(
        <Container>
            <div className="w-full max-w-[25%] flex flex-col items-center">
                <SearchBox />
                <WeatherCard temperature={temp} sensation={feels_like} />
            </div>
        </Container>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    const { city, state, country } = context.query

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${process.env.WEATHER_API}&units=metric`)
    const data = await res.json()

    return{
        props: {
            data
        }
    }
}

export default Home