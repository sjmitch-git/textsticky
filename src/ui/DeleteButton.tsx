import { Button } from "@/lib/fluid";
import { FaTrashAlt } from "react-icons/fa";

import { DeleteButtonProps } from "@/lib/types";

const DeleteButton = ({ onClick, index }: DeleteButtonProps) => {
  return (
    <Button
      onClick={() => onClick(index)}
      btnBackground="danger"
      btnColor="light"
      outline
      outlineColor="light"
      hoverScale
      layout="circle"
      size="md"
    >
      <FaTrashAlt />
      <span className="sr-only">Delete Item</span>
    </Button>
  );
};

export default DeleteButton;
