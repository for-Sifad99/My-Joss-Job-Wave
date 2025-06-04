const myJobsPromise = (email) => {
    return fetch(`http://localhost:3000/jobs/applications?email=${email}`)
    .then(res => res.json());
};

export default myJobsPromise;