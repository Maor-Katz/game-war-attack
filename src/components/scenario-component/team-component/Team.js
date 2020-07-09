import React, {useEffect, useState} from 'react';
import {checkIfComplete} from '../../../services/service';

const Team = (props) => {
    const [isAllStepsDone, setIsAllStepsDone] = useState(false);
    const {details: {team_name, steps}} = props;

    useEffect(() => {
        //set underline to the last step with status 'in_progress'
        if (steps.length >= 1) {
            for (let i = steps.length - 1; i >= 0; i--) {
                if (steps[i].status === 'in_progress') {
                    let x = document.getElementById(steps[i].step_id);
                    if (x) {
                        let underline = document.createElement("SPAN")
                        underline.className = "underline";
                        underline.innerHTML = `<span class="blueLine"></span><span
                        class="greyLine"></span>`;
                        x.append(underline);
                    }
                    break
                }
            }
        }
        //need to check if all steps completed:
        (async function checkIfAllStepsDone() {
            let isAllCompleted = await checkIfComplete(steps)
            setIsAllStepsDone(isAllCompleted);
        })()
    }, [])

    return (
        <div className="specificTeam">
            <div className="teamName">{team_name}</div>
            <div className="steps">{
                steps && steps.reverse().map((s, index) => index < 3 ? <div id={s.step_id} key={s.step_id}
                                                                            className={`stepCircle ${s.status !== 'done' ? s.status === 'in_progress' ? 'inProgress' : 'notStarted' : 'completed'}`}>{s.step_name}
                </div> : null)
            }</div>
            <div className="dotsPlusStatuses">
                {steps.length > 3 && <i className="far fa-ellipsis-h circleWidth"></i>}
                {steps.length > 0 &&
                <div className={`stepCircle ${isAllStepsDone ? 'completed' : 'white'}`}>Attack Completed</div>}
            </div>
        </div>
    );
};

export default Team;