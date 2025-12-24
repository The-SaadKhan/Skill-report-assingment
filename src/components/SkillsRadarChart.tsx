import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { SkillScore } from "@/data/studentData";

interface SkillsRadarChartProps {
  skills: SkillScore[];
}

export const SkillsRadarChart = ({ skills }: SkillsRadarChartProps) => {
  const data = skills.map((skill) => ({
    subject: skill.name,
    score: skill.score,
    fullMark: skill.maxScore,
  }));

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-card shadow-card border border-border p-6 animate-scale-in" style={{ animationDelay: "200ms" }}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="relative z-10">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-1">Skills Overview</h2>
          <p className="text-sm text-muted-foreground">Visual representation of your speaking abilities</p>
        </div>

        <div className="h-72 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid 
                stroke="hsl(var(--border))" 
                strokeOpacity={0.5}
              />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ 
                  fill: "hsl(var(--muted-foreground))", 
                  fontSize: 12,
                  fontWeight: 500 
                }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 9]} 
                tick={{ 
                  fill: "hsl(var(--muted-foreground))", 
                  fontSize: 10 
                }}
                axisLine={false}
              />
              <Radar
                name="Score"
                dataKey="score"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.25}
                strokeWidth={2}
                dot={{
                  r: 4,
                  fill: "hsl(var(--primary))",
                  stroke: "hsl(var(--background))",
                  strokeWidth: 2,
                }}
                animationBegin={300}
                animationDuration={1500}
                animationEasing="ease-out"
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{
                  background: `hsl(${172 + index * 15}, 66%, ${50 - index * 5}%)`,
                }}
              />
              <span className="text-xs text-muted-foreground">{skill.name}: {skill.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
