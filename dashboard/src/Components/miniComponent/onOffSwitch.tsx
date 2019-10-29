import React from "react";
import "../../Styles/onOffSwitch.css"

interface OnOffSwitchProps {
    onChange?: (e:any) => void,
    onClick?: (e:any) => void,
    label?: string,
    checked: boolean
}

interface OnOffSwitchState {
    randInt: number
}

const getRandomInt = (min:number, max:number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

class OnOffSwitch extends React.Component<OnOffSwitchProps, OnOffSwitchState> {

    constructor(props:OnOffSwitchProps) {
        super(props);
        this.state = {
            randInt: getRandomInt(0, 10000)
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                <div className="onoffswitch">
                    <input onChange={this.props.onChange} onClick={this.props.onClick} checked={this.props.checked} type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id={"myonoffswitch" + this.state.randInt} />
                    <label className="onoffswitch-label" htmlFor={"myonoffswitch" + this.state.randInt} />
                </div>
                {this.props.label &&
                    <p style={{margin: 0}}>{this.props.label}</p>
                }
            </>
        )
    }
}

export default OnOffSwitch;
