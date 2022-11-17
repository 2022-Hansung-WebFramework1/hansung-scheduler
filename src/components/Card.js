import React, {useCallback, useState} from 'react';
import ReactCardFlip from "react-card-flip";
import { IoMenu } from 'react-icons/io5';
import TagGroup from "./TagGroup";
import Moment from "react-moment";

/**
 *
 * @param   {string} title 제목
 * @param   {string} className 분반
 * @param   {string[]} tags 태그(학점 등)
 * @param   {string} professor 교수명
 * @param   {string} classroom 강의실 ex) 공학관 309
 * @param   {Date} startTime 시작 시간 (날짜는 상관없고 시간만 이용)
 * @param   {Date} endTime 끝 시간 (날짜는 상관없고 시간만 이용)
 */

const TimeContent = ({day, startTime, endTime}) => {
    return (
        <div>
            <div>{day}</div>
            <Moment format={"HH:mm "} date={startTime}/>
             ~
            <Moment format={" HH:mm"} date={endTime}/>
        </div>

    )
}

const Card = ({title, className, tags, professor, classroom, day, startTime, endTime}) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
            <div style={{...styles.card, ...styles.frontContainer}} onClick={() => setFlipped(true)}>
                <IoMenu style={styles.icon} size={"1.5em"} color={"lightgrey"}/>
                <div style={styles.title}>{title} [{className}]</div>
                <div style={styles.tagContainer}>
                    <TagGroup tags={tags.map(tag => ({type: "tag", name: tag}))} />
                </div>
                <div style={styles.contentFont}>{professor}</div>
                <div style={styles.contentFont}>{classroom}</div>
                <div style={styles.contentFont}>
                    <TimeContent day={day} startTime={startTime} endTime={endTime}/>
                </div>

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