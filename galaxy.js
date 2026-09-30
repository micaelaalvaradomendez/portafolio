/**
 * GalaxyBackground - Animated cosmic backdrop with nebulae, twinkling stars, and shooting stars.
 * Replicates the aesthetic of paginaConsultora for Micaela's portfolio.
 */
(function() {
    function initGalaxy() {
        const bgContainer = document.getElementById('galaxy-bg');
        if (!bgContainer) return;

        // Clean existing stars if any
        bgContainer.innerHTML = `
            <div class="nebula nebula-blue"></div>
            <div class="nebula nebula-purple"></div>
            <div class="nebula nebula-pink"></div>
            <div class="stars-container" id="stars-container"></div>
            <div class="shooting-stars-container" id="shooting-stars-container"></div>
        `;

        const starsContainer = document.getElementById('stars-container');
        const shootingStarsContainer = document.getElementById('shooting-stars-container');

        // Generate twinkling stars
        const starCount = window.innerWidth < 768 ? 60 : 110;
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = (Math.random() * 2 + 1).toFixed(1); // 1px to 3px
            const delay = (Math.random() * 5).toFixed(2);
            const duration = (Math.random() * 3 + 2).toFixed(2);

            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDelay = `${delay}s`;
            star.style.animationDuration = `${duration}s`;

            fragment.appendChild(star);
        }
        starsContainer.appendChild(fragment);

        // Shooting stars generator
        function triggerShootingStar() {
            if (!shootingStarsContainer) return;
            // Limit active shooting stars
            if (shootingStarsContainer.children.length >= 2) return;

            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';
            shootingStar.style.top = `${Math.random() * 45}%`;
            shootingStar.style.left = `${Math.random() * 70 + 10}%`;

            shootingStarsContainer.appendChild(shootingStar);

            setTimeout(() => {
                shootingStar.remove();
            }, 1400);
        }

        // Fire shooting star every 5 to 8 seconds
        setInterval(triggerShootingStar, 6500);
        setTimeout(triggerShootingStar, 2000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGalaxy);
    } else {
        initGalaxy();
    }
})();

