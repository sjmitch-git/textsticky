import { useRouter } from "next/navigation";

import { Button } from "@/lib/fluid";
import { FaEdit } from "react-icons/fa";
import { Labels } from "@/lib/constants";

const EditButton = () => {
  const router = useRouter();

  const handleEdit = () => {
    router.push("/");
  };

  return (
    <Button
      onClick={handleEdit}
      btnBackground="dark"
      btnColor="light"
      outline
      outlineColor="light"
      hoverScale
      layout="rounded"
      size="lg"
      title={Labels.EditButton}
      className="focus:border-info focus-visible:outline-info"
    >
      <FaEdit />
      <span className="hidden md:inline-block">{Labels.EditButton}</span>
    </Button>
  );
};

export default EditButton;
