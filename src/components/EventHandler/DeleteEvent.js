import db from '../Firebase';
import { doc, deleteDoc} from "firebase/firestore";
import { toast } from 'react-toastify';

const handleDelete = async (id,navigation) => {
    await deleteDoc(doc(db, "data", id));
    toast.error("Task deleted successfully", { theme: "dark", icon: "🚀" })
    navigation('/home')
}

export default handleDelete