// A tiny async boundary used by the Tool Cabinet. The actual data chunks are named in
// vite.config.js; importing their public summaries on intent warms them without changing state.
export async function preloadWorkspaceData(tool){
  if(['evidence','cinema','integrity','diffLab','claimMatrix','queryWorkbench'].includes(tool))return Promise.all([import('./content/evidence-graph.json'),import('./content/activities.json')]);
  if(['weave','questions'].includes(tool))return Promise.all([import('./content/relationship-weave.json'),import('./content/questions.json')]);
  if(['skills','values','projects','lensStudio'].includes(tool))return Promise.all([import('./content/skills.json'),import('./content/values.json'),import('./content/projects.json')]);
  if(['archive','trailComposer','curator','timeline','threads'].includes(tool))return Promise.all([import('./content/documents.json'),import('./content/activities.json')]);
  return Promise.resolve([]);
}
