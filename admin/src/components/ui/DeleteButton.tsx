import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface IDeleteButtonProps {
  id: string;
  baseUrl: string;
  label: string;
  itemName: string;
  queryKey: string;
}

const DeleteButton = ({
  id,
  baseUrl,
  label,
  itemName,
  queryKey,
}: IDeleteButtonProps) => {
  const queryClient = useQueryClient();

  const handleDelete = useMutation({
    mutationFn: async (id: string) => {
      return await fetch(`${baseUrl}/delete/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast.success(`${label} deleted successfully`);
    },
    onError: async () => {
      toast.error(`${label} deletion failed`);
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="">
        <button className="cursor-pointer px-3 py-1 bg-red-600 rounded-md text-white text-sm hover:bg-red-500 flex items-center gap-1">
          Delete
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#1F2328] text-white">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this {label} "{itemName}"?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-300">
            This action cannot be undone. This will permanently remove the{" "}
            {label} "{itemName}" from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer bg-gray-700 text-gray-200 hover:bg-gray-600 ">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDelete.mutate(id)}
            className="cursor-pointer bg-red-600 hover:bg-red-500 text-white"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteButton;
