'use client'

import { useEffect, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const formatTime = (unit) => {
        return unit < 10 ? `0${unit}` : unit;
    };

    const y = time.getFullYear() - 2017;
    const mo = time.getMonth() + 1;
    const d = time.getDate();
    const h = formatTime(time.getHours());
    const m = formatTime(time.getMinutes());
    const s = formatTime(time.getSeconds());

    return (
        <span id="nowtime">
            {`现在是：瑞治${y}年${mo}月${d}日  ${h}:${m}:${s}`}
        </span>
    );
};

export default Clock;
