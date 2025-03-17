function submitQuiz() {
    const totalQuestions = 5; // Update this if more questions are added
    let categoryScores = {
        tech: 0,
        engineering: 0,
        research: 0,
        environment: 0
    };

    // Check if all questions are answered
    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        
        if (!userAnswer) {
            alert(`Please answer question ${i} before submitting.`);
            return; // Stop execution if any question is unanswered
        }

        const answerValue = userAnswer.value;
        if (answerValue === "a" || answerValue === "b") {
            categoryScores.tech++;  // Tech-related answers
        } else if (answerValue === "c") {
            categoryScores.engineering++;  // Engineering-related answers
        } else if (answerValue === "d") {
            categoryScores.environment++;  // Environment-related answers
        }
    }

    // Sort categories based on scores in descending order
    const sortedCategories = Object.entries(categoryScores)
                                    .sort((a, b) => b[1] - a[1])
                                    .map(entry => entry[0]);

    // Career suggestions mapping with more options
    const suggestions = {
        tech: [
            "Software Developer", 
            "Data Scientist", 
            "Cybersecurity Analyst", 
            "AI Engineer", 
            "IT Manager", 
            "Cloud Architect", 
            "Database Administrator", 
            "Network Engineer"
        ],
        engineering: [
            "Mechanical Engineer", 
            "Civil Engineer", 
            "Electrical Engineer", 
            "Automobile Engineer", 
            "Aerospace Engineer", 
            "Biomedical Engineer", 
            "Robotics Engineer", 
            "Structural Engineer"
        ],
        research: [
            "Mathematician", 
            "Physicist", 
            "Data Analyst", 
            "Astronomer", 
            "Lab Scientist", 
            "Economist", 
            "Biostatistician", 
            "Geneticist"
        ],
        environment: [
            "Environmental Scientist", 
            "Marine Biologist", 
            "Ecologist", 
            "Wildlife Biologist", 
            "Conservationist", 
            "Forestry Expert", 
            "Climate Change Analyst", 
            "Agricultural Scientist"
        ]
    };

    // Get top category and pick 3 random career options from it
    let topCategory = sortedCategories[0];
    let topCareerOptions = suggestions[topCategory].sort(() => 0.5 - Math.random()).slice(0, 3);

    // Store results in localStorage
    localStorage.setItem("careerSuggestions", JSON.stringify(topCareerOptions));

    // Redirect to results page
    window.location.href = "results.html";
}
