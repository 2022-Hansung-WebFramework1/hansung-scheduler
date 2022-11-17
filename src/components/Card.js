import React, {useState} from 'react';
import ReactCardFlip from "react-card-flip";
import { IoMenu } from 'react-icons/io5';
import TagGroup from "./TagGroup";

/**
 *
 * @param   {string} title 제목
 * @param   {string} className 분반
 * @param   {string[]} tag 태그(학점 등)
 * @param   {string} professor 교수명
 * @param   {string} classroom 강의실 ex) 공학관 309
 * @param   {Date} startTime 시작 시간
 * @param   {Date} endTime 끝 시간
 */
const Card = ({title, className, tag, professor, classroom, startTime,endTime}) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
            <div style={{...styles.card, ...styles.frontContainer}} onClick={() => setFlipped(true)}>
                <IoMenu style={styles.icon} size={"1.5em"} color={"lightgrey"}/>
                <div style={styles.title}>{title} [{className}]</div>
                <div style={styles.tagContainer}>
                    <TagGroup tags={[{ type: "tag", name: "3학점" }, { type: "tag", name: "3학점" }]} />
                </div>
                <div style={styles.contentFont}>{professor}</div>
                <div style={styles.contentFont}>{classroom}</div>
                <div style={styles.contentFont}>{startTime.getMinutes()}</div>
            </div>
            <div style={{...styles.card, ...styles.frontContainer}} onClick={() => setFlipped(false)}>b</div>
        </ReactCardFlip>



    )
}

export default Card;

const styles = {
    card: {
        width: 300,
        height: 200,
        padding: 24,
        backgroundColor: 'white',
        borderRadius: '10%'
    },
    frontContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    backContainer: {
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10
    },
    tagContainer: {
        marginBottom: 5
    },
    professor: {

    },
    classroom: {

    },
    time: {

    },
    icon: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    contentFont: {
        color: 'black',
        fontSize: 14
    }
}