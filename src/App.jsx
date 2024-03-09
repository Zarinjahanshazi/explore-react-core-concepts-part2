import './App.css'
import Counter from './counter';
// import Team from './team';
import Beam from './Beam';
import Users from './Users';
// import Friends from './Friends';
import Partners from './Partners';


function App() {
  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 =() =>{
    alert('button 2 clicked')
  }

  const addFive =(num) =>{
    alert(num +5);
  }
  

  return (
    <>
      
      <h3>React core concepts2</h3>

      <Partners></Partners>

      <Users></Users>

      <Beam></Beam>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() =>{alert('third clicked')}}>Third</button>
      {/* vejjailla */}
      <button onClick={() => addFive(3)}>Four</button>


    </>
  )
}

export default App
