import React from 'react'

const Project: React.FC<{ projectId?: string }> = React.memo(({ projectId }) => <div>Project {projectId}</div>)

Project.displayName = 'Memo(Project)'

export default Project
