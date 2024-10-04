// script.js

// Specifierade turneringsdatum (börjar om 250 dagar och sedan 50 dagar mellan varje)
const tournamentDates = [
    '2025-06-10',
    '2025-07-30',
    '2025-09-18',
    '2025-11-07',
    '2025-12-27',
    '2026-02-15',
    '2026-04-06',
    '2026-05-26'
];

// Funktion för att beräkna och visa nedräkning i dagar
document.addEventListener('DOMContentLoaded', () => {
    const countdownElements = document.querySelectorAll('.countdown');

    countdownElements.forEach((element, index) => {
        // Använd Date-objekt för att säkerställa att vi hanterar datum korrekt
        const targetDate = new Date(tournamentDates[index]);
        const today = new Date();

        // Räkna skillnaden i dagar
        const difference = targetDate.getTime() - today.getTime();
        const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));

        // Visa resultatet
        if (daysRemaining >= 0) {
            element.innerText = `${daysRemaining} dagar kvar`;
        } else {
            element.innerText = 'Turneringen har redan ägt rum';
        }
    });
});
