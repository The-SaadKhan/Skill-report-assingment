export interface SkillScore {
  name: string;
  score: number;
  maxScore: number;
  icon: string;
}

export interface StudentAssessment {
  studentName: string;
  assessmentDate: string;
  overallScore: number;
  maxScore: number;
  skills: SkillScore[];
}

export const studentsData: StudentAssessment[] = [
  {
    studentName: "Sarah Mitchell",
    assessmentDate: "December 24, 2024",
    overallScore: 7,
    maxScore: 9,
    skills: [
      { name: "Pronunciation", score: 7.5, maxScore: 9, icon: "mic" },
      { name: "Fluency", score: 6.5, maxScore: 9, icon: "waves" },
      { name: "Vocabulary", score: 8, maxScore: 9, icon: "book-open" },
      { name: "Grammar", score: 6, maxScore: 9, icon: "check-circle" },
    ],
  },
  {
    studentName: "James Rodriguez",
    assessmentDate: "December 23, 2024",
    overallScore: 8.5,
    maxScore: 9,
    skills: [
      { name: "Pronunciation", score: 8.5, maxScore: 9, icon: "mic" },
      { name: "Fluency", score: 9, maxScore: 9, icon: "waves" },
      { name: "Vocabulary", score: 8, maxScore: 9, icon: "book-open" },
      { name: "Grammar", score: 8.5, maxScore: 9, icon: "check-circle" },
    ],
  },
  {
    studentName: "Emily Chen",
    assessmentDate: "December 22, 2024",
    overallScore: 5.5,
    maxScore: 9,
    skills: [
      { name: "Pronunciation", score: 5, maxScore: 9, icon: "mic" },
      { name: "Fluency", score: 5.5, maxScore: 9, icon: "waves" },
      { name: "Vocabulary", score: 6, maxScore: 9, icon: "book-open" },
      { name: "Grammar", score: 5.5, maxScore: 9, icon: "check-circle" },
    ],
  },
  {
    studentName: "Michael Thompson",
    assessmentDate: "December 21, 2024",
    overallScore: 6.5,
    maxScore: 9,
    skills: [
      { name: "Pronunciation", score: 7, maxScore: 9, icon: "mic" },
      { name: "Fluency", score: 6, maxScore: 9, icon: "waves" },
      { name: "Vocabulary", score: 6.5, maxScore: 9, icon: "book-open" },
      { name: "Grammar", score: 6.5, maxScore: 9, icon: "check-circle" },
    ],
  },
  {
    studentName: "Aisha Patel",
    assessmentDate: "December 20, 2024",
    overallScore: 9,
    maxScore: 9,
    skills: [
      { name: "Pronunciation", score: 9, maxScore: 9, icon: "mic" },
      { name: "Fluency", score: 9, maxScore: 9, icon: "waves" },
      { name: "Vocabulary", score: 8.5, maxScore: 9, icon: "book-open" },
      { name: "Grammar", score: 9, maxScore: 9, icon: "check-circle" },
    ],
  },
  {
    studentName: "David Kim",
    assessmentDate: "December 19, 2024",
    overallScore: 4.5,
    maxScore: 9,
    skills: [
      { name: "Pronunciation", score: 4, maxScore: 9, icon: "mic" },
      { name: "Fluency", score: 4.5, maxScore: 9, icon: "waves" },
      { name: "Vocabulary", score: 5, maxScore: 9, icon: "book-open" },
      { name: "Grammar", score: 4.5, maxScore: 9, icon: "check-circle" },
    ],
  },
  {
    studentName: "Sofia Martinez",
    assessmentDate: "December 18, 2024",
    overallScore: 7.5,
    maxScore: 9,
    skills: [
      { name: "Pronunciation", score: 8, maxScore: 9, icon: "mic" },
      { name: "Fluency", score: 7, maxScore: 9, icon: "waves" },
      { name: "Vocabulary", score: 7.5, maxScore: 9, icon: "book-open" },
      { name: "Grammar", score: 7.5, maxScore: 9, icon: "check-circle" },
    ],
  },
  {
    studentName: "William Brown",
    assessmentDate: "December 17, 2024",
    overallScore: 3.5,
    maxScore: 9,
    skills: [
      { name: "Pronunciation", score: 3, maxScore: 9, icon: "mic" },
      { name: "Fluency", score: 4, maxScore: 9, icon: "waves" },
      { name: "Vocabulary", score: 3.5, maxScore: 9, icon: "book-open" },
      { name: "Grammar", score: 3.5, maxScore: 9, icon: "check-circle" },
    ],
  },
  {
    studentName: "Olivia Wilson",
    assessmentDate: "December 16, 2024",
    overallScore: 8,
    maxScore: 9,
    skills: [
      { name: "Pronunciation", score: 8.5, maxScore: 9, icon: "mic" },
      { name: "Fluency", score: 8, maxScore: 9, icon: "waves" },
      { name: "Vocabulary", score: 7.5, maxScore: 9, icon: "book-open" },
      { name: "Grammar", score: 8, maxScore: 9, icon: "check-circle" },
    ],
  },
  {
    studentName: "Lucas Garcia",
    assessmentDate: "December 15, 2024",
    overallScore: 6,
    maxScore: 9,
    skills: [
      { name: "Pronunciation", score: 6, maxScore: 9, icon: "mic" },
      { name: "Fluency", score: 5.5, maxScore: 9, icon: "waves" },
      { name: "Vocabulary", score: 6.5, maxScore: 9, icon: "book-open" },
      { name: "Grammar", score: 6, maxScore: 9, icon: "check-circle" },
    ],
  },
];

// For backward compatibility
export const studentAssessment = studentsData[0];

export const getFeedback = (score: number): { level: string; message: string; color: string } => {
  if (score >= 8) {
    return {
      level: "Excellent",
      message: "Demonstrates exceptional command of spoken English. Uses a wide range of pronunciation features with sustained flexibility. Speaks fluently with only rare repetition or self-correction. Is proficient in using sophisticated vocabulary and idiomatic structures with full flexibility.",
      color: "score-excellent",
    };
  } else if (score >= 6) {
    return {
      level: "Good",
      message: "Has reasonably good pronunciation with some accent. Demonstrates generally good fluency and coherence while speaking but may take occasional pauses. Is proficient in using sophisticated vocabulary and idiomatic structures. Proficient in expressing complex thoughts using a range of grammar structures.",
      color: "score-good",
    };
  } else {
    return {
      level: "Needs Improvement",
      message: "Shows limited range of pronunciation features. Speech may be slow with noticeable pauses and hesitations. Uses basic vocabulary with limited ability to paraphrase. Attempts complex structures but with frequent errors that may cause comprehension difficulties.",
      color: "score-needs-work",
    };
  }
};

export const getSkillFeedback = (skillName: string, score: number): string => {
  const feedbacks: Record<string, Record<string, string>> = {
    Pronunciation: {
      excellent: "Uses a wide range of pronunciation features. Sustains flexible use of features, with only occasional lapses. Is easy to understand throughout; first language accent has minimal impact on intelligibility.",
      good: "Shows all the positive features of Band 6 and some, but not all, of the positive features of Band 8. Generally maintains clear pronunciation with reasonable control of stress and intonation patterns.",
      needs: "Shows some effective use of features but this is not sustained. May have limited control of word and sentence stress, rhythm, and intonation, which may reduce clarity at times.",
    },
    Fluency: {
      excellent: "Speaks fluently with only rare repetition or self-correction. Any hesitation in speech is content-related rather than from lack of vocabulary or proper grammar. Speaks coherently with appropriate cohesion between sentences. Develops topics fully and appropriately.",
      good: "Is willing to speak at length, though may lose coherence at times due to occasional repetition, self-correction, or hesitation. Uses a range of connectives and discourse markers with some flexibility.",
      needs: "Usually maintains flow of speech but uses repetition, self-correction and/or slow speech to keep going. May over-use certain connectives and discourse markers. Produces simple speech fluently, but more complex communication causes fluency problems.",
    },
    Vocabulary: {
      excellent: "Uses vocabulary with full flexibility and precision in all topics. Uses idiomatic language naturally and accurately. Paraphrases effectively and skillfully as required.",
      good: "Has a wide enough vocabulary to discuss topics at length and make meaning clear in spite of inappropriacies. Generally paraphrases successfully. Uses less common and idiomatic vocabulary skillfully, with occasional inaccuracies.",
      needs: "Has a wide enough vocabulary to discuss topics at length but may lack precision. Is able to paraphrase, but not always successfully. Uses vocabulary resource flexibly to discuss a variety of topics.",
    },
    Grammar: {
      excellent: "Uses a full range of structures naturally and appropriately. Produces consistently accurate structures apart from 'slips' characteristic of native speaker speech. Uses complex grammatical structures with full flexibility.",
      good: "Uses a mix of simple and complex structures, but with limited flexibility. May make frequent mistakes with complex structures though these rarely cause comprehension problems. Produces error-free sentences with some frequency.",
      needs: "Produces basic sentence forms with reasonable accuracy. Uses a limited range of more complex structures, but these usually contain errors and may cause some comprehension problems. Attempts complex sentences but with variable success.",
    },
  };

  const category = score >= 8 ? "excellent" : score >= 6 ? "good" : "needs";
  return feedbacks[skillName]?.[category] || "";
};
