import db from '../Firebase';
import { doc, deleteDoc} from "firebase/firestore";
import { toast } from 'react-toastify';

const handleDelete = async (id) => {
    await deleteDoc(doc(db, "data", id));
    toast.error("Task deleted successfully", { theme: "dark", icon: "🚀" })
    window.location.reload();
}

export default handleDelete