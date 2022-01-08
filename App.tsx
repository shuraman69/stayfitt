import {Provider} from 'react-redux'
import {store} from './src/redux/store'
import {AppContainer} from './src/components/AppContainer'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import {getUserToken} from "./src/api/api";

export const client = new ApolloClient({
 uri: 'https://56.inskill-dev.ru/api/graphql',
 cache: new InMemoryCache(),
 headers: {
  Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiOGFkYzAyMWU0NzQ2OGM4NzM1ZjZkZTJkNTRhMWY2NGQ2YjBjNTk0NGQ5ZTQ2NzU5MDI5YjdmYTcyNzM3MjlhYTFlMWUxM2JlZGU0MTcwMjMiLCJpYXQiOjE2NDEzMDkxMTgsIm5iZiI6MTY0MTMwOTExOCwiZXhwIjoxNjcyODQ1MTE4LCJzdWIiOiI2Mjc4Iiwic2NvcGVzIjpbIioiXX0.YaH2IVhAfFSmuTjPBW1WGs56fSX8jR4AZDX_5F3g52Uim-vPAnMdbl-bIACryR-8BB2-uMZTMH0jRVznRy0uEhc4vyy-6SUji9u78hV9Z5CCEdofRy6EGTE9RJP7b8ffEPuftn9Iva_LxRo-BIhQ905FxpW8dDRaAP6zzNO2CW2cyo2iuIJw400a9pN29yF0SrJoJyVEl0ha64J56tACzksbmhTO00qTrFUfIqoCbGApVG_8bSpreYTJEXXIlKvXwnWJ71GxtkaOVhSIX_ea4uszhhkH_cIUoOFC7HhKrcRpuznChELtvX5ZBXub1-8XpHJgXna2w0UQVgP5SQuLywjTN_lgoshhGwKDuMkk9tsSnQjuvLniGwRl3FUMvX303-v4U4zCD-qeYsnwsqVWxBtZEiU6T0QQrTRbusK9W-MKz0ebh_drd-nz-HDKD7H6a63B2Gc5HPO0CAYdrno659DIq7Y5pmItPSOuJ1eFo_DezBsz8VBsvXs9vzg_38lPt3quosSUKRhQ06USAHJael8DaK8lq7OK-a9a09rAj4CqvPHp8EdpbD8JMYidclblubdkbI5iLxNuSdBZstFic5JvRNHN7zF9jC8kEtDYO3MTEuThswfafccbDbjvGH5QOdGBr8bDXgro6DhiReJkEGMuihABK6-f73l2GDsDKkA`,
 },
})


export default function App() {
 return (
  <Provider store={store}>
   <ApolloProvider client={client}>
    <AppContainer/>
   </ApolloProvider>
  </Provider>
 )
}

