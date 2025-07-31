import "./Main.scss"
import Card from "./Card"

function Main (){

  const arr = [
    {
      title: 'НОВОСТИ IT',
      desc: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. '
    },
    {
      title: 'НОВОСТИ IT',
      desc: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. '
    },
    {
      title: 'НОВОСТИ IT',
      desc: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. '
    },
    {
      title: 'НОВОСТИ IT',
      desc: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. '
    },
    {
      title: 'НОВОСТИ IT',
      desc: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. '
    },
    {
      title: 'НОВОСТИ IT',
      desc: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. '
    },
    {
      title: 'НОВОСТИ IT',
      desc: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. '
    },
    {
      title: 'НОВОСТИ IT',
      desc: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. '
    },
    {
      title: 'НОВОСТИ IT',
      desc: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. '
    },

  ];

  return(
    <div className="main">
      <h1><span>Популярные</span> новости</h1>
      <div className="container" >
      {arr.map((item, index) => (<Card
      key = {index}
      title = {item.title}
      desc =  {item.desc}
      />)

    )}
      </div>
    </div>
  )
}

export default Main