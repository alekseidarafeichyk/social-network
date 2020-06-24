import React from "react";
import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div className={s.img}>
                <img src="https://bipbap.ru/wp-content/uploads/2017/06/1-13.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;