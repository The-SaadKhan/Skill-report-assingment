import { useState, useRef } from "react";
import { OverallScoreCard } from "@/components/OverallScoreCard";
import { SkillScoreCard } from "@/components/SkillScoreCard";
import { SkillsRadarChart } from "@/components/SkillsRadarChart";
import { FeedbackSection } from "@/components/FeedbackSection";
import { StudentSelector } from "@/components/StudentSelector";
import { studentsData } from "@/data/studentData";
import { GraduationCap, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Index = () => {
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);
  const student = studentsData[selectedStudentIndex];
  const { studentName, assessmentDate, overallScore, maxScore, skills } = student;

  const exportToPDF = async () => {
    if (!reportRef.current) return;
    
    setIsExporting(true);
    try {
      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#0f172a",
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`${studentName.replace(/\s+/g, "_")}_Speaking_Report.pdf`);
    } catch (error) {
      console.error("PDF export failed:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">SpeakScore</h1>
                <p className="text-xs text-muted-foreground">Speaking Assessment Platform</p>
              </div>
            </div>
            <Button 
              onClick={exportToPDF} 
              disabled={isExporting}
              className="gap-2"
            >
              {isExporting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              Export PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main ref={reportRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-background">
        <div className="space-y-8">
          {/* Student Selector */}
          <section>
            <StudentSelector 
              selectedIndex={selectedStudentIndex}
              onSelect={setSelectedStudentIndex}
            />
          </section>

          {/* Overall Score Section */}
          <section key={`overall-${selectedStudentIndex}`}>
            <OverallScoreCard 
              score={overallScore} 
              maxScore={maxScore}
              studentName={studentName}
              assessmentDate={assessmentDate}
            />
          </section>

          {/* Skills Grid & Chart */}
          <section className="grid lg:grid-cols-2 gap-8" key={`skills-${selectedStudentIndex}`}>
            {/* Skills Cards */}
            <div className="space-y-4">
              <div className="mb-2">
                <h2 className="text-lg font-semibold text-foreground">Skill Breakdown</h2>
                <p className="text-sm text-muted-foreground">Individual performance metrics</p>
              </div>
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <SkillScoreCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Radar Chart */}
            <SkillsRadarChart skills={skills} />
          </section>

          {/* Detailed Feedback */}
          <section key={`feedback-${selectedStudentIndex}`}>
            <FeedbackSection skills={skills} overallScore={overallScore} />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">SpeakScore</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering language learners worldwide
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
