import "./Main.scss"
import Card from "./Card"

function Main (){
  return(
    <main className="main">
      <h1 className="text"><b className="text1">Популярные</b> новости</h1>
      <span className="main-span">
      <Card/>
      <Card/>
      <Card/>
      </span>
      <span className="main-span">
      <Card/>
      <Card/>
      <Card/>
      </span>
      <span className="main-span">
      <Card/>
      <Card/>
      <Card/>
      </span>
    </main>
  )
}

export default Main