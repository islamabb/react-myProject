import "./Main.scss"
import Card from "./Card"

function Main (){
  return(
    <main className="main">
      <h1 className="text"><b className="text1">Популярные</b> новости</h1>
      <div className="main-div">
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className="main-div">
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className="main-div">
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className="main-div">
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className="main-div">
      <Card/>
      <Card/>
      <Card/>
      </div>
    </main>
  )
}

export default Main