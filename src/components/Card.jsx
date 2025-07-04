import { imageDataContext, openCardsContext, selectedImagesContext } from './context'
import { useContext, useEffect } from 'react'



function Card({ image, isHidden, index, isCorrect, isNotCorrect }) {
  const { imageData, setImageData } = useContext(imageDataContext)
  const { openCards, setOpenCards } = useContext(openCardsContext)
  const { selectedImages, setSelectedImages, openCardsInfo } = useContext(selectedImagesContext)

  function showCard(index) {
    if (openCards === 2) {
      return
    }

    let updatedImages = []

    updatedImages = imageData.map((item) => {
      if (item.position === index) {

        setSelectedImages(openCards === 0 ? { first: item.image, firstIndex: item.position } : { ...(selectedImages || {}), second: item.image, secondIndex: item.position });
        return { ...item, isHidden: false }

      }
      else return item


    })
    setImageData(updatedImages);
    setOpenCards(openCards + 1)



  }


  return (

    <div className="h-24 rounded relative">
      {isHidden ? <img className="absolute  h-full w-full z-10 hover:opacity-90  transition duration-100 ease-in-out rounded" src="https://images.pexels.com/photos/7630009/pexels-photo-7630009.jpeg" alt="images" onClick={() => { showCard(index) }}  ></img> : null}

      <img className={`h-full w-full border-2 border-blue-200 rounded ${isCorrect ? 'border-green-800' : null} ${isNotCorrect ? 'border-red-800' : null}  transition duration-300 ease-in-out`} src={image} id={'image-' + index} ></img>


    </div>
  )

}

export default Card