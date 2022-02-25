import React from 'react';
import useSWR from 'swr';
import styles from '/components/Song.module.scss';

export default function Song() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data } = useSWR('/api/spotify', fetcher);
    return (
        <ul className={styles.tracks}>
        { data?.tracks?.map((item, i) =>
        <li className={styles.tracklist} key={i} >
        <a href={item.songUrl} target="_blank" title="Open in Spotify">
            <div className={styles.trackthumb}>
            <img src={item.image} alt=""/>
            </div>
            <span>
                {item.artist}
                <span>
                {item.explicit &&
                    <i>E</i>
                }
                {item.title}
                </span>
            </span>
            </a>
        </li>
        )}
        </ul>          
    );
}