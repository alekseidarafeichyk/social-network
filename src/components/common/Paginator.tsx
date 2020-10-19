import React from 'react';
import styles from './Paginator.module.css'

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
}

function Paginator(props: PaginatorPropsType) {
    let countPage = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];

    for (let i = 1; i <= countPage; i++) {
        page.push(i)
    }

    return (
        <div>
            {page.map(p => {
                return <span
                    className={props.currentPage === p ? styles.selectedPage : ''}
                    key={p}
                    onClick={() => {
                        props.onPageChanged(p)
                    }}>
                            {`${p} `}
                        </span>
            })}
        </div>

    );
}

export default Paginator;