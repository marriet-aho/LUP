// Array of church names
const churches = [
    "Elevation Church",
    "Hillsong Church",
    "Redeemed Christian Church of God",
    "Bethel Church",
    "Lakewood Church",
    "The Potter's House",
    "Saddleback Church",
    "Life.Church"
];

// Populate the church dropdown
const churchSelect = document.getElementById('church');
churches.forEach(church => {
    const option = document.createElement('option');
    option.value = church;
    option.textContent = church;
    churchSelect.appendChild(option);
});
