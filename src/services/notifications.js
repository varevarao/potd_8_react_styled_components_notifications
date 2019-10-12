export const fetchNotifications = () => {
    return Promise.resolve({
        data: [
            {
                image: "/paulo.jpeg",
                name: "Paulo Souza",
                description: "visualizou seu perfil",
                // Two hours ago
                time: Date.now() - (2 * 60 * 60 * 1000),
            },
            {
                image: "/pet-shop.jpeg",
                name: "Pet Shop do Paulo",
                description: "comentou no seu post",
                // One hour ago
                time: Date.now() - (1 * 60 * 60 * 1000),
            },
            {
                image: "/paulo.jpeg",
                name: "Paulo Souza",
                description: "visualizou seu perfil",
                // Three hours ago
                time: Date.now() - (3 * 60 * 60 * 1000),
            },
            {
                image: "/paulo.jpeg",
                name: "Paulo Souza",
                description: "está lhe seguindo",
                // Two hours ago
                time: Date.now() - (2 * 60 * 60 * 1000),
            },
            {
                image: "/pet-shop.jpeg",
                name: "Pet Shop de Paulo",
                description: "está lhe seguindo",
                // One hours ago
                time: Date.now() - (1 * 60 * 60 * 1000),
            },
            {
                image: "/paulo.jpeg",
                name: "Paulo Souza",
                description: "visualizou seu perfil",
                // Two hours ago
                time: Date.now() - (2 * 60 * 60 * 1000),
            },
        ]
    });
}