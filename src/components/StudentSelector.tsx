import { ChevronDown, User } from "lucide-react";
import { studentsData, StudentAssessment, getFeedback } from "@/data/studentData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StudentSelectorProps {
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export const StudentSelector = ({ selectedIndex, onSelect }: StudentSelectorProps) => {
  const getScoreBadgeColor = (score: number) => {
    if (score >= 8) return "bg-score-excellent/20 text-score-excellent";
    if (score >= 6) return "bg-score-good/20 text-score-good";
    return "bg-score-needs-work/20 text-score-needs-work";
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-card shadow-card border border-border p-6 animate-slide-up">
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Select Student</h2>
            <p className="text-sm text-muted-foreground">View different assessment reports</p>
          </div>
        </div>

        <Select
          value={selectedIndex.toString()}
          onValueChange={(value) => onSelect(parseInt(value))}
        >
          <SelectTrigger className="w-full bg-secondary/50 border-border hover:bg-secondary/70 transition-colors">
            <SelectValue placeholder="Select a student" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            {studentsData.map((student, index) => (
              <SelectItem 
                key={index} 
                value={index.toString()}
                className="cursor-pointer hover:bg-secondary/50"
              >
                <div className="flex items-center justify-between w-full gap-4">
                  <span className="font-medium">{student.studentName}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getScoreBadgeColor(student.overallScore)}`}>
                    {student.overallScore}/9
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Quick preview cards */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2">
          {studentsData.slice(0, 5).map((student, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`p-3 rounded-xl border transition-all duration-200 text-left ${
                selectedIndex === index
                  ? "bg-primary/10 border-primary/30 ring-1 ring-primary/20"
                  : "bg-secondary/30 border-border hover:bg-secondary/50"
              }`}
            >
              <p className="text-xs font-medium text-foreground truncate">{student.studentName.split(' ')[0]}</p>
              <p className={`text-lg font-bold ${
                student.overallScore >= 8 ? "text-score-excellent" :
                student.overallScore >= 6 ? "text-score-good" : "text-score-needs-work"
              }`}>
                {student.overallScore}
              </p>
            </button>
          ))}
        </div>
        
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-5 gap-2">
          {studentsData.slice(5, 10).map((student, index) => (
            <button
              key={index + 5}
              onClick={() => onSelect(index + 5)}
              className={`p-3 rounded-xl border transition-all duration-200 text-left ${
                selectedIndex === index + 5
                  ? "bg-primary/10 border-primary/30 ring-1 ring-primary/20"
                  : "bg-secondary/30 border-border hover:bg-secondary/50"
              }`}
            >
              <p className="text-xs font-medium text-foreground truncate">{student.studentName.split(' ')[0]}</p>
              <p className={`text-lg font-bold ${
                student.overallScore >= 8 ? "text-score-excellent" :
                student.overallScore >= 6 ? "text-score-good" : "text-score-needs-work"
              }`}>
                {student.overallScore}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
