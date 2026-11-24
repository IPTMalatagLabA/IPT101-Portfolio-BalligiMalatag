const studentRecord = {
    name: "Balligi Malatag",
    id: "2026-6354",
    program: "Information Technology",
    yearLevel: "II",
    schoolYear: "2026-2027",
    
    getEnrollmentDetails(semester, campus) {
        return `[${this.schoolYear} | ${semester}] Student ${this.name} (ID: ${this.id}) from ${this.program} (${this.program} (${this.yearLevel}) is registered at ${campus}.)`;
    }
};

console.log(studentRecord.getEnrollmentDetails("2nd Semester", "Main Campus"));