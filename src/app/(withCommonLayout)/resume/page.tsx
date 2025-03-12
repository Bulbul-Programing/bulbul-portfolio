import Education from '@/src/components/Resume/Education';
import Skills from '@/src/components/Resume/Skills';
import Title from '@/src/utils/Title';
import React from 'react';
const Resume = () => {
    return (
        <div>
            {/* Resume section */}
            <Title title='Resume' />
            <Education />
            <Skills />
        </div>
    );
};

export default Resume;