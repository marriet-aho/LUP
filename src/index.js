document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const entries = Object.fromEntries(formData.entries());

    // Display the submitted form data in the console for now
    console.log('Form Submission:', entries);

    alert('Thank you for registering!'); // Replace this with actual form handling
});



// Array of church names
const churches = [
    "Elevation Church",
    "Hillsong Church",
    "Redeemed Christian Church of God",
    "Bethel Church",
    "Lakewood Church",
    "The Potter's House",
    "Saddleback Church",
    "Life.Church",
    "Abundant Life Church",
"All Nations Church",
"Bethel Church",
"Calvary Chapel",
"Christ Embassy",
"Christ the King Church",
"Church of the Nazarene",
"City Harvest Church",
"Cornerstone Church",
"Dominion Chapel",
"Elevation Church",
"Evangelical Free Church",
"Faith Community Church",
"First Baptist Church",
"Grace Fellowship Church",
"Harvest Bible Chapel",
"Hillsong Church",
"Holy Cross Church",
"International House of Prayer (IHOP)",
"Jubilee Christian Center",
"King's Chapel",
"Lakewood Church",
"Life.Church",
"Living Word Christian Center",
"Mountain of Fire and Miracles Ministries",
"New Creation Church",
"Potter's House Church",
"Redeemed Christian Church of God (RCCG)",
"Rock Church",
"Saddleback Church",
"Salvation Army",
"Seventh-Day Adventist Church",
"St. Patrick's Cathedral",
"Streams of Joy International",
"Tabernacle of Praise",
"Trinity Church",
"United Methodist Church",
"Victory Life Church",
"Vineyard Church",
"Word of Faith Church",
"Zion Baptist Church"
];

// Populate the church dropdown
const churchSelect = document.getElementById('church');
churches.forEach(church => {
    const option = document.createElement('option');
    option.value = church;
    option.textContent = church;
    churchSelect.appendChild(option);
});


// Array of country names (A to Z)
const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
    "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
    "Estonia", "Eswatini (fmr. \"Swaziland\")", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
    "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands",
    "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
    "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka",
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand",
    "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
    "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

// Populate the country dropdown
const countrySelect = document.getElementById('country');
countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
});
