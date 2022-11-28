import {IoCalendarOutline} from "react-icons/io5";
import {useDroppable} from "@dnd-kit/core";
import styles from "assets/Main.module.css";

const ScheduleIcon = ({id}) => {
    const {isOver, setNodeRef} = useDroppable({
        id: id ?? "schedule_icon",
    });

    const style = {
        zIndex: isOver ? "100" : "auto",
        opacity: isOver ? 0.5 : 1
    };
    return (
        <div className={styles.iconContainer} ref={setNodeRef} style={style}>
            <IoCalendarOutline className={styles.icon}/>
        </div>
    )
}

export default ScheduleIcon;