import React from 'react';
import './Filter.css';
import FilterOptionGroup from './FilterOptionGroup';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.state = {
            filterOptionGroups: [
                {
                    name: "Option Group 1", collapsed: true,
                    filterOptions: [
                        { index: 0, name: "Option 1", checked: false },
                        { index: 1, name: "Option 2", checked: false },
                        { index: 2, name: "Option 3", checked: false }]
                },
                {
                    name: "Option Group 2", collapsed: false,
                    filterOptions: [
                        { index: 0, name: "Option 1", checked: false },
                        { index: 1, name: "Option 2", checked: false },
                        { index: 2, name: "Option 3", checked: false }]
                },
                {
                    name: "Option Group 3", collapsed: true,
                    filterOptions: [
                        { index: 0, name: "Option 1", checked: false },
                        { index: 1, name: "Option 2", checked: false },
                        { index: 2, name: "Option 3", checked: false }]
                },
                {
                    name: "Option Group 4", collapsed: true,
                    filterOptions: [
                        { index: 0, name: "Option 1", checked: false },
                        { index: 1, name: "Option 2", checked: false },
                        { index: 2, name: "Option 3", checked: false }]
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="filter">
                    {this.name}
                </div>
                {
                    this.state.filterOptionGroups.map((value) => {
                        return <FilterOptionGroup name={value.name} collapsed={value.collapsed} filterOptions={value.filterOptions} />
                    })
                }
            </div>
        )
    }
}

export default Filter;