import { Container } from "../components/Container";
import { SearchBox } from "../components/SearchBox";
import { WeatherCard } from "../components/WeatherCard";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";

function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);

  let temp = 404;
  let feels_like = 404;
  let country;

  if (data.main) {
    temp = Math.floor(data.main.temp);
    feels_like = Math.floor(data.main.feels_like);
    country = data.sys.country;
  }
  console.log(country);
  return (
    <Container className="flex items-center justify-center">
      <div className="w-full flex flex-col items-center mx-4">
        <SearchBox />
        <WeatherCard
          temperature={temp}
          sensation={feels_like}
          country={country}
        />
      </div>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { city, state, country } = context.query;
  const res = await fetch(
    encodeURI(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${process.env.WEATHER_API}&units=metric`
    )
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default Home;
