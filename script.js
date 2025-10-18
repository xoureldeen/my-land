document.addEventListener('DOMContentLoaded', function () {
    const STATIC_SUB_COUNT = '280';
    const STATIC_VIEW_COUNT = '42K';

    // --- Navbar/Dropdown Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');

    menuToggle.addEventListener('click', function () {
        dropdownMenu.classList.toggle('open');
        const icon = menuToggle.querySelector('i');
        if (dropdownMenu.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // 'X' icon when open
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); // Hamburger icon when closed
        }
    });

    // --- Home Page Functions ---
    if (document.getElementById('subscribers')) {
        // Update YouTube stats (Home Page)
        const subscribersElement = document.getElementById('subscribers');
        const viewsElement = document.getElementById('total-views');

        // Simulate a slight delay for a "loading" effect
        setTimeout(() => {
            subscribersElement.textContent = STATIC_SUB_COUNT;
            viewsElement.textContent = STATIC_VIEW_COUNT;
        }, 500);

        // Scroll to Music section when "MUSIC" link is clicked
        const navMusicLink = document.getElementById('nav-music');
        if (navMusicLink) {
            navMusicLink.addEventListener('click', function(e) {
                // Check if we are on the index.html page
                if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/index.html') {
                    e.preventDefault();
                    document.getElementById('tracks').scrollIntoView({ behavior: 'smooth' });
                    // Close the menu after clicking on mobile
                    if (dropdownMenu.classList.contains('open')) {
                        menuToggle.click();
                    }
                }
                // If not on index.html, it will follow the link (index.html#tracks)
            });
        }
    }

    // --- Who I Am Page Functions (Gallery Modal) ---
    if (document.getElementById('gallery-section')) {
        const galleryBtn = document.getElementById('open-gallery-btn');
        const modal = document.getElementById('gallery-modal');
        const closeModalBtn = document.querySelector('.close-btn');
        const galleryViewer = document.querySelector('.gallery-viewer');
        const galleryThumbnail = document.getElementById('gallery-thumbnail');

        // Array of photo URLs (Updated with your new images)
        const galleryPhotos = [
            'https://i.ibb.co/NdgJdhBV/IMG-20251018-WA0014.jpg', // Thumbnail (IMG-20251018-WA0014.jpg)
            'https://i.ibb.co/h1WzJQty/IMG-20251018-WA0003.jpg', 
            'https://i.ibb.co/B2HCg1fn/IMG-20251018-WA0005.jpg',
            'https://i.ibb.co/Lhc2Zbcp/IMG-20251018-WA0008.jpg',
            'https://i.ibb.co/7xnLzjm9/IMG-20251018-WA0013.jpg',
            'https://i.ibb.co/mVnB5058/IMG-20251018-WA0011.jpg',
            'https://i.ibb.co/Xfzz3z06/IMG-20251018-WA0012.jpg',
            'https://i.ibb.co/DftZN156/IMG-20251018-WA0015.jpg',
            'https://i.ibb.co/R4jZr2tW/IMG-20251018-041854.jpg',
            'https://i.ibb.co/LXGD6rBV/IMG-20251018-042109.jpg',
            // Add more photos here
        ];

        // Set the first photo from the array as the thumbnail
        if (galleryPhotos.length > 0) {
            galleryThumbnail.src = galleryPhotos[0];
        }

        // Populate the gallery viewer and handle full-size click
        function populateGallery() {
            galleryViewer.innerHTML = ''; // Clear existing
            galleryPhotos.forEach(url => {
                const img = document.createElement('img');
                img.src = url;
                img.alt = 'DABSH Gallery Photo';
                img.classList.add('gallery-image');
                img.addEventListener('click', () => showFullSize(url));
                galleryViewer.appendChild(img);
            });
        }
        
        // Simple function to open the gallery
        galleryBtn.addEventListener('click', function(e) {
            e.preventDefault();
            populateGallery();
            modal.style.display = 'block';
        });

        // Close modal functions
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Function to show a photo in a simpler, full-screen view (can be enhanced with a proper lightbox)
        function showFullSize(url) {
            // For simplicity, we'll just open the image in a new tab. 
            // For a production site, you'd integrate a full lightbox/carousel here.
            window.open(url, '_blank');
        }
    }
});
