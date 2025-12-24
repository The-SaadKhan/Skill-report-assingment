import { TrendingUp, Target, Award, Lightbulb } from "lucide-react";
import { SkillScore, getSkillFeedback, getFeedback } from "@/data/studentData";

interface FeedbackSectionProps {
  skills: SkillScore[];
  overallScore: number;
}

export const FeedbackSection = ({ skills, overallScore }: FeedbackSectionProps) => {
  const overallFeedback = getFeedback(overallScore);
  
  // Find strengths and areas for improvement
  const sortedSkills = [...skills].sort((a, b) => b.score - a.score);
  const strengths = sortedSkills.filter(s => s.score >= 7);
  const improvements = sortedSkills.filter(s => s.score < 7);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-card shadow-card border border-border p-6 md:p-8 animate-slide-up" style={{ animationDelay: "400ms" }}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Detailed Feedback</h2>
            <p className="text-sm text-muted-foreground">Personalized insights based on your performance</p>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Strengths */}
          {strengths.length > 0 && (
            <div className="p-5 rounded-xl bg-score-excellent/5 border border-score-excellent/20">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-score-excellent" />
                <h3 className="font-semibold text-foreground">Your Strengths</h3>
              </div>
              <ul className="space-y-3">
                {strengths.map((skill) => (
                  <li key={skill.name} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-score-excellent mt-2 shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-primary ml-2 text-sm">({skill.score}/{skill.maxScore})</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {getSkillFeedback(skill.name, skill.score)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Areas for Improvement */}
          {improvements.length > 0 && (
            <div className="p-5 rounded-xl bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Areas to Focus On</h3>
              </div>
              <ul className="space-y-3">
                {improvements.map((skill) => (
                  <li key={skill.name} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-accent ml-2 text-sm">({skill.score}/{skill.maxScore})</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {getSkillFeedback(skill.name, skill.score)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tips */}
          <div className="p-5 rounded-xl bg-secondary/50 border border-border">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Next Steps</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Practice speaking for 15-20 minutes daily with native content
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Record yourself and compare with model answers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Focus on {improvements[0]?.name.toLowerCase() || "all skills"} for the most impact
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Schedule your next assessment in 2-4 weeks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
