console.log("Website Loaded Successfully");

const semesterData = {

    1: [
        ["Pendidikan Agama", 90],
        ["PPKn", 96],
        ["Bahasa Indonesia", 92],
        ["Matematika", 94],
        ["Sejarah Indonesia", 89],
        ["Bahasa Inggris", 95],
        ["PJOK", 94],
        ["Fisika", 92],
        ["Biologi", 95],
        ["Kimia", 95],
        ["Informatika", 94],
        ["Geografi", 88],
        ["Seni dan Prakarya: Proyeksi", 94],
        ["Sosiologi", 95],
        ["Ekonomi", 95],
        ["Muatan Lokal", 87]
    ],

    2: [
        ["Pendidikan Agama", 89],
        ["PPKn", 90],
        ["Bahasa Indonesia", 86],
        ["Matematika", 100],
        ["Sejarah Indonesia", 92],
        ["Bahasa Inggris", 97],
        ["PJOK", 95],
        ["Fisika", 91],
        ["Biologi", 93],
        ["Kimia", 97],
        ["Informatika", 95],
        ["Geografi", 93],
        ["Seni dan Prakarya: Proyeksi", 91],
        ["Sosiologi", 95],
        ["Ekonomi", 97],
        ["Muatan Lokal", 96]
    ],

    3: [
        ["Pendidikan Agama", 95],
        ["PPKn", 100],
        ["Bahasa Indonesia", 84],
        ["Matematika", 100],
        ["Sejarah Indonesia", 95],
        ["Bahasa Inggris", 100],
        ["PJOK", 94],
        ["Fisika", 92],
        ["Biologi", 85],
        ["Kimia", 90],
        ["Informatika", 100],
        ["Matematika TL", 98],
        ["Bahasa Mandarin", 92],
        ["Seni dan Prakarya", 85],
        ["Muatan Lokal", 91]
    ],

    4: [
        ["Pendidikan Agama", 95],
        ["PPKn", 95],
        ["Bahasa Indonesia", 94],
        ["Matematika", 100],
        ["Sejarah Indonesia", 92],
        ["Bahasa Inggris", 99],
        ["PJOK", 92],
        ["Fisika", 94],
        ["Biologi", 95],
        ["Kimia", 99],
        ["Informatika", 93],
        ["Matematika TL", 100],
        ["Bahasa Mandarin", 93],
    ]

};

const colors = [
    "bg-success",
    "bg-info",
    "bg-warning",
    "bg-danger",
    "bg-primary",
    "bg-secondary"
];

const table = document.getElementById("gradeTable");
const averageGrade = document.getElementById("averageGrade");
const averageProgress = document.getElementById("averageProgress");

function loadSemester(semester) {
    table.innerHTML = "";
    let total = 0;
    semesterData[semester].forEach((item, index) => {
        total += item[1];
        const randomColor = colors[index % colors.length];
        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item[0]}</td>
            <td>${item[1]}</td>
            <td width="35%">
                <div class="progress">
                    <div class="progress-bar ${randomColor}"
                        style="width:${item[1]}%">
                    </div>
                </div>
            </td>
        </tr>
        `;
    });

    const average = (
        total / semesterData[semester].length
    ).toFixed(1);
    averageGrade.innerHTML = average;
    averageProgress.style.width = average + "%";
    averageProgress.innerHTML = average + "%";
}

loadSemester(1);

const buttons = document.querySelectorAll(".semester-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });
        this.classList.add("active");
        const semester = this.dataset.semester;
        loadSemester(semester);
        console.log(
            "Loaded semester " + semester
        );
    });
});

const contacts = document.querySelectorAll(".copy-contact");
contacts.forEach(contact => {
    contact.addEventListener("click", () => {
        const text = contact.dataset.copy;
        navigator.clipboard.writeText(text);
        const original = contact.innerHTML;
        contact.innerHTML = "Copied!";
        setTimeout(() => {
            contact.innerHTML = original;
        }, 1500);
    });
});