import Modal from './components/modal'
import React, { useState } from 'react' 


function App () {
    const [isModalVisible, setIsModalVisible] = useState(true)


    return (
        <>
          {isModalVisible 
          ? <Modal onClose={setIsModalVisible} /> 
          : null}
        </>
      )

}


export default App

