import { FlatList, ScrollView, useWindowDimensions } from "react-native";
import React,  { useEffect, useState  } from "react";
import { 
    Container,
    Title,
    Footer,
    Header,
    TitleCard,
    ListCard
} from './style';
import { Button } from "../../components/Button";
import api from "../../services/api";
import { CardMovies } from "../../components/Card/CardMovies";

export default function Home({ navigation }) {
  const [moviesPopular, setMoviesPopular] = useState([]);
  var API_KEY = "api_key=73fcf6cb4365f9236bf55b5bfae082e2";
  var LANGUAGE = "pt-BR";
  useEffect(() => {
    api.get(`/movie/popular?${API_KEY}&language=${LANGUAGE}&page=1`)
        .then(response => response.data)
        .then(data => setMoviesPopular(data.results))
}, [])

  return (
    <Container>
      <Header>
     <Title>  Bem-vindo ao LuarFlix </Title>
      </Header>
     <Footer>
       <Button
       title="FILMES PARA LISTADOS"
       onPress={() => navigation.navigate('Favorites')}
       />
       <Button
       title="Buscar filme"
       onPress={() => navigation.navigate('Home')}
       />
    </Footer>
    <TitleCard>Filmes em cartaz</TitleCard>
      <ListCard
        data={moviesPopular}
        keyExtractor={(item,) => item.id  }
        renderItem={ ({ item,}) =>(
          <CardMovies data={item} />
        )}/>

    </Container>
  );
}