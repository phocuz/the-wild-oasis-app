
import styled from "styled-components";
import {formatCurrency} from "../../utils/helpers"
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabins from "./useDeleteCabins";
import { HiPencil, HiTrash } from "react-icons/hi";
import { HiSquare2Stack } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete"
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 /2 ;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;


export default function CabinRow({cabin}) {

  const {isDeleting, deleteCabin} = useDeleteCabins()
  const {isCreating,createCabin} = useCreateCabin();

  const cabinData = cabin;
  const {name, maxCapacity, id:cabinId, regularPrice, image, discount,description} = cabinData;

  function handleDuplicate() {
  const duplicateData={
    name: `copy of ${name}`,
    maxCapacity,
    regularPrice,
    image,
    discount,
    description,
  };

   console.log("Duplicating cabin:", duplicateData); 
 
}

  return (
    <>
    <Table.Row>
      <Img src={image} alt="cabin-image" />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (<Discount>{formatCurrency(discount)}</Discount>) :
      (<span>&mdash;</span>)}
    
      <div>
        <button onClick={handleDuplicate} disabled={isCreating}><HiSquare2Stack /></button>
        <Modal>

        <Modal.Open opens="edit">
        <button><HiPencil /></button>
        </Modal.Open>
        <Modal.Window name="edit">
          <CreateCabinForm  cabinToEdit ={cabin} />
        </Modal.Window>

        <Modal.Open opens="delete">
          <button>
        <HiTrash />
       </button>
        </Modal.Open>
        <Modal.Window name="delete">
          <ConfirmDelete 
          resourceName ="cabins"
          disabled= {isDeleting}
          onConfirm={()=> deleteCabin(cabinId)} />
        </Modal.Window>
        </Modal>

      <Menus.Menu>
      <Menus.Toggle id={cabinId} />
      <Menus.List id={cabinId}>
        <Menus.Button icon={<HiSquare2Stack />}>Duplicate</Menus.Button>
        <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
        <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
      </Menus.List>
      </Menus.Menu>
      </div>
    </Table.Row>
        </>
  )
}