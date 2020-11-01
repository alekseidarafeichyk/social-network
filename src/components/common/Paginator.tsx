import React, {useState} from 'react';
import styles from './Paginator.module.css'

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    portionSize: number
}

function Paginator(props: PaginatorPropsType) {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/props.portionSize)
    let [portionNumber,setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <div>

            { portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
                .map(p => {
                return <span
                    className={props.currentPage === p ? styles.selectedPage : ''}
                    key={p}
                    onClick={() => {
                        props.onPageChanged(p)
                    }}>
                            {`${p} `}
                        </span>
            })}

            { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
        </div>
    );
}

export default Paginator;