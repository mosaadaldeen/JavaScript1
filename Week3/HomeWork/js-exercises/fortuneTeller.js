'use-strict';
const numChildren = [2, 5, 6, 8, 4];
const partnerNames = ['Abdo', 'Mohammad', 'Ahmed', 'Wouter', 'Samir'];
const locations = ['Netherlands', 'Canada', 'Japan', 'Germany', 'Mexico'];
const jobs = ['Writer', 'Engineer', 'Marketer', 'Programmer', 'Designer'];
const tellFortune = (numChildren, partnerNames, locations, jobs) => {
    const randomJobs = jobs[Math.floor(Math.random() * jobs.length)];
    const randomLocations = locations[Math.floor(Math.random() * locations.length)];
    const randomChildren = numChildren[Math.floor(Math.random() * numChildren.length)];
    const randomNames = partnerNames[Math.floor(Math.random() * partnerNames.length)];
    console.log(`You will be ${randomJobs} in ${randomLocations}, and married to ${randomNames} with ${randomChildren} kids.`);
};
tellFortune(numChildren, partnerNames, locations, jobs);