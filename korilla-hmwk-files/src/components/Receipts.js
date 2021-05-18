import { useState } from "react"
// import Receipt from './components/Receipt'

function AllRec(){
const receipts = [
    {
      person: "Karolin",
      order: {
        main: 'Burrito',
        protein: 'Organic Tofu',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: [
          'Baby Bok Choy', 'Cucumber Kimchi'
        ],
        drink: 'Korchata',
        cost: 22
      },
      paid: false
    },
    {
      person: 'Mark',
      order: {
        main: 'Rice Bowl',
        protein: 'Ginger Soy Chix',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: [
          'Yuzu Pickled Sweet Pepper', 'Kale'
        ],
        drink: 'Korchata',
        cost: 19
      },
      paid: false
    },
    {
      person: 'Matt',
      order: {
        main: 'Salad Bowl',
        protein: 'Organic Tofu',
        rice: 'none',
        sauce: "K'lla",
        toppings: [
          'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
        ],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20
      },
      paid: true
    }
  ]
//STATE
// const [allReceipts, setAllReceipts] = useState(receipts);
  
// function Receipt1(){
//     const receipt1 =
//     [
//       {
//         person: 'Karolin',
//         order: 'test',
//         paid: false
//       }
//     ]
// item.map((subitem, index) => {  subitem.map(( subsubitem, index) => {
//     subsubitem.whatever
//   })
// })

return (
    <div>
      <ul>
        {receipts.map((value, index)=>{
          return(
            <div className ="eachReceipt">
            <h2>{value.person}</h2>
            <h3>{value.order.main}</h3>
            <h3>{value.order.protein}</h3>
            <h3>{value.order.rice}</h3>
            <h3>{value.order.sauce}</h3>
            <h3>{value.order.drink}</h3>
            <h3>{value.order.toppings}</h3>
            <h3>{value.order.cost}</h3>
            {/* <h3>{value.paid}</h3> */}
            </div>
          )
        }
        )}
        </ul>
</div>
    );
}
export default AllRec;
