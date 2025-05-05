import  './App.css';
import Usercard from './components/usercard/Usercard';

export default function App() {
  return (
    <div>
     <div> 
       <h1 className='h1'>Product</h1>
      <div className="ota container">
        <Usercard props={{ism:"Nike air force",lavozimi:"$89.99" , kasbi:"I lost left shoe, don't need this one",plaese:"Plese bu it", bg:"rgb(162, 162, 162)" , btnbg:"gray"}}/>
        <Usercard props={{ism:"Nike air force",lavozimi:"$89.99" , kasbi:"I lost left shoe, don't need this one",plaese:"Plese bu it", bg:"rgb(72, 116, 181)" , btnbg:"rgb(255, 183, 0)"}}/>
        <Usercard props={{ism:"Nike air force",lavozimi:"$89.99" , kasbi:"I lost left shoe, don't need this one",plaese:"Plese bu it", bg:"rgb(169, 105, 162)" , btnbg:"rgb(50, 205, 166)"}}/>
        <Usercard props={{ism:"Nike air force",lavozimi:"$89.99" , kasbi:"I lost left shoe, don't need this one",plaese:"Plese bu it", bg:"pink" , btnbg:"rgb(255, 183, 0)"}}/>
        <Usercard props={{ism:"Nike air force",lavozimi:"$89.99" , kasbi:"I lost left shoe, don't need this one",plaese:"Plese bu it", bg:"rgb(131, 128, 128)" , btnbg:"rgb(50, 205, 166)"}}/>
        <Usercard props={{ism:"Nike air force",lavozimi:"$89.99" , kasbi:"I lost left shoe, don't need this one",plaese:"Plese bu it", bg:"rgb(83, 222, 83)" , btnbg:"rgb(255, 183, 0)"}}/>
      </div>
    </div>
    </div>

  );
}



