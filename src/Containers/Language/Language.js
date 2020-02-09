import React from 'react';
import {connect} from 'react-redux';
import * as L_EN from '../../Sources/Languages/EN'
import L_DK from '../../Sources/Languages/DK'

import * as actionTypes from '../../store/actionTypes'

function Language() {

    let cur_language;
    return cur_language = L_EN

}


const mapStateToProps = state => {
    return {
        l_active: state.l_active
    }
}

const mapDispatcheToProps = dispatch => {
    return {
        onLanguageChange: (language) => dispatch(actionTypes.l_change(language))
    }
}
export default connect(mapStateToProps, mapDispatcheToProps)(Language);
