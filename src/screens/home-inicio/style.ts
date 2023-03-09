import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
 flex: 1 ;
 background-color: #000;
 justify-content: center;
`;

export const Header = styled.View`
// align-items: center;
margin-left: 30px;
`
export const Title = styled.Text`
    color: #483D8B;
    font-size:${RFValue(28)}px;
    align-items: center;
    margin-top:40px
`;
export const Footer = styled.View`
flex-direction: row;
justify-content:center;
padding: 20px 0 0 0 ;
`;
export const ListCard = styled.FlatList.attrs({
    showsVerticalScrollIndicator:true,
    horizontal:true,

})``;

export const  TitleCard = styled.Text`
    color: #fff;
    font-size: ${RFValue(26)}px;
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
    padding: 0 0 25px 0;
`