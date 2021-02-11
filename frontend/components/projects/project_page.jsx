import React, {useState} from 'react';
import { useClickOutside } from '../../hooks/click_outside';
import Section from '../section/section'

export default function ProjectPage(props) {
    const [newSection, setNewSection] = useState(false);
    const newSectionRef = useClickOutside(()=>{
        setTimeout(()=>setNewSection(false), 0);
    })
    return (
        <div>
            <div className="projects-page-inner">
                { props.sections ? props.sections.map(section => (
                    <Section section={section}/>
                )) : (
                    <p>No tasks have been made for this project yet!</p>
                )
                }
                {newSection && 
                    <input 
                        ref={newSectionRef}
                        type="text"
                        className="input new-section-input"
                        onChange={e=>{
                            const input = e.target
                            const onEnterKey = (e) => {
                                if (e.keyCode === 13) {
                                    input.removeEventListener('keydown', onEnterKey)
                                    input.blur();
                                    setNewSection(false);
                                }
                            }
                            input.addEventListener('keydown', onEnterKey)
                        }}
                        onBlur={(e)=>{
                            props.createSection({name: e.target.value, project_id: props.projectId})
                        }}
                    />
                }
                <div 
                    className="add-section"
                    onClick={()=>{
                        setNewSection(true);
                        setTimeout(()=>{
                            document.querySelector('.new-section-input').focus();
                        }, 0)
                    }}
                >
                    <span>+</span> Add section
                </div>
            </div>
        </div>
    )
}
