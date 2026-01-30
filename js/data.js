const analyticsData = [];

for (let i = 1; i <= 100; i++) {
    analyticsData.push({
        id: i,
        page: "Blog Post " + ((i % 10) + 1),
        views: Math.floor(Math.random() * 500 + 50),
        visitors: Math.floor(Math.random() * 300 + 20),
        bounce: (Math.random() * 70).toFixed(2) + "%"
    });
}
