import { getFeedback } from "@/data/studentData";

interface OverallScoreCardProps {
  score: number;
  maxScore: number;
  studentName: string;
  assessmentDate: string;
}

export const OverallScoreCard = ({ score, maxScore, studentName, assessmentDate }: OverallScoreCardProps) => {
  const percentage = (score / maxScore) * 100;
  const feedback = getFeedback(score);
  const circumference = 2 * Math.PI * 88;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-card shadow-card border border-border p-8 animate-scale-in">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-1">
              Speaking Assessment Report
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {studentName}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">{assessmentDate}</p>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
            <div className={`w-2 h-2 rounded-full bg-${feedback.color}`} />
            <span className="text-sm font-medium text-foreground">{feedback.level}</span>
          </div>
        </div>

        {/* Score Circle */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="relative">
            <svg className="w-52 h-52 transform -rotate-90" viewBox="0 0 200 200">
              {/* Background circle */}
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="12"
              />
              {/* Progress circle */}
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke="url(#scoreGradient)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out"
                style={{ 
                  animation: "progressRing 1.5s ease-out forwards",
                }}
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Score text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-gradient">{score}</span>
              <span className="text-muted-foreground text-lg font-medium">/ {maxScore}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider mt-2">
                Overall Band
              </span>
            </div>
          </div>

          {/* Feedback */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Performance Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {feedback.message}
            </p>
            
            {/* Band descriptor */}
            <div className="mt-6 p-4 rounded-xl bg-secondary/30 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">{score}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">IELTS Band Score</p>
                  <p className="text-xs text-muted-foreground">
                    {score >= 8 ? "Very Good User" : score >= 7 ? "Good User" : score >= 6 ? "Competent User" : "Modest User"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progressRing {
          from {
            stroke-dashoffset: ${circumference};
          }
          to {
            stroke-dashoffset: ${strokeDashoffset};
          }
        }
      `}</style>
    </div>
  );
};
