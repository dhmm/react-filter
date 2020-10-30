import React from 'react';

class FilterOption extends React.Component {
    constructor(props) {
        super(props);
        this.index= this.props.option.index;
        this.name = this.props.option.name;
        this.state = {            
            checked : this.props.option.checked
        }
    }

    checkClick()
    {
        this.setState({
            checked:!this.state.checked
        });
        this.props.checkOption(this.index,!this.state.checked);
    }
    render() {
        return (
            <div className="filterOption" onClick={evt => this.checkClick()}>
                <div className="checkBox">{this.state.checked === true ? 'V' : ''}</div>{this.name}
            </div>
        )
    }
}

export default FilterOption;