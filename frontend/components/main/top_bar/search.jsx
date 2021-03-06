import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchDB } from "../../../actions/search_actions";
import { useClickOutside } from '../../../hooks/click_outside';
import SearchDropDown from './search_dropdown'
import { AiOutlineSearch } from 'react-icons/ai';

function SearchComponent({ searchData, teamId, searchDB }) {
    const [showDropDown, setShowDropDown] = useState(false);
    const dropDownRef = useClickOutside(() => setShowDropDown(false));
    function handleInput(e){
        const searchQuery = e.target.value;
        searchDB(searchQuery, teamId);
        setShowDropDown(true);
    }
    return (
        <div className="search">
            <div className="search-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="nav-circle-item"
                    onChange={handleInput}
                />
                <span><AiOutlineSearch/></span>
            </div>
            {showDropDown && 
                <div
                    className="dropdown-menu search-menu" 
                    ref={dropDownRef}    
                >

                    <SearchDropDown searchData={searchData}/>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    searchData: state.searchData,
    teamId: state.entities.team.id
})

const mapDispatchToProps = (dispatch) => ({
    searchDB: (query, teamId) => dispatch(searchDB(query, teamId)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent)
