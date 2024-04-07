export function SkillItem({ skill }: { skill: string }) {
  return (
    <div className="p-1 mb-1 mr-2 text-sm text-blue-500 rounded-md bg-slate-200">
      {skill}
    </div>
  );
}
