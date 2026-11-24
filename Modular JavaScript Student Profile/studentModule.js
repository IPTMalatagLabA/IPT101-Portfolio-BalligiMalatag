export const studentDetails = {
    name: "Balligi Malatag",
    id: "2026-6354",
    program: "Information Technology",
    yearLevel: "II",
    schoolYear: "2026-2027",
};

export function printSummary(student, status) {
    return `Student: ${student.name} | ID: ${student.id} | Program: ${student.program} | Status: ${status}`;
}