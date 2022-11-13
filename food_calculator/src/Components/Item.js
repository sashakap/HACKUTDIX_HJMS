import { List , ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {db} from '../firebase.js';
import { doc, deleteDoc } from "firebase/firestore";
const Item=({arr})=>{
    return (
        <List className="item__list">
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={arr.item.name} secondary={arr.item.name} />
            </ListItem>
            <DeleteIcon fontSize="large" style={{opacity:0.7}} onClick={() => {deleteDoc(doc(db,'items',arr.id))}} />
        </List>
    )
};
export default Item;