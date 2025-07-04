import useCardPosition from "../Hooks/useCardPosition";
import CardsGrid from "./CardsGrid"
import Header from "./Header"
import { useState, useEffect } from 'react'
import { imageDataContext, openCardsContext, selectedImagesContext } from './context'


function MemoryMatch() {
  const [imageData, setImageData] = useState([])
  const [openCards, setOpenCards] = useState(0)
  const [selectedImages, setSelectedImages] = useState({})
  const [totalturns, setTotalTurns] = useState(0)
  const [openCardsInfo, setOpenCardsInfo] = useState({})



  const totalCardInGrid = 12;
  const NoOFCards = totalCardInGrid / 2;
  const images = [
    'https://images.pexels.com/photos/32552929/pexels-photo-32552929.jpeg',
    'https://images.pexels.com/photos/4046993/pexels-photo-4046993.jpeg',

    'https://images.pexels.com/photos/31868454/pexels-photo-31868454.jpeg',

    'https://images.pexels.com/photos/16630714/pexels-photo-16630714.jpeg',

    'https://images.pexels.com/photos/32117661/pexels-photo-32117661.jpeg',
    'https://images.pexels.com/photos/14909837/pexels-photo-14909837.jpeg'



  ]


  function updateCard() {

    const cardPosition = useCardPosition(images, NoOFCards)

    const imageDetails = cardPosition.map((item) => {
      return { image: item.image, position: item.position, isHidden: true }
    })
    setImageData(imageDetails)


  }

  function hideImage(imagesToHide) {

    const updatedImages = imageData.map((item) => {
      if (item.position === imagesToHide[0] || item.position === imagesToHide[1]) {

        return { ...item, isHidden: true }

      }
      else return item


    })
    setImageData(updatedImages)

  }

  useEffect(() => {

    if (openCards === 2) {
      setTotalTurns(totalturns + 1)
      const imagesOpen = [selectedImages.firstIndex, selectedImages.secondIndex]

      if (selectedImages.first === selectedImages.second) {
        setOpenCards(0)
        console.log('yay')

        setOpenCardsInfo({ imagesOpen, isCorrect: true })
        checkCorrect(imagesOpen, true)

      }
      else {

        setOpenCardsInfo({ imagesOpen, isCorrect: false })
        checkCorrect(imagesOpen, false)

        setTimeout(() => {




          hideImage(imagesOpen);
          setOpenCards(0)


        }, 1300);



      }


    }

  }, [selectedImages])



  function checkCorrect(imagesOpen, isCorrect) {
    let updatedImages = []

    updatedImages = imageData.map((item) => {


      if (item.position === imagesOpen[0]) {

        return (isCorrect ? { ...item, isCorrect: true, isNotCorrect: false } : { ...item, isCorrect: false, isNotCorrect: true })

      }
      else if (item.position === imagesOpen[1]) {

        return (isCorrect ? { ...item, isCorrect: true, isNotCorrect: false } : { ...item, isCorrect: false, isNotCorrect: true })

      }
      else return item


    })

    setImageData(updatedImages);


  }


  return (
    <div className="flex justify-center my-9 bg-purple-100">
      <div>

        <Header addCards={updateCard} setTurns={setTotalTurns} />

        <imageDataContext.Provider value={{ imageData, setImageData }}>
          <openCardsContext.Provider value={{ openCards, setOpenCards }}>
            <selectedImagesContext.Provider value={{ selectedImages, setSelectedImages, openCardsInfo }}>

              <CardsGrid cards={imageData} />

            </selectedImagesContext.Provider>


          </openCardsContext.Provider>
        </imageDataContext.Provider>


        <p className="text-center font-bold text-2xl">Turns: {totalturns}</p>
      </div>




    </div>
  )

}
export default MemoryMatch