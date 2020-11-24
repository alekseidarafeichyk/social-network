import React, {useState} from 'react';
import style from './Paginator.module.css'
import {Button} from './Button/Button';

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

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize


    const buttonPrev = portionNumber > 1 &&
        <Button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }} name={'PREV'}/>

    const buttonNext = portionCount > portionNumber &&
        <Button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }} name={'NEXT'}/>

    const paginatorNumbers = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
            return <span
                className={props.currentPage === p ? style.selectedPage : style.paginatorNumber}
                key={p}
                onClick={() => {
                    props.onPageChanged(p)
                }}>
                            {`${p} `}
                        </span>
        })

    return (
        <div className={style.paginator}>
            {buttonPrev}
            {paginatorNumbers}
            {buttonNext}
        </div>
    );
}

export default Paginator;