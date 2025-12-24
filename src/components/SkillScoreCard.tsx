import { Mic, Waves, BookOpen, CheckCircle } from "lucide-react";
import { SkillScore, getSkillFeedback, getFeedback } from "@/data/studentData";

interface SkillScoreCardProps {
  skill: SkillScore;
  index: number;
}

const iconMap: Record<string, React.ElementType> = {
  mic: Mic,
  waves: Waves,
  "book-open": BookOpen,
  "check-circle": CheckCircle,
};

export const SkillScoreCard = ({ skill, index }: SkillScoreCardProps) => {
  const percentage = (skill.score / skill.maxScore) * 100;
  const feedback = getFeedback(skill.score);
  const Icon = iconMap[skill.icon] || CheckCircle;
  const skillFeedback = getSkillFeedback(skill.name, skill.score);

  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-gradient-card shadow-card border border-border p-6 hover:border-primary/30 transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{skill.name}</h3>
              <p className="text-xs text-muted-foreground">{feedback.level}</p>
            </div>
          </div>
          
          <div className="text-right">
            <span className="text-2xl font-bold text-gradient">{skill.score}</span>
            <span className="text-muted-foreground text-sm">/{skill.maxScore}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative h-2 rounded-full bg-muted overflow-hidden mb-4">
          <div 
            className="absolute inset-y-0 left-0 rounded-full progress-animate"
            style={{ 
              width: `${percentage}%`,
              background: "var(--gradient-primary)",
              animationDelay: `${index * 100 + 300}ms`
            }}
          />
        </div>

        {/* Feedback */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {skillFeedback}
        </p>
      </div>
    </div>
  );
};
