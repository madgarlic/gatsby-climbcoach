import React from "react"
import { T4CNewAssessment } from "../components/t4cnewassessment"
import { T4CShowAssessment } from "../components/t4cshowassessment"

const T4CAssessment = props => {

    var makeNewAssessment = props.assessment_id === "new"

    return (
        <>
            <p>T4C Self Assessment</p>
            {makeNewAssessment && <T4CNewAssessment/>}
            {!makeNewAssessment && <T4CShowAssessment assesment_id/>}
        </>
        
    )
}

export default T4CAssessment