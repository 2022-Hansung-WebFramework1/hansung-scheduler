import React, {useCallback, useState} from 'react';
import ReactCardFlip from "react-card-flip";
import { IoMenu } from 'react-icons/io5';
import TagGroup from "./TagGroup";
import Moment from "react-moment";
import { useSwipeable } from 'react-swipeable';

import styles from "assets/Card.module.css";
import {TagType} from "types";

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
            {day}
            <Moment format={" HH:mm "} date={startTime}/>
             ~
            <Moment format={" HH:mm"} date={endTime}/>
        </div>

    )
}

const Card = ({title, className, tags, professor, classroom, day, startTime, endTime, attributes, listeners}) => {
    const [flipped, setFlipped] = useState(false);
    const handlers = useSwipeable({
        onSwiped: (eventData) =>  setFlipped(prev => !prev),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
            <div {...handlers} className={`${styles.card} ${styles.frontContainer}`}>
                <IoMenu className={styles.icon} size={"1.5em"} color={"lightgrey"} {...attributes} {...listeners}/>
                <div className={styles.title}>{title} [{className}]</div>
                <div className={styles.tagContainer}>
                    <TagGroup tags={tags.map(tag => ({type: TagType.TAG, name: tag}))} />
                </div>
                <div className={styles.contentFont}>{professor}</div>
                <div className={styles.contentFont}>{classroom}</div>
                <div className={styles.contentFont}>
                    <TimeContent day={day} startTime={startTime} endTime={endTime}/>
                </div>

            </div>
            <div {...handlers} className={`${styles.card} ${styles.frontContainer}`}>b</div>
        </ReactCardFlip>



    )
}

export default Card;