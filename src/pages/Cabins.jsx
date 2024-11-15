import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";


function Cabins() {

  const [showCabin,setShowCabin] = useState(false);

  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>filter/sort</p>
    </Row>

    <Row>
      <CabinTable />
    </Row>

    <Button onClick={()=>setShowCabin(show=>!show)}>Add New Cabin</Button>

    {showCabin && <CreateCabinForm />}
    </>
    
  );
}

export default Cabins;
