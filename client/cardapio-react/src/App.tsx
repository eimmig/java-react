import { useState } from 'react'
import './App.css'
import { Card } from './componets/card/card';
import { useFoodData } from './hooks/useFoodsData';
import { CreateModal } from './componets/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(FoodData => 
          <Card
            price={FoodData.price} 
            title={FoodData.title} 
            image={FoodData.image}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
}

export default App