function addJob(){
    const section = document.getElementById('employment-section');
    const newJob = document.createElement('div');
    newJob.classList.add('job-entry');
    newJob.innerHTML =`<label>Company Name</label> <input type="text" placeholder="Type here"/>
    <label>Official Job Title</label> <input tyoe="text" placeholder="Type here"/>
    <label>Start Date</label> <input type="month"/>
    <label>End Date</label> <input type="month" placeholder="or 'present'"/>
    <label>Reason for Leaving</label> <input type="text" placeholder="Type here"/>`;
    section.appendChild(newJob);      
}
function addCert() {
    const certSection = document.getElementById('cert-section');
    const newCert = document.createElement('div');
    newCert.classList.add('cert-entry');
    newCert.innerHTML = `<label>Name of Certification</label> <input type="text" placeholder="Type here"/>
    <label>Issuing Authority</label> <input type="text" placeholder="Type here"/>
    <label>Issue Date</label> <input type="text" placeholder="Type here"/>`;
    certSection.appendChild(newCert);
}