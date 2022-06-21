const buildContact = () => {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div');

    const contactHeader = document.createElement('h1');
    contactHeader.classList.add('contact-header');
    contactHeader.textContent = 'Contact Us!'
    contactDiv.appendChild(contactHeader);

    const contactAddress1 = document.createElement('p')
    contactAddress1.textContent = '1234 Delicious Lane'
    contactDiv.appendChild(contactAddress1);
    const contactAddress2 = document.createElement('p');
    contactAddress2.textContent = 'Columbus, OH 43201'
    contactDiv.appendChild(contactAddress2)

    const contactNumber = document.createElement('p');
    contactNumber.textContent = '(636) 028-1122'
    const contactEmail = document.createElement('p');
    contactEmail.textContent = 'redlotus@gmail.com';
    contactDiv.appendChild(contactNumber);
    contactDiv.appendChild(contactEmail);

    return contactDiv;
}

export default buildContact;