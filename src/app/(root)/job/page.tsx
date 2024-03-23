import './styles.css';

import { useState, useEffect } from 'react';

function JobListing(props) {
    return (
        <div className='job-container'>
            <a className='title' href={props.url}>
                <h2>{props.title}</h2>
            </a>
            <div className='user-info'>
                <p className='user'>
                    By {props.by} | {props.time}
                </p>
            </div>
        </div>
    );
}

export default function App() {
    const [jobs, setJobs] = useState([]);

    const fetchJobIds = async () => {
        try {
            const res = await fetch(
                `https://hacker-news.firebaseio.com/v0/jobstories.json`
            );
            const jobIds = res.json();
            return jobIds;
        } catch (error) {
            throw new Error(error);
        }
    };

    const fetchJobDetails = async () => {
        try {
            const jobIds = await fetchJobIds();
            const jobData = await Promise.all(
                jobIds.map((id) =>
                    fetch(
                        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
                    ).then((res) => res.json())
                )
            );
            console.log(jobData);
            setJobs(jobData);
        } catch (error) {
            throw new Error(error);
        }
    };

    useEffect(() => {
        fetchJobDetails();
    }, []);

    return (
        <div className='container'>
            <h1>Hacker News Jobs Board</h1>
            <section className='jobs-container'>
                {jobs.map((job) => (
                    <JobListing
                        url={job.url}
                        by={job.by}
                        title={job.title}
                        time={job.time}
                    />
                ))}
            </section>
        </div>
    );
}
