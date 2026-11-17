let stud_name = "Malatag, Balligi M."
let stud_id = "2026-6354"
let year_lvl = "II"
let program = "Information Technology"

const courses = {
    course1: { course: "Science Technology and Society", score: 92 },
    course2: { course: "Networking 1", score: 89 },
    course3: { course: "Event-Driven Programming", score: 90 },
    course4: { course: "Integrative Programming and Technologies", score: 95 },
    course5: { course: "Application Development and Emerging Technologies", score: 96 },
    course6: { course: "Pathfit 2", score: 88 },
    course7: { course: "Arts Appreciation", score: 92 }
};
let GWA = Math.round((courses.course1.score + courses.course2.score + courses.course3.score + courses.course4.score + courses.course5.score + courses.course6.score + courses.course7.score) / 7)


let letterGrade;
if (GWA >= 98 && GWA <= 100) {
    letterGrade = "A";
}else if (GWA >= 94 && GWA < 98) {
    letterGrade = "A-";
}else if (GWA >= 90 && GWA < 94) {
    letterGrade = "B+";
}else if (GWA >= 86 && GWA < 90) {
    letterGrade = "B";
}else if (GWA >= 83 && GWA < 86) {
    letterGrade = "B-";
}else if (GWA >= 80 && GWA < 83) {
    letterGrade = "C+";
}else if (GWA >= 77 && GWA < 80) {
    letterGrade = "C";
}else if (GWA >= 73 && GWA < 77) {
    letterGrade = "D";
}else if (GWA <= 72 && GWA >= 0) {
    letterGrade = "F";
}

console.log("Student Name: " + stud_name)
console.log("Student ID: " + stud_id)
console.log("Year Level: " + year_lvl)
console.log("Program: " + program)
console.log("\n=== Courses Enrolled ===")
console.log(courses.course1.course + "\n" + courses.course2.course + "\n" + courses.course3.course + "\n" + courses.course4.course + "\n" + courses.course5.course + "\n" + courses.course6.course + "\n" + courses.course7.course)
console.log("\nGWA: " + GWA + "\t\tLetter Grade: " + letterGrade)

