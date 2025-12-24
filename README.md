# Student Speaking Assessment Report

A premium UI for displaying student speaking assessment results with dynamic feedback.

---

## 🚀 How to Run

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

---

## 📊 Where Scores Are Stored

**File:** `src/data/studentData.ts`

```typescript
// Data structure
{
  studentName: "Sarah Mitchell",
  assessmentDate: "December 24, 2024",
  overallScore: 7,      // 0-9 scale
  maxScore: 9,
  skills: [
    { name: "Pronunciation", score: 7.5, maxScore: 9 },
    { name: "Fluency", score: 6.5, maxScore: 9 },
    { name: "Vocabulary", score: 8, maxScore: 9 },
    { name: "Grammar", score: 6, maxScore: 9 }
  ]
}
```

Contains 10 pre-loaded students with varying scores.

---

## 🧠 How Feedback Logic Works

**Functions:** `getFeedback()` and `getSkillFeedback()` in `studentData.ts`

### Score Ranges

| Score | Level | Description |
|-------|-------|-------------|
| ≥ 8 | Excellent | Exceptional command, wide range of features |
| 6 - 7.9 | Good | Reasonably good with some inconsistencies |
| < 6 | Needs Improvement | Limited range, frequent errors |

### Dynamic Updates

When scores change:
- Progress bars update automatically
- Radar chart reshapes
- Feedback text regenerates
- Colors adjust (green/yellow/red)

---

## 📥 PDF Export

Click the **"Export PDF"** button in the header to download the report.

---

## 🛠 Tech Stack

React • TypeScript • Tailwind CSS • Recharts • html2canvas • jsPDF
