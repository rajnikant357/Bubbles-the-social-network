document.addEventListener('DOMContentLoaded', function () {
    const bannerUpload = document.getElementById('banner-upload');
    const profileUpload = document.getElementById('profile-upload');
    const bannerImage = document.getElementById('bannerImage');
    const profileImage = document.getElementById('profileImage');
    const editProfileBtn = document.getElementById('editProfileBtn');
    const userName = document.getElementById('userName');
    const userInfo = document.getElementById('userInfo');
    const viewInsightsBtn = document.getElementById('viewInsightsBtn');
    const engagementInsights = document.getElementById('engagement-insights');
    const toggleBtn = engagementInsights.querySelector('.toggle-btn');
    const collapsibleContent = engagementInsights.querySelector('.collapsible-content');

    function handleImageUpload(event, imgElement) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imgElement.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    bannerUpload.addEventListener('change', (e) => handleImageUpload(e, bannerImage));
    profileUpload.addEventListener('change', (e) => handleImageUpload(e, profileImage));

    let isEditing = false;

    editProfileBtn.addEventListener('click', function () {
        if (isEditing) {
            this.textContent = 'Edit Profile';
            userName.contentEditable = false;
            userInfo.contentEditable = false;
        } else {
            this.textContent = 'Save Profile';
            userName.contentEditable = true;
            userInfo.contentEditable = true;
        }
        isEditing = !isEditing;
    });

    function toggleInsights() {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        collapsibleContent.classList.toggle('expanded');
        if (!isExpanded) {
            renderChart();
        }
    }

    viewInsightsBtn.addEventListener('click', toggleInsights);
    toggleBtn.addEventListener('click', toggleInsights);

    function renderChart() {
        const ctx = document.getElementById('engagementChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed',
                    'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Likes',
                    data: [12, 19, 3, 5, 2, 3, 10],
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                }, {
                    label: 'Comments',
                    data: [7, 11, 5, 8, 3, 7, 9],
                    borderColor: 'rgb(54, 162, 235)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
const list = document.querySelectorAll(".list");
function activelink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activelink));

