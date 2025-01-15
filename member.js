function skillsMember() {
    return {
        name: "John Doe",
        age: 30,
        skills: ["HTML", "CSS", "JS"],
        // Method
        showSkills() {
            this.skills.forEach((skill, index) => {
                console.log(`${index + 1}. ${skill}`);
            });
        },
    };
}