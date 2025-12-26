export const containerVariants = {
    hidden: {},
    visible: {
        transition: {
        staggerChildren: 0.15, // 0.15s between cards
        },
    },
};

export const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

