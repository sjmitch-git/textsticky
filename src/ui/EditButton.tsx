import { useRouter } from "next/navigation";

import { Button } from "@/lib/fluid";
import { FaEdit } from "react-icons/fa";

const EditButton = () => {
  const router = useRouter();

  const handleEdit = () => {
    router.push("/");
  };

  return (
    <Button
      onClick={handleEdit}
      btnBackground="primary"
      btnColor="light"
      outline
      outlineColor="light"
      hoverScale
      layout="rounded"
      size="md"
    >
      <FaEdit />
      <span>Edit Image</span>
    </Button>
  );
};

export default EditButton;
