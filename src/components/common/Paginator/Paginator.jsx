import React from 'react';
import s from './Paginator.module.css';

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {

        pages.push(i);

    }

    return (
        <div>
            {pages.map(el => {
                return <button onClick={(e) => { props.onPageChenged(el) }} className={props.currentPage === el ? s.selectegPage : null}>{el}</button>
            })}
        </div>
    )

}

export default Paginator;
