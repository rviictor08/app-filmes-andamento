import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: black;
  padding: 0 20px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 50px;
  margin-left: 50px;
  font-weight: bold;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 30px 0 20px 0;
`;

export const Menu = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const ButtonMenu = styled.TouchableOpacity``;

export const MenuIcon = styled(Feather)`
  color: #fff;
  font-size: 30px;
`;

export const ButtonSearch = styled.TouchableOpacity``;

export const MoviesInTheaters = styled.View``;

export const TitleMoviesInTheaters = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
`;
