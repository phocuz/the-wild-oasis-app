
import Spinner from "../../ui/Spinner"
import CabinRow from "./CabinRow";
import useCabin from "./useCabin";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";


function CabinTable() {

const {isLoading, cabins} = useCabin();

  if(isLoading) return <Spinner />
  return (
    <div>
     <Menus>
       <Table  column = '0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header>
            <div></div>
            <div>Cabin</div>
            <div>Capacity</div>
            <div>Price</div>
            <div>Discount</div>
            <div></div>
        </Table.Header>
        <Table.Body data ={cabins} render={((cabin)=> <CabinRow cabin={cabin} key={cabin.id} />)} />
      </Table>

     </Menus>
    </div>
  )
}

export default CabinTable;
