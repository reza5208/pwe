// Helper functions
function getCurrentMonthYear() {
    const date = new Date();
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

function getMonthName(month) {
    return monthNames[parseInt(month) - 1];
}

function saveToLocal() {
    localStorage.setItem(`dailyRecords_${currentMonthKey}`, JSON.stringify(dailyRecords));
}

function loadTrips() {
    const destinationDropdown = document.getElementById("destination");
    destinationDropdown.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Pilih Destinasi --";
    destinationDropdown.appendChild(defaultOption);

    trips.forEach(trip => {
        const option = document.createElement("option");
        option.value = trip;
        option.textContent = trip;
        destinationDropdown.appendChild(option);
    });
}

function formatDateForPDF(date) {
    const [year, month, day] = date.split("-");
    return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year.slice(-2)}`;
}

function formatTime(time) {
    return time ? time : "Tiada rekod";
}

function calculateOT(clockIn, clockOut, date, trips) {
    if (!clockIn || !clockOut) return 0;

    const convertToMinutes = (time) => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    };

    const startTime = convertToMinutes(clockIn);
    const endTime = convertToMinutes(clockOut);
    const isNextDay = endTime < startTime;
    const adjustedEndTime = isNextDay ? endTime + 24 * 60 : endTime;

    const workEnd = 17 * 60; // Weekday work ends at 17:00
    const saturdayThreshold = 14 * 60; // Saturday work ends at 14:00

    let otMinutes = 0;

    if (new Date(date).getDay() === 0) {
        // Sunday: Count all hours as OT, regardless of trips
        otMinutes = adjustedEndTime - startTime;
    } else {
        // For other days, check for "KLIA Cargo" trips
        if (trips.some(trip => trip.startsWith("KLIA Cargo"))) return 0;

        if (new Date(date).getDay() === 6) {
            // Saturday: OT starts after 14:00
            otMinutes = Math.max(adjustedEndTime - Math.max(startTime, saturdayThreshold), 0);
        } else {
            // Weekdays: OT starts after 17:00
            otMinutes = Math.max(adjustedEndTime - Math.max(startTime, workEnd), 0);
        }
    }

    return otMinutes / 60;
}
