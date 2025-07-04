import Card from "./Card"







function CardsGrid({ cards }) {

  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-4 my-6 bg-purple-100">
      {cards.map((item, index) => <Card key={index} image={item.image} isHidden={item.isHidden} index={index} isCorrect={item.isCorrect ? item.isCorrect : null} isNotCorrect={item.isNotCorrect ? item.isNotCorrect : null} />)}


    </div>
  )
}
export default CardsGrid