// js/modules/navigation.js
export class Navigation {
    static load() {
        const nav = document.createElement('nav');
        nav.innerHTML = `
            <ul>
                <li><button data-page="home">Home</button></li>
                <li><button data-page="weather">Weather</button></li>
                <li><button data-page="news">News</button></li>
                <li><button data-page="profile">Profile</button></li>
            </ul>
        `;
        document.body.prepend(nav);
        
        // Add event listeners for navigation
        nav.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                const page = button.dataset.page;
                window.dispatchEvent(new CustomEvent('pageChange', { detail: page }));
            });
        });
    }
}