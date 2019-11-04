import React from "react";


export interface AddWidgetFormProps {
    formTitle: string
    formContent: React.ReactNode
    formValidationFc: () => void
}

export function AddWidgetForm(props: AddWidgetFormProps) {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h2>{props.formTitle}</h2>
            {props.formContent}
            <button onClick={() => {props.formValidationFc()}} className="matter-button-outlined">Add Widget</button>
        </div>
    )
}
