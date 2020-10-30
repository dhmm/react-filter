import React from 'react';
import FilterOption from './FilterOption';

class FilterOptionGroup extends React.Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.state = {
            collapsed: this.props.collapsed,
            filterOptions: this.props.filterOptions
        }

        this.checkOption = (index, checked)=> {
            this.state.filterOptions.map((value) => {
                if (value.index === index) {
                    value.checked = checked;                                        
                }
            });            
        }

    }

    filterCollapseExpand() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        let filters = "";
        if (this.state.collapsed === false) {
            filters =
                <div display={this.collapsed}>
                    {
                        this.state.filterOptions.map((value) => {
                            return <FilterOption option={value} checkOption={this.checkOption} />
                        })
                    }
                </div>;
        }
        return (
            <div>
                <div className="filterOptionGroup" onClick={evt => this.filterCollapseExpand()}>
                    {this.name}
                </div>
                {filters}
            </div>
        )
    }
}

export default FilterOptionGroup;