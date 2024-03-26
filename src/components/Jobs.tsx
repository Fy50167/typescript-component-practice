'use client;';

import { useState, useEffect } from 'react';

// `https://hacker-news.firebaseio.com/v0/jobstories.json`

const Jobs = () => {
    const [currentJobs, setCurrentJobs] = useState<any[]>([]);
    let timeout: any = null;

    const fetchJobIds = async () => {
        try {
            const res = await fetch(
                `https://hacker-news.firebaseio.com/v0/jobstories.json`
            );
            const jobIds = await res.json();
            return jobIds;
        } catch (error: any) {
            throw new Error(error);
        }
    };

    const fetchJobDetails = async () => {
        try {
            const jobIds = await fetchJobIds();
            const jobData = await Promise.all(
                jobIds
                    .map((id: number) =>
                        fetch(
                            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
                        )
                    )
                    .then((res: any) => res.json())
            );
            setCurrentJobs(jobData);
        } catch (error: any) {
            throw new Error(error);
        }
    };

    useEffect(() => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fetchJobDetails();
        }, 1000);
    }, [currentJobs]);

    return <div></div>;
};

export default Jobs;
