function useCardPosition(images, noOfCards) {
  if (images.length < noOfCards) {
    alert('Insufficient images.')
    return
  }


  function getPositions(noOfCards) {
    const array = []
    const removedItemArray = []
    let count = noOfCards * 2 - 1
    while (count != -1) {
      array.push(count)
      count--;
    }

    while (array.length != 0) {
      const val = Math.floor(Math.random() * array.length)

      removedItemArray.push(Number(array.splice(val, 1)))

    }

    return removedItemArray

  }
  function duplicateArray(arr) {
    const newArray = []
    arr.map((item) => {
      newArray.push(item)
      newArray.push(item)

    })
    return newArray
  }

  function arrangeNewArray(arr) {
    const arrangedArray = [];
    while (arr.length != arrangedArray.length) {
      arr.filter((item) => {
        if (item.position === arrangedArray.length) {
          arrangedArray.push(item)
          return

        }

      })

    }
    return (arrangedArray)



  }


  function getPosition() {
    const duplicatedImages = duplicateArray(images)
    const positionArray = getPositions(noOfCards)


    const cardPositions = duplicatedImages.map((item, index) => {

      return { image: item, position: positionArray[index] }
    })

    const arrangedCards = arrangeNewArray(cardPositions)


    return arrangedCards

  }



  const finalArray = getPosition();
  return finalArray










}

export default useCardPosition